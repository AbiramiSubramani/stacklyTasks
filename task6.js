// Task 1: Employee Bonus Calculator


let employee = {
    name: "Abi",
    salary: 50000,
    experience: 6
};

let bonus = 0;

if (employee.experience >= 5) {
    bonus = employee.salary * 0.20;
} else if (employee.experience >= 2) {
    bonus = employee.salary * 0.10;
} else {
    bonus = employee.salary * 0.05;
}

let finalSalary = employee.salary + bonus;

console.log("Final Salary:", finalSalary);

// Task 2: College Admission System
let student = {
    name: "Abi",
    age: 18,
    percentage: 75
};

if (student.age >= 17) {
    if (student.percentage >= 60) {
        console.log("Admission Approved");
    } else {
        console.log("Admission Rejected");
    }
} else {
    console.log("Admission Rejected");
}

// Task 3: Food Delivery Menu
let choice = 1;

switch (choice) {
    case 1:
        console.log("Order Confirmed : Pizza");
        break;

    case 2:
        console.log("Order Confirmed : Briyani");
        break;

    case 3:
        console.log("Order Confirmed : Shawarma");
        break;

    case 4:
        console.log("Order Confirmed : Fried Rice");
        break;

    default:
        console.log("Invalid Menu Selection");
}

// Task 4: Attendance Tracker
let students = ["Abi","Vinoth","Krish","Mithu","Anu","Priya","Arun","Divya","Vijay","Meena"];
// Print all students using for-of loop
for (let student of students) {
    console.log(student);
}

// Count total students
console.log("Total Students:", students.length);

// Task 5: E-Commerce Cart

let cart = [
  { product: "Mobile", price: 15000 },
  { product: "Headset", price: 2000 },
  { product: "Charger", price: 1000 }
];

// Print all products
console.log("Products in Cart:");
for (let item of cart) {
    console.log(item.product);
}

// Calculate total cart value
let totalValue = 0;

for (let item of cart) {
    totalValue += item.price;
}

console.log("Total Cart Value:", totalValue);

// Find most expensive product
let expensiveProduct = cart[0];

for (let item of cart) {
    if (item.price > expensiveProduct.price) {
        expensiveProduct = item;
    }
}

console.log("Most Expensive Product:", expensiveProduct.product);

// Task 6: Bank Account Management
let balance = 10000;

function deposit(amount) {
    balance += amount;
    console.log("Deposited Amount:", amount);
    console.log("Current Balance:", balance);
}

function withdraw(amount) {
    if (amount <= balance) {
        balance -= amount;
        console.log("Withdrawn Amount:", amount);
        console.log("Current Balance:", balance);
    } else {
        console.log("Insufficient Balance");
    }
}

function checkBalance() {
    console.log("Available Balance:", balance);
}

checkBalance();

deposit(5000);

withdraw(3000);

checkBalance();

// Task 7: Movie Ticket Booking
let personAge = 25;
let ticketPrice;

if (personAge < 5) {
    ticketPrice = 0;
    console.log("Free Ticket");
} else if (personAge <= 18) {
    ticketPrice = 100;
    console.log("Ticket Price: ₹100");
} else if (personAge <= 60) {
    ticketPrice = 200;
    console.log("Ticket Price: ₹200");
} else {
    ticketPrice = 120;
    console.log("Ticket Price: ₹120");
}

// Task 8: Online Shopping Discount
let purchaseAmount = 6000;
let discount = 0;

if (purchaseAmount > 5000) {
    discount = purchaseAmount * 0.20;
} else if (purchaseAmount > 3000) {
    discount = purchaseAmount * 0.10;
} else if (purchaseAmount > 1000) {
    discount = purchaseAmount * 0.05;
}

let finalAmount = purchaseAmount - discount;

console.log("Original Amount:" + purchaseAmount);
console.log("Discount:" + discount);
console.log("Final Amount:" + finalAmount);

// Task 9: Food Inventory System
let inventory = ["Rice", "Oil", "Sugar", "Milk", "Egg"];

inventory.push("Bread");
inventory.push("Butter");

inventory.shift();

inventory.pop();

if (inventory.includes("Milk")) {
    console.log("Milk exists in inventory");
} else {
    console.log("Milk does not exist in inventory");
}

console.log("Final Inventory:", inventory);

// Task 10: Hospital Patient Management
let patient = {
    patientName: "Rahul",
    age: 35,
    disease: "Fever",
    doctor: "Dr. Kumar"
};

console.log("Patient Details:");
for (let key in patient) {
    console.log(key + ":", patient[key]);
}

let { patientName, age, disease, doctor } = patient;

console.log("Using Destructuring:");
console.log("Patient Name:", patientName);
console.log("Age:", age);
console.log("Disease:", disease);
console.log("Doctor:", doctor);

// Task 11: Amazon Order Tracker
function sendSMS() {
    console.log("SMS Sent To Customer");
}

function placeOrder(callback) {
    console.log("Order Placed Successfully");
    callback();
}

placeOrder(sendSMS);

// Task 12: Cashback Offer Generator
function* cashbackOffers() {
    yield "10% Cashback";
    yield "20% Cashback";
    yield "Free Delivery";
    yield "Buy 1 Get 1";
}

let offers = cashbackOffers();

console.log(offers.next().value);
console.log(offers.next().value);
console.log(offers.next().value);
console.log(offers.next().value);

// Task 13: Employee Database

let employees = [
    { id: 1, name: "Vinoth", salary: 25000 },
    { id: 2, name: "Krish", salary: 30000 },
    { id: 3, name: "Abi", salary: 40000 }
];

console.log("Employee Names:");
for (let employee of employees) {
    console.log(employee.name);
}

let totalSalary = 0;

for (let employee of employees) {
    totalSalary += employee.salary;
}

console.log("Total Salary Expense:" + totalSalary);

let highestSalaryEmployee = employees[0];

for (let employee of employees) {
    if (employee.salary > highestSalaryEmployee.salary) {
        highestSalaryEmployee = employee;
    }
}

console.log("Highest Salary Employee:", highestSalaryEmployee.name);
console.log("Salary:" + highestSalaryEmployee.salary);

// Task 14: Railway Reservation System
let availableSeats = 50;

function bookSeats(seats) {
    if (seats <= availableSeats) {
        availableSeats -= seats;

        console.log(seats + " seats booked successfully.");
        console.log("Available Seats:", availableSeats);
    } else {
        console.log("Booking Rejected! Seats unavailable.");
    }
}

bookSeats(10);
bookSeats(20);
bookSeats(25);

// Task 15: Mobile Store Billing System
let products = {
    Mobile: 15000,
    Laptop: 50000,
    Headphone: 2000,
    Smartwatch: 5000
};

let selectedProducts = ["Mobile", "Headphone", "Smartwatch"];

let totalAmount = 0;

for (let product of selectedProducts) {
    totalAmount += products[product];
}

let gst = totalAmount * 0.18;

let finalBill = totalAmount + gst;

console.log("Selected Products:");
for (let product of selectedProducts) {
    console.log(product + " - ₹" + products[product]);
}

console.log("Total Amount:" + totalAmount);
console.log("GST (18%):" + gst);
console.log("Final Bill:" + finalBill);