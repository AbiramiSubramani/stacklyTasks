// Task 1: Student Result Checker

let marks = 75;
let result = marks >= 35 ? "Pass" : "Fail";
let grade = marks >= 90 ? "Grade A" : marks >= 75 ? "Grade B" : marks >= 60 ? "Grade C" : "No Grade";
console.log("Result:", result);
console.log("Grade:", grade);


// Task 2: Employee Bonus Calculator
let salary = 25000;
let bonus = salary * 0.10;
salary += bonus;         // salary = salary + bonus

console.log("Original Salary : 25000");
console.log("Bonus :", bonus);
console.log("Final Salary :", salary);

// Task 3: User Login Validation

let email = "admin@gmail.com";
let password = "12345";
if (email === "admin@gmail.com" && password === "12345") {
        console.log("Login Success");
} else {
        console.log("Login Failed");
}

// Task 4: Product Discount Calculator

let price = 2000;
let finalAmount = price > 1000 ? price - (price * 0.20) : price;
console.log("Final Amount :", finalAmount);

//  Task 5: Array Product Management
let products = ["Laptop", "Mobile", "Mouse", "Keyboard"];
console.log("First Product:", products[0]);
console.log("Last Product:", products[products.length - 1]);
console.log("Total Products:", products.length);

// Task 6: Employee Object
let employee = {
        name: "Abirami",
        department: "Development",
        salary: 30000
}

console.log(employee);
console.log("Name:", employee.name);
console.log("Salary:", employee.salary);

// Task 7: E-Commerce Cart Total
let shirt = 500;
let pant = 1000;
let shoe = 1500;
let totalBill = shirt + pant + shoe;
let finalBill = totalBill - (totalBill * 0.10);
console.log("Final Amount", finalBill);

// Task 8: Age Eligibility Checker
let age = 19;
if (age >= 18) {
        console.log("Eligible for Voting");
} else {
        console.log("Not Eligible");
}

// Task 9: Increment Decrement Practice
let a = 10;
a++;
++a;
a--;
--a;
console.log(a++);   //10 11   10
console.log(++a); //12 12    12
console.log(a--);  //12 11   12
console.log(--a); //10 10    10

//  Task 10: Mini Employee Attendance System
let isPresent = true;
let completedTask = true;
if (isPresent === true && completedTask === true) {
        console.log("Eligible for Salary");
} else {
        console.log("Not Eligible");
}


// Bonus Company-Level Task
// Employee Management Console App
let employeeData = {
        id: 101,
        name: "John",
        department: "development",
        salary: 35000,
        experience: 2
}

let newBonus = employeeData.salary * 0.10;
let finalSalary = employeeData.salary + newBonus;
let status = employeeData.experience >= 2 ? "Good" : "Average";

console.log("Employee ID :", employeeData.id);
console.log("Employee Name :", employeeData.name);
console.log("Department :", employeeData.department);
console.log("Salary :", employeeData.salary);
console.log("Experience :", employeeData.experience);
console.log("Bonus :", newBonus);
console.log("Final Salary :", finalSalary);
console.log("Performance Status :", status);