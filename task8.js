
// Task 1: Employee Salary Management
let employee = [
        { id: 1, name: "Abi", salary: 25000 },
        { id: 2, name: "Vinoth", salary: 50000 },
        { id: 3, name: "Vani", salary: 75000 }
]

let above40k = employee.filter(employee => employee.salary > 40000);
console.log(above40k);

let above60k = employee.find(employee => employee.salary > 60000);
console.log(above60k);

let totalSalary = employee.reduce(
        (total, employee) => total + employee.salary, 0);
console.log(totalSalary);


let employeeName = employee.map(employee => employee.name);
console.log(employeeName);

// Task 2: College Admission Form

let student = {
        name: "Mithu",
        age: 20,
        percentage: 80
};

function checkAdmission(student) {
        if (student.age < 18) {
                return "Admission Rejected - Age must be 18+";
        } else if (student.percentage < 60) {
                return "Admission Rejected - Percentage must be 60+";
        } else {
                return "Admission Approved";
        }

}

console.log("Name", student.name);
console.log("Age", student.age);
console.log("Percentage", student.percentage);
console.log("status", checkAdmission(student));

// Task 3: E-Commerce Cart
let cart = [
        { product: "Shoes", price: 2000, qty: 2 },
        { product: "Watch", price: 1500, qty: 1 },
        { product: "Bag", price: 1000, qty: 3 }
];

let totalBill = cart.reduce(
        (total, item) => total + (item.price * item.qty), 0);
console.log(totalBill);

let expensive = cart.reduce((max, item) => {
        if (item.price > max.price) {
                return item;
        } else {
                return max;
        }
})
console.log(expensive);

let allProducts = cart.map(item => item.product);
console.log(allProducts);

// Task 4: Traffic Fine System

let signal = "red";
let fine = 0;

switch (signal) {
        case "red": console.log("Stop the vehicle");
                fine = 1000;
                break;
        case "yellow": console.log("Get Ready");
                fine = 500;
                break;
        case "green": console.log("Go");
                fine = 0;
                break;
        default: onsole.log("Invalid Signal");
                fine = 0;
}
console.log("Fine Amount:" + fine);

// Task 5: Student Result Processing

let studentMark = [
        { name: "A", mark: 95 },
        { name: "B", mark: 45 },
        { name: "C", mark: 80 },
        { name: "D", mark: 30 }
];

let passesStudent = studentMark.filter(student => student.mark > 50);
console.log("Passed Students:");
console.log(passesStudent);

let faliledStudent = studentMark.filter(student => student.mark < 50);
console.log("Failed Students:");
console.log(faliledStudent);

let gradeList = studentMark.map(student => {
        let grade;
        if (student.mark >= 90) {
                grade = "A";
        } else if (student.mark >= 75) {
                grade = "B";
        } else if (student.mark >= 50) {
                grade = "C";
        } else {
                grade = "Fail";
        }

        return {
                name: student.name,
                mark: student.mark,
                grade: grade
        }
})
console.log("Grade list");
console.log(gradeList);

// Task 6: Online Food Delivery
function placeOrder(customerName, ...items) {
        console.log("Customer Name:", customerName);
        console.log("Ordered Items:");
        console.log(items);
        console.log("items:", items.length);
}

placeOrder("Abi", "shoes", "watch", "Bag");


// Task 7: Bank Account System
let balance = 0;
function deposit(amount) {
        balance += amount;
        return balance;
}

function withdraw(amount) {
        if (amount <= balance) {
                balance -= amount;
        } else {
                console.log("Insufficient Balance");
        }
        return balance;
}

function checkBalance() {
        return balance
}


console.log("After Deposit:", deposit(5000));
console.log("After Withdraw:", withdraw(2000));
console.log("Current Balance:", checkBalance());


// Task 8: Movie Ticket Booking
let totaSeat = 10;
let bookedSeat = [];
function bookSeat(seatNumber){
if(seatNumber > totaSeat || seatNumber <=0){
        console.log("Invalid Seat Number");
        return;
}
if(bookedSeat.includes(seatNumber)){
        console.log("Seat already Booked");
}else {
        bookedSeat.push(seatNumber);
       console.log("Seat booked successfully: " + seatNumber);
}
}

