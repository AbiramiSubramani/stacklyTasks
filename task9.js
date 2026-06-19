const productsContainer = document.querySelector("#products");
const searchInput = document.querySelector("#search");
const categorySelect = document.querySelector("#category");
const cartCount = document.querySelector("#cartCount");
const cartItems = document.querySelector("#cartItems");
const stats = document.querySelector("#stats");
const status = document.querySelector("#status");

let products = [];
let cart = [];

/* FETCH PRODUCTS */
// fetch("https://fakestoreapi.com/products")
//     .then(res => res.json())
//     .then(data => {
//         products = data;
//  console.log("ALL CATEGORIES:");
//     console.log([...new Set(products.map(p => p.category))]);
//         displayProducts(products);
//         displayStatistics(products);

//         status.textContent = "Products Loaded Successfully";
//     })
//     .catch(error => {
//         console.log(error);
//         status.textContent = "Failed To Load Products";
//     });
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

    // SEARCH FIX (IMPORTANT)
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

    let highestPriceProduct = [...data].sort((a, b) => b.price - a.price)[0];
    let lowestPriceProduct = [...data].sort((a, b) => a.price - b.price)[0];

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
            <p>${highestPriceProduct.title}</p>
        </div>

        <div class="stat-card">
            <h3>Lowest Price</h3>
            <p>${lowestPriceProduct.title}</p>
        </div>

    </div>
    `;
}

/* ADD TO CART */
function addToCart(id) {

    let existingProduct = cart.find(item => item.id === id);

    if (existingProduct) {
        alert("Already added to cart!");
        return;
    }

    let product = products.find(item => item.id === id);

    cart.push(product);

    updateCart();
}

/* REMOVE FROM CART */
function removeFromCart(id) {

    cart = cart.filter(item => item.id !== id);

    updateCart();
}

/* UPDATE CART */
function updateCart() {

    cartCount.textContent = cart.length;

    cartItems.innerHTML = "";

    cart.forEach(item => {
        cartItems.innerHTML += `
        <div class="cart-item">
            <span>${item.title}</span>
            <button class="remove-btn" onclick="removeFromCart(${item.id})">
                Remove
            </button>
        </div>
        `;
    });
}