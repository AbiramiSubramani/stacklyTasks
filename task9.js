const productsContainer = document.querySelector("#products");
const searchInput = document.querySelector("#search");
const categorySelect = document.querySelector("#category");
const cartCount = document.querySelector("#cartCount");
const cartItems = document.querySelector("#cartItems");
const stats = document.querySelector("#stats");
const status = document.querySelector("#status");
function toggleCart() {
document.getElementById("cartPanel").classList.toggle("hidden");
}
let products = [];
let cart = [];

status.textContent = "Loading Products...";

fetch("https://fakestoreapi.com/products")
    .then(res => res.json())
    .then(data => {

        products = data;

        displayProducts(products);
        displayStatistics(products);

        status.textContent = "Products Loaded Successfully";
    })
    .catch(error => {
        console.log(error);
        status.textContent = "Failed To Load Products";
    });

/* DISPLAY PRODUCTS */
function displayProducts(productList) {
    productsContainer.innerHTML = "";

    productList.forEach(product => {
        productsContainer.innerHTML += `
        <div class="card">

            <img src="${product.image}">

            <h3>${product.title}</h3>

            <p class="price">$${product.price}</p>

            <p class="category">${product.category}</p>

            <p class="rating">⭐ ${product.rating.rate}</p>

            <button onclick="addToCart(${product.id})">
                Add To Cart
            </button>

        </div>
        `;
    });
}

/* SEARCH + CATEGORY FILTER */
function filterProducts() {

    let searchValue = searchInput.value.toLowerCase().trim();
    let categoryValue = categorySelect.value;

    let filtered = products;

    // category filter
    if (categoryValue !== "all") {
        filtered = filtered.filter(product =>
            product.category === categoryValue
        );
    }

    // SEARCH 
    if (searchValue !== "") {
        filtered = filtered.filter(product =>
            product.title.toLowerCase().includes(searchValue) ||
            product.category.toLowerCase().includes(searchValue)
        );
    }

    displayProducts(filtered);
}

searchInput.addEventListener("keyup", filterProducts);
categorySelect.addEventListener("change", filterProducts);

/* STATISTICS */
function displayStatistics(data) {

    let totalProducts = data.length;

    let averagePrice = (
        data.reduce((sum, product) => sum + product.price, 0)
        / data.length
    ).toFixed(2);

    // ✅ Highest price product
    let highestPriceProduct = data.reduce((max, product) =>
        product.price > max.price ? product : max
    );

    // ✅ Lowest price product
    let lowestPriceProduct = data.reduce((min, product) =>
        product.price < min.price ? product : min
    );

   stats.innerHTML = `
<div class="stats-grid">

    <div class="stat-card">
        <h3>Total Products</h3>
        <p>${totalProducts}</p>
    </div>

    <div class="stat-card">
        <h3>Average Price</h3>
        <p>$${averagePrice}</p>
    </div>

    <div class="stat-card">
        <h3>Highest Price</h3>
        <p>
            ${highestPriceProduct.title}<br>
            <b>$${highestPriceProduct.price}</b>
        </p>
    </div>

    <div class="stat-card">
        <h3>Lowest Price</h3>
        <p>
            ${lowestPriceProduct.title}<br>
            <b>$${lowestPriceProduct.price}</b>
        </p>
    </div>

</div>
`;
}



function addToCart(id) {

    let product = products.find(item => item.id === id);

    let existing = cart.find(item => item.id === id);

    if (existing) {
        existing.qty += 1;
    } else {
        cart.push({
            ...product,
            qty: 1
        });
    }

    updateCart();
}

/* REMOVE FROM CART */
function removeFromCart(id) {

    cart = cart.filter(item => item.id !== id);

    updateCart();
}


function updateCart() {

    let total = 0;

    cartCount.textContent = cart.reduce((sum, item) => sum + item.qty, 0);

    cartItems.innerHTML = "";

    cart.forEach(item => {

        total += item.price * item.qty;

        cartItems.innerHTML += `
        <div class="cart-item">

            <span class="title">${item.title}</span>

            <div class="qty-box">
                <button onclick="decreaseQty(${item.id})">-</button>
                <span>${item.qty}</span>
                <button onclick="increaseQty(${item.id})">+</button>
            </div>

            <span class="price">
                $${(item.price * item.qty).toFixed(2)}
            </span>

            <button class="remove-btn" onclick="removeFromCart(${item.id})">
                Remove
            </button>

        </div>
        `;
    });

    cartItems.innerHTML += `
        <h3 style="margin-top:10px;">
            Total: $${total.toFixed(2)}
        </h3>
    `;
}

function increaseQty(id) {
    let item = cart.find(p => p.id === id);
    item.qty += 1;
    updateCart();
}
function decreaseQty(id) {

    let item = cart.find(p => p.id === id);

    if (item.qty > 1) {
        item.qty -= 1;
    } else {
        cart = cart.filter(p => p.id !== id);
    }

    updateCart();
}