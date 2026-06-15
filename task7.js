// Task 1: Traffic Signal Management

let userInput = prompt("Enter signal color");

switch (userInput) {
        case "red":
                console.log("Stop");
                break;
        case "green":
                console.log("Go");
                break;
        case "yellow":
                console.log("wait")
                break;
        default:
                console.log("Inavalid color");

}

// Task 2: Employee Attendance Report

for (let i=1;i<=30;i++){
        console.log(`Employee ${i} Present`);
}

// Task 3: ATM Cash Withdrawal
let balance = 10000;
if(balance>0){
        balance -=500;
        console.log(`Remaining Balance: ₹${balance}`);
}

// Task 4: College Admission Eligibility
let age =Number(prompt("enter age"));
let percentage = Number(prompt("enter percentage"));
let entranceExam = prompt("Entrance Exam Passed? (yes/no)");
if(age >= 18){
        if(percentage >=70){
                if(entranceExam === "yes"){
                         console.log("Admission Approved");
                }else{
                           console.log("Admission Rejected: Entrance Exam Not Passed");
                }

        }else{
                console.log("Admission Rejected: Percentage Below 70");
        } 
} else{
        console.log("Admission Rejected: Age Must Be 18 or Above");
        
}

// Task 5: Food Delivery Status

let foodDelivery = function(customerName,foodItem,deliveryAddress){
  console.log(`Hello ${customerName}, your order for ${foodItem} will be delivered to ${deliveryAddress}.`);
}

foodDelivery("Abi","Briyani","chennai");

// Task 6: Salary Processing System
function calculateSalary(basicSalary) {
    return basicSalary;
}
function calculateBonus(salarie){
let bonus = salarie*0.10;
return bonus;
}
let salarie = calculateSalary(30000);
let bonus = calculateBonus(salarie);
console.log("Total Salary:", salarie + bonus);


// Task 7: E-commerce Discount Engine
function generateInvoice(finalAmount) {
    console.log("Invoice Generated");
    console.log("Final Amount: ₹" + finalAmount);
}

function applyDiscount(amount, callback) {
    let discount = amount * 0.20; // 20% discount
    let finalAmount = amount - discount;

    console.log("Discount Applied: ₹" + discount);

    callback(finalAmount);
}

applyDiscount(5000, generateInvoice);

// Task 8: Promotional Offer      
function* generateOffers() {
    yield "10% OFF";
    yield "20% OFF";
    yield "Free Delivery";
    yield "Buy 1 Get 1";
}

const offers = generateOffers();

console.log(offers.next().value);
console.log(offers.next().value);
console.log(offers.next().value);
console.log(offers.next().value);


// Task 9: Student Database Merge
let scienceStudents = [
    "Abi",
    "Priya",
    "Krish"
];

let commerceStudents = [
    "Abirami",
    "Vijay",
    "Mithula"
];

let students = [...scienceStudents,...commerceStudents];
console.log(students)



// Task 10: Online Exam System
function calculateMarks(studentName, ...marks) {
    let total = 0;

    for (let mark of marks) {
        total += mark;
    }

    console.log("Student Name:", studentName);
    console.log("Total Marks:", total);
}

calculateMarks("Abirami", 85, 90, 78, 88, 95);

// Task 11: Employee Profile

let employee = {
    name: "Abi",
    department: "Development",
    salary: 50000,
    experience: 3
};

// Object Destructuring
let { name, department, salary, experience } = employee;

console.log("Name:", name);
console.log("Department:", department);
console.log("Salary:", salary);
console.log("Experience:", experience);

// Task 12: Product Inventory Filter
let products = [
    { name: "Mobile", price: 15000 },
    { name: "Headphone", price: 3000 },
    { name: "Laptop", price: 50000 }
];

let filteredProducts = function(product){
    return product.price > 5000;
};

let result = products.filter(filteredProducts);

console.log(result);

// Task 13: Find First Premium Customer
let customers = [
    { id: 1, name: "Abi", purchaseAmount: 25000 },
    { id: 2, name: "Priya", purchaseAmount: 45000 },
    { id: 3, name: "Karan", purchaseAmount: 60000 },
    { id: 4, name: "Anu", purchaseAmount: 80000 }
];

// Find first customer whose purchase amount exceeds ₹50,000
let premiumCustomer = customers.find(
    customer => customer.purchaseAmount > 50000
);

console.log(premiumCustomer);

// Task 14: Company Expense Tracker
let expenses = [10000, 15000, 20000, 5000, 12000];

let totalExpenses = expenses.reduce(function(total, expense) {
    return total + expense;
}, 0);

console.log("Total Company Expenses: ₹" + totalExpenses);


// Task 15: Gaming Tournament Verification
let players = [
    { name: "Abi", age: 20 },
    { name: "Priya", age: 22 },
    { name: "Karan", age: 19 },
    { name: "Anu", age: 21 }
];

let isEligible = players.every(function(player) {
    return player.age > 18;
});

console.log("All Players Above 18:", isEligible);       

// Task 16: Job Portal Search

let candidates = [
    { name: "Abi", skills: ["HTML", "CSS", "JavaScript"] },
    { name: "Priya", skills: ["Python", "Java"] },
    { name: "Karan", skills: ["React", "Node.js"] },
    { name: "Anu", skills: ["C++", "SQL"] }
];

let knowsReact = candidates.some(function(candidate) {
    return candidate.skills.includes("React");
});

console.log("At least one candidate knows React:", knowsReact);

// Task 17: Mobile Number Validator
let mobileNumber = prompt("Enter Mobile Number:");

if (
    mobileNumber.length === 10 &&
    (
        mobileNumber.startsWith("6") ||
        mobileNumber.startsWith("7") ||
        mobileNumber.startsWith("8") ||
        mobileNumber.startsWith("9")
    )
) {
    console.log("Valid Mobile Number");
} else {
    console.log("Invalid Mobile Number");
}

// Task 18: URL Slug Generator
let title = "Learn JavaScript Complete Course";

let slug = title.toLowerCase().split(" ").join("-");

console.log(slug);

// Task 19: Employee Sorting Dashboard


let employees = [
    { id: 1, name: "Abi", salary: 30000 },
    { id: 2, name: "Priya", salary: 50000 },
    { id: 3, name: "Krish", salary: 40000 },
    { id: 4, name: "Mithula", salary: 25000 }
];

// Highest → Lowest
let highestToLowest = [...employees].sort((a, b) => b.salary - a.salary);

console.log("Highest to Lowest Salary:");
console.log(highestToLowest);

// Lowest → Highest
let lowestToHighest = [...employees].sort((a, b) => a.salary - b.salary);

console.log("Lowest to Highest Salary:");
console.log(lowestToHighest);

// Task 20: Movie Booking System
let movies = [
    "Leo",
    "Jailer",
    "Vikram",
    "Master"
];

let bookingIds = movies.map(function(movie, index) {
    return `BOOK${index + 1} - ${movie}`;
});

console.log(bookingIds);