bookSeat(1);
bookSeat(3);
console.log("Available Seats:");
for (let i = 1; i <= totaSeat; i++) {
    if (!bookedSeat.includes(i)) {
        console.log("Seat Available: " + i);
    }
}
console.log("Booked Seats:");
for (let seat of bookedSeat) {
    console.log("Seat Booked: " + seat);
}


// Task 9: User Login Validation
function validateUser(email,password,username){
if(username.includes(" ")){
        return "Invalid Username: No spaces allowed";
}

if(!email.includes("@")){
 return "Invalid Email: Must contain @";
}

if(password.length<8){
        return "Invalid Password: Minimum 8 characters required";
}
return "Login Successful";
}

console.log(validateUser("Abiramisubramani@gmail.com", "password123", "Abirami"));


//     Task 10: Birthday Day Finder
function showDOB(dob){
   let date = new Date(dob);
let day = date.getDate();
let month = date.getMonth()+1;
let year = date.getFullYear();
let weekDay = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
let weekName = weekDay[date.getDay()]
console.log("Day:", day);
    console.log("Month:", month);
    console.log("Year:", year);
    console.log("Weekday:", weekName);
}
showDOB("2026-06-16");


// Task 11: Netflix Subscription System

function showPlan(plan) {

    let result =
        plan === "Mobile"
            ? "Mobile Plan: 1 device, SD quality"
        : plan === "Basic"
            ? "Basic Plan: 1 device, HD quality"
        : plan === "Standard"
            ? "Standard Plan: 2 devices, Full HD quality"
        : plan === "Premium"
            ? "Premium Plan: 4 devices, Ultra HD quality"
        : "Invalid Plan";
    console.log(result);

}

showPlan("Mobile");
showPlan("Basic");
showPlan("Standard");
showPlan("Premium");
showPlan("Gold");


// Task 12: Hospital Patient Management
let patients = [
    { id: 1, name: "Abi", status: "Normal" },
    { id: 2, name: "Kavin", status: "Critical" },
    { id: 3, name: "James", status: "Critical" },
    { id: 4, name: "Vinoth", status: "Normal" }
];

let critical = patients.filter(function(patient){
 return patient.status === "Critical";
})
console.log("Critical Patients:");
console.log(critical);

let patientId = patients.find(patient => patient.id === 2);
console.log("Patient Found:");
console.log(patientId);

let totalPatients = patients.length;
console.log("Total Patients:", totalPatients);


// Task 13: Inventory Management System

let inventory1 = [
    { id: 1, product: "Laptop", stock: 10 },
    { id: 2, product: "Mobile", stock: 20 }
];

let inventory2 = [
    { id: 3, product: "Headphone", stock: 15 },
    { id: 4, product: "Smartwatch", stock: 8 }
];

let merge = [...inventory1,...inventory2];
console.log("Merged Inventory:");
console.log(merge);

let {id, product, stock} = merge[0];
console.log("Product Details:");
console.log("ID:", id);
console.log("Product:", product);
console.log("Stock:", stock);

let newProduct = {
    id: 5,
    product: "Tablet",
    stock: 12
};

let update = [...merge, newProduct];
console.log("Updated Inventory:");
console.log(update);


// Task 14: WhatsApp Group Management

let group = ["Abi", "Vinoth", "Krish"];
console.log("Initial Group:");
console.log(group)
group.push("Mithula");
console.log("After push():");
console.log(group);
group.pop();
console.log("After pop():");
console.log(group);
group.unshift("Arun");
console.log("After shift():");
console.log(group);
group.splice(1,0, "Anu");
console.log("Final Group List:");
console.log(group);


// Task 15: Product API Dashboard

let products = [];

// Fetch products from API
fetch("https://fakestoreapi.com/products")
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {

        products = data;

        console.log("All Products:");

        // 1. Display product titles
        products.forEach(function(product) {
            console.log(product.title);
        });

        // 2. Find products above ₹1000
        // (API price is in dollars, so treating it as value)
        let above1000 = products.filter(function(product) {
            return product.price > 1000;
        });

        console.log("\nProducts above ₹1000:");
        console.log(above1000);

        // 3. Count total products
        console.log("\nTotal Products:", products.length);

    })
    .catch(function(error) {
        console.log("Error fetching data:", error);
    });




