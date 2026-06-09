// Task 1: Age Category Finder
let age = Number(prompt("Enter your age:"));

if (age >= 0 && age <= 12) {
        console.log("Child");
} else if (age >= 13 && age <= 19) {
        console.log("Teenager");
} else if (age >= 20 && age <= 59) {
        console.log("Adult");
} else if (age >= 60) {
        console.log("Senior Citizen");
} else {
        console.log("Invalid Age");
}


// Task 2: Salary Hike Calculator
let salaryInput = Number(prompt("Enter salary"));
let hike;
let newSalary;
if (salaryInput >= 20000 && salaryInput <= 50000) {
        hike = salaryInput * 10 / 100;
} else if (salaryInput <= 20000) {
        hike = salaryInput * 20 / 100;
}else {
    hike = salaryInput * 5 / 100;
}

newSalary = hike + salaryInput;
console.log("Old Salary", salaryInput);
console.log("New Salary", newSalary);

// Task 3: Electricity Department
let units = Number(prompt("Enter units consumed:"));
let bill;

if (units <= 100) {
    bill = units * 5;
} else if (units <= 200) {
    bill = units * 7;
} else {
    bill = units * 10;
}
console.log("Total Bill: ₹" + bill);

// Task 4: Simple ATM
let balance = 10000;
let withdrawAmount = Number(prompt("Enter withdrawal amount:"));
if(withdrawAmount <= balance){
        remainingBalance = balance - withdrawAmount;
       console.log("Withdrawal Successful");
    console.log("Remaining Balance:", remainingBalance);
}else {
    console.log("Insufficient Balance");
}


// Task 5: Login Validation

let username = prompt("Enter Username:");
let userPassword = prompt("Enter Password:");

if (username === "admin") {
    if (userPassword) {
        console.log("Login Successful");
    } else {
        console.log("Invalid Password");
    }
} else {
    console.log("Invalid Username");
}

// Task 6: Mobile Recharge Offer

let rechargeAmount = Number(prompt("Enter Recharge Amount:"));

if (rechargeAmount >= 499) {
    console.log("Netflix Offer");
} else if (rechargeAmount >= 299) {
    console.log("2GB Extra Data");
} else {
    console.log("No Offer");
}


// Task 7: Traffic Signal System

let color = prompt("Enter Traffic Signal Color:");

switch (color) {
    case "red":
        console.log("Stop");
        break;

    case "yellow":
        console.log("Ready");
        break;

    case "green":
        console.log("Go");
        break;

    default:
        console.log("Invalid Signal Color");
}


// Task 8: Employee Attendance
let workingDays = Number(prompt("Enter Total Working Days:"));
let presentDays = Number(prompt("Enter Present Days:"));

let attendancePercentage = (presentDays / workingDays) * 100;

console.log("Attendance Percentage:", attendancePercentage + "%");

if (attendancePercentage >= 75) {
    console.log("Eligible");
} else {
    console.log("Not Eligible");
}


// Task 9: Bus Ticket Booking
let ticketPrice = 500;
let numberOfTickets = Number(prompt("Enter Number of Tickets:"));

let totalAmount = ticketPrice * numberOfTickets;
let gst = totalAmount * 5 / 100;
let finalAmount = totalAmount + gst;

console.log("Total Amount: ₹" + totalAmount);
console.log("GST (5%): ₹" + gst);
console.log("Final Amount: ₹" + finalAmount);


// Task 10: Restaurant Bill
let foodCost = Number(prompt("Enter Food Cost:"));
let finalBill;

if (foodCost > 2000) {
    finalBill = foodCost - (foodCost * 10 / 100);
} else {
    finalBill = foodCost;
}

console.log("Final Bill:" + finalBill);


// Task 11: Police Recruitment
let agePolice = Number(prompt("Enter Age:"));
let height = Number(prompt("Enter Height:"));
let weight = Number(prompt("Enter Weight:"));
if (agePolice >= 18) {
    if (height >= 160) {
        if (weight >= 55) {
            console.log("Eligible for Police Recruitment");
        } else {
            console.log("Rejected: Weight must be at least 55 kg");
        }
    } else {
        console.log("Rejected: Height must be at least 160 cm");
    }
} else {
    console.log("Rejected: Age must be at least 18 years");
}


