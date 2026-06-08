// Task 1: Employee Salary Calculator Scenario

let basicSalary = 25000;
let hra = basicSalary * 20/100;
let bonus = basicSalary * 10/100;
let totalSalary = basicSalary +hra + bonus;
let tax = totalSalary * 5/100;
let finalSalary = totalSalary - tax;
console.log("Basic Salary :", basicSalary);
console.log("HRA :", hra);
console.log("Bonus :", bonus);
console.log("Tax :", tax);
console.log("Final Salary :", finalSalary);


// Task 2: Student Grade System Scenario

let marks = prompt("Enter the mark"); // Input marks

if (marks >= 90 && marks <= 100) {
    console.log("Grade: A+");
}
else if (marks >= 80 && marks <= 89) {
    console.log("Grade: A");
}
else if (marks >= 70 && marks <= 79) {
    console.log("Grade: B");
}
else if (marks >= 60 && marks <= 69) {
    console.log("Grade: C");
}
else {
    console.log("Grade: Fail");
}


// Task 3: Login Authentication System Scenario

// let username = prompt("enter username");
// let password = prompt("password");

let username = "admin";
let password = "12345";

if (username === "admin") {

    if (password === "12345") {
        console.log("Login Success");
    } else {
        console.log("Invalid Password");
    }

} else {
    console.log("Invalid Username");
    
}

// Task 4: ATM Withdrawal Machine Scenario

let balance = 5000;
let withdrawAmount = Number(prompt("Enter withdrawal amount:"));
if(withdrawAmount <= balance){
        remainingBalance = balance - withdrawAmount;
       console.log("Withdrawal Successful");
    console.log("Remaining Balance:", remainingBalance);
}else {
    console.log("Insufficient Balance");
}


// Task 5: E-Commerce Discount System Scenario

let purchase = prompt("Enter purchase amount:");
let discount = 0;
if(purchase >= 10000){
       discount = purchase * 0.2;

}
else if(purchase >= 5000){
        discount = purchase * 0.1;
}
else if(purchase >= 2000){
        discount = purchase * 0.05;
}else{
        discount = 0;
}

let finalAmount = purchase - discount;

console.log("Original Amount:", purchase);
console.log("Discount:", discount);
console.log("Final Amount:", finalAmount);

// Task 6: Traffic Fine Checker Scenario

let helmet = prompt("Do you wear helmet? (yes/no)");
let license = prompt("Do you have license? (yes/no)");

let fine = 0;

if (helmet === "no" && license === "no") {
    fine = 3000;
}
else if (helmet === "no") {
    fine = 1000;
}
else if (license === "no") {
    fine = 2000;
}
else {
    fine = 0;
}

console.log("Fine Amount:", fine);

// Task 7: Employee Attendance Tracker Scenario

let attendance = ["P", "P", "A", "P", "A", "P", "P"];

let presentDays = 0;
let absentDays = 0;

for (let i = 0; i < attendance.length; i++) {
    if (attendance[i] === "P") {
        presentDays++;
    } 
    else if (attendance[i] === "A") {
        absentDays++;
    }
}

console.log("Present Days:", presentDays);
console.log("Absent Days:", absentDays);


// Task 8: Product Inventory Management Scenario
let product = {
  productName : "Laptop",
 price : 50000,
 stock : 10
}

for (let key in product) {
    console.log(key + " : " + product[key]);
}


// Task 9: Cab Fare Calculator Scenario

let distance = 12;
let fare = 0;

if (distance <= 5) {
    fare = distance * 20;
}
else if (distance <= 10) {
    fare = (5 * 20) + ((distance - 5) * 15);
}
else {
    fare = (5 * 20) + (5 * 15) + ((distance - 10) * 10);
}

console.log("Total Fare :", fare);

 
// Task 10: Mini Employee Management System (Real Company Task)

let employee = [
 {id:1,name:"Rahul",salary:25000},
 {id:2,name:"Kiran",salary:30000},
 {id:3,name:"Navi",salary:40000}
]
console.log("All Employees:");
for(let i=0;i<employee.length;i++){
        console.log(employee[i]);
}

let highest = employee[0];
let lowest = employee[0];
let totalSalaries = 0;
for(let i=0;i<employee.length;i++){
if(employee[i].salary > highest.salary){
        highest = employee[i];
}
if(employee[i].salary < lowest.salary){
        lowest = employee[i];
}
  totalSalaries += employee[i].salary;
}
let totalEmployees = employee.length;

console.log("Highest Salary Employee:", highest);
console.log("Lowest Salary Employee:", lowest);
console.log("Total Employees:", totalEmployees);
console.log("Total Salary Expenditure:", totalSalaries);