// Task 12: Student Result
let mark1 = Number(prompt("Enter Subject 1 Mark:"));
let mark2 = Number(prompt("Enter Subject 2 Mark:"));
let mark3 = Number(prompt("Enter Subject 3 Mark:"));
let mark4 = Number(prompt("Enter Subject 4 Mark:"));
let mark5 = Number(prompt("Enter Subject 5 Mark:"));

let total = mark1 + mark2 + mark3 + mark4 + mark5;
let percentage = total / 5;
let grade;

if (percentage >= 90) {
    grade = "A+";
} else if (percentage >= 80) {
    grade = "A";
} else if (percentage >= 70) {
    grade = "B";
} else if (percentage >= 60) {
    grade = "C";
} else {
    grade = "Fail";
}

console.log("Total Marks:", total);
console.log("Percentage:", percentage + "%");
console.log("Grade:", grade);

// Task 13: Employee Shift Finder
let time = Number(prompt("Enter Time (0-23):"));

if (time >= 6 && time < 14) {
    console.log("Morning Shift");
} else if (time >= 14 && time < 22) {
    console.log("Afternoon Shift");
} else if ((time >= 22 && time <= 23) || (time >= 0 && time < 6)) {
    console.log("Night Shift");
} else {
    console.log("Invalid Time");
}


// Task 14: Loan Eligibility
let ageLoan = Number(prompt("Enter Age:"));
let salary = Number(prompt("Enter Salary:"));
let experience = Number(prompt("Enter Experience (in Years):"));

if (ageLoan >= 21 && salary >= 25000 && experience >= 2) {
    console.log("Eligible");
} else {
    console.log("Not Eligible");
}


// Task 15: Cab Fare Calculator
let distance = Number(prompt("Enter Distance:"));
let fare;

if (distance <= 5) {
    fare = distance * 20;
} else {
    fare = (5 * 20) + ((distance - 5) * 15);
}

console.log("Distance:", distance + " KM");
console.log("Total Fare:" + fare);

// Task 16: Multiplication Table Generator
let number = Number(prompt("Enter a Number:"));

for (let i = 1; i <= 10; i++) {
    console.log(number + " x " + i + " = " + (number * i));
}

// Task 17: Password Checker
let password = prompt("Enter Password:");
let length = password.length;

if (length < 6) {
    console.log("Weak");
} else if (length <= 10) {
    console.log("Medium");
} else {
    console.log("Strong");
}

// Task 18: Company Bonus System
let salaryBonus = Number(prompt("Enter Salary:"));
let experi = Number(prompt("Enter Experience ( in Years):"));

let bonusPercentage;
let bonusAmount;

if (experi >= 0 && experi <= 2) {
    bonusPercentage = 5;
} else if (experi >= 3 && experi <= 5) {
    bonusPercentage = 10;
} else {
    bonusPercentage = 20;
}

bonusAmount = salaryBonus * bonusPercentage / 100;

console.log("Salary:" + salaryBonus);
console.log("Bonus Percentage:" + bonusPercentage + "%");
console.log("Bonus Amount:" + bonusAmount);

// Task 19: Countdown Timer
let count = 10;

while (count >= 1) {
    console.log(count);
    count--;
}

console.log("Happy New Year");

// Task 20: Interview Selection System
let degree = prompt("Degree Completed? (yes/no)");
let communication = prompt("Communication Skill (Good/Poor)");
let technicalScore = Number(prompt("Enter Technical Score:"));

if (degree === "yes") {
    if (communication === "good") {
        if (technicalScore >= 70) {
            console.log("Selected for Interview");
        } else {
            console.log("Rejected: Technical Score must be 70 or above");
        }
    } else {
        console.log("Rejected: Communication Skill must be Good");
    }
} else {
    console.log("Rejected: Degree not completed");
}