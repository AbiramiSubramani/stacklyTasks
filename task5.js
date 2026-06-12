

let studentObj = [{
  id: 1,
  name: "abi",
  department: "ECE",
  mark: 90
},
{
  id: 2,
  name: "anu",
  department: "CSE",
  mark: 70
},
{
  id: 3,
  name: "arul",
  department: "EEE",
  mark: 60

},
{
  id: 4,
  name: "banu",
  department: "IT",
  mark: 80

},
{
  id: 5,
  name: "priya",
  department: "MECH",
  mark: 92

}
]
// Display all student names.
console.log("Student Names:");
for (let student of studentObj) {
  console.log(student.name);
}

// Display grades
function grade(mark) {
  if (mark >= 90) {
    return "A";
  } else if (mark >= 75) {
    return "B";
  } else if (mark >= 50) {
    return "C";
  } else {
    return "Fail";
  }

}

console.log("Student Grades:");
for (let studentMark of studentObj) {
  console.log(studentMark.name + "-" + grade(studentMark.mark));
}

// Create a function to print student details.
function studentDetails(student) {
  console.log("ID:", student.id);
  console.log("Name:", student.name);
  console.log("Department:", student.department);
  console.log("Mark:", student.mark);
  console.log("Grade:", grade(student.mark));
}

console.log("Student Details:");
for (let student of studentObj) {
  studentDetails(student);
}
// Calculate total marks.
let totalMarks = 0;
for (let student of studentObj) {
  totalMarks += student.mark;
}
console.log("Total Marks:", totalMarks);

// Find students who scored above 80.
console.log("Students Scored Above 80:");
for (let student of studentObj) {
  if (student.mark > 80) {
    console.log(student.name);
  }
}


// Task 2: Employee Payroll System
let employee = [{
  id: 1,
  name: "krish",
  salary: 25000,
  department: "HR"

},
{
  id: 2,
  name: "mithu",
  salary: 30000,
  department: "Development"
},
{
  id: 3,
  name: "sureka",
  salary: 35000,
  department: "Testing"

},
{
  id: 4,
  name: "raksa",
  salary: 40000,
  department: "Support"


},
{
  id: 5,
  name: "nithu",
  salary: 45000,
  department: "Development"

}
]


// Print all employee names.
console.log("Employees name:")
for (let employees of employee) {
  console.log(employees.name);
}
// Calculate total company salary expense.
let totalSalary = 0;
for (let employees of employee) {
  totalSalary += employees.salary
}

console.log("Total Salary Expense:", totalSalary);


// Display employees earning above ₹30,000.

console.log("Employees Earning Above ₹30,000:");
for (let employees of employee) {
  if (employees.salary > 30000) {
    console.log(employees.name, "-", employees.salary);
  }
}

// Use switch statement for department descriptions.

console.log("Department Descriptions:");

for (let employees of employee) {
  switch (employees.department) {
    case "HR":
      console.log(employees.name + ": Human Resources");
      break;

    case "Development":
      console.log(employees.name + ": Software Development Team");
      break;

    case "Testing":
      console.log(employees.name + ": Quality Assurance Team");
      break;

    case "Support":
      console.log(employees.name + ": Customer Support Team");
      break;

    default:
      console.log(employees.name + ": Unknown Department");
  }
}

// Create a callback function to generate payroll reports.
function generatePayrollReport(employee, callback) {
  callback(employee);
}

function printPayroll(employee) {
  console.log(
    `ID: ${employee.id}, Name: ${employee.name}, Salary: ₹${employee.salary}, Department: ${employee.department}`
  );
}

console.log("Payroll Reports:");

for (let employees of employee) {
  generatePayrollReport(employees, printPayroll);
}



// Task 3: Online Food Order System
let foodItems = [
  {
    id: 1,
    foodName: "Chicken Biryani",
    price: 250,
    category: "Main Course"
  },
  {
    id: 2,
    foodName: "Veg Fried Rice",
    price: 180,
    category: "Main Course"
  },
  {
    id: 3,
    foodName: "Ice Cream",
    price: 120,
    category: "Dessert"
  },
  {
    id: 4,
    foodName: "Pizza",
    price: 350,
    category: "Fast Food"
  }
];


// Display all food names
console.log("Food Names:");
for (let food of foodItems) {
  console.log(food.foodName);
}

// Calculate total menu value.
let totalMenuValue = 0;

for (let food of foodItems) {
  totalMenuValue += food.price;
}
console.log("Total Menu Value: ₹" + totalMenuValue);

// Show foods above ₹200.
console.log("Foods Above ₹200:");
for (let food of foodItems) {
  if (food.price > 200) {
    console.log(food.foodName + " - ₹" + food.price);
  }
}

// Use switch statement for category descriptions
console.log("Category Descriptions:");
for (let food of foodItems) {
  switch (food.category) {
    case "Main Course":
      console.log(food.foodName + " : Full meal item");
      break;
    case "Dessert":
      console.log(food.foodName + " : Sweet dish");
      break;
    case "Fast Food":
      console.log(food.foodName + " : Quick snack item");
      break;
    default:
      console.log(food.foodName + " : Other category");
  }
}

// Create an order confirmation callback function.
function placeOrder(foodName, callback) {
  console.log("Processing order for " + foodName + "...");
  callback(foodName);

}

function orderConfirmed(foodName) {
  console.log("Order Confirmed for " + foodName);
}

// Function call
placeOrder("Pizza", orderConfirmed);


// Task 4: Movie Ticket Booking System
let movies = [
  {
    movieName: "Leo",
    ticketPrice: 200,
    availableSeats: 50,
    language: "Tamil"
  },
  {
    movieName: "Jawan",
    ticketPrice: 250,
    availableSeats: 30,
    language: "Hindi"
  },
  {
    movieName: "Kalki",
    ticketPrice: 300,
    availableSeats: 0,
    language: "Telugu"
  }
];

// Display all movie names.
console.log("Movie Names:");
for (let movie of movies) {
  console.log(movie.movieName);
}

// Calculate total available seats.

let totalSeats = 0;

for (let movie of movies) {
  totalSeats += movie.availableSeats;
}

console.log("Total Available Seats:", totalSeats);

// Check whether booking is possible.
for (let seat of movies) {
  if (seat.availableSeats > 0) {
    console.log(seat.movieName + " - Booking Available");
  } else {
    console.log(seat.movieName + " - House Full");
  }
}

// Use switch statement for movie language.
for (let movie of movies) {
  switch (movie.language) {
    case "Tamil":
      console.log(movie.movieName + " : Tamil Movie");
      break;

    case "Hindi":
      console.log(movie.movieName + " : Hindi Movie");
      break;

    case "Telugu":
      console.log(movie.movieName + " : Telugu Movie");
      break;

    default:
      console.log(movie.movieName + " : Other Language");
  }

}

// Callback function for booking confirmation

function bookTicket(movieName, callback) {
  console.log("Processing booking for " + movieName + "...");
  callback(movieName);
}

function bookingConfirmed(movieName) {
  console.log("Booking Confirmed for " + movieName);
}

bookTicket("Leo", bookingConfirmed);

// Task 5: Hospital Patient Records
let patients = [
  {
    patientId: 1,
    patientName: "Arun",
    age: 65,
    disease: "Heart"
  },
  {
    patientId: 2,
    patientName: "Priya",
    age: 45,
    disease: "Diabetes"
  },
  {
    patientId: 3,
    patientName: "Kumar",
    age: 70,
    disease: "Orthopedic"
  },
  {
    patientId: 4,
    patientName: "Anu",
    age: 30,
    disease: "ENT"
  }
];

// Display all patient names
console.log("Patient Names:");

for (let patient of patients) {
  console.log(patient.patientName);
}

// Count total patients
console.log("Total Patients:", patients.length);

// Print patients above age 60.
console.log("Patients Above Age 60:");
for (let patient of patients) {
  if (patient.age > 60) {
    console.log(patient.patientName);
  }
}

// Use switch statement for disease departments.
console.log("Department Details:");

for (let patient of patients) {

  switch (patient.disease) {

    case "Heart":
      console.log(patient.patientName + " → Cardiology Department");
      break;

    case "Diabetes":
      console.log(patient.patientName + " → Endocrinology Department");
      break;

    case "Orthopedic":
      console.log(patient.patientName + " → Orthopedic Department");
      break;

    case "ENT":
      console.log(patient.patientName + " → ENT Department");
      break;

    default:
      console.log(patient.patientName + " → General Department");
  }
}

// Create a callback function for appointment confirmation.
function appointment(patientName, callback) {
  console.log("Booking appointment for " + patientName + "...");
  callback(patientName);
}

function appointmentConfirmed(patientName) {
  console.log("Appointment Confirmed for " + patientName);
}

appointment("Arul", appointmentConfirmed);

// Task 6: Library Management System
let books = [
  {
    bookId: 1,
    bookName: "JavaScript Basics",
    author: "John",
    price: 450,
    category: "Programming"
  },
  {
    bookId: 2,
    bookName: "Data Structures",
    author: "David",
    price: 700,
    category: "Education"
  },
  {
    bookId: 3,
    bookName: "Harry Potter",
    author: "J.K. Rowling",
    price: 550,
    category: "Fiction"
  },
  {
    bookId: 4,
    bookName: "Wings of Fire",
    author: "A.P.J. Abdul Kalam",
    price: 350,
    category: "Biography"
  }
];
// Display all book names
console.log("Book Names:");

for (let book of books) {
  console.log(book.bookName);
}

// Calculate total book value
let totalValue = 0;

for (let book of books) {
  totalValue += book.price;
}

console.log("Total Book Value:" + totalValue);

// Display books above ₹500
console.log("Books Above ₹500:");

for (let book of books) {
  if (book.price > 500) {
    console.log(book.bookName + " - ₹" + book.price);
  }
}

// Switch statement for book categories
console.log("Book Categories:");

for (let book of books) {

  switch (book.category) {

    case "Programming":
      console.log(book.bookName + " → Programming Book");
      break;

    case "Education":
      console.log(book.bookName + " → Educational Book");
      break;

    case "Fiction":
      console.log(book.bookName + " → Fiction Story Book");
      break;

    case "Biography":
      console.log(book.bookName + " → Biography Book");
      break;

    default:
      console.log(book.bookName + " → General Category");
  }
}

function issueBook(bookName) {
  console.log("Book Issued Successfully: " + bookName);
}

issueBook("Harry Potter");


// Task 7: E-Commerce Product Dashboard
let products = [
  {
    productId: 1,
    productName: "Laptop",
    price: 50000,
    stock: 15
  },
  {
    productId: 2,
    productName: "Mobile",
    price: 25000,
    stock: 8
  },
  {
    productId: 3,
    productName: "Headphones",
    price: 2000,
    stock: 25
  },
  {
    productId: 4,
    productName: "Smart Watch",
    price: 5000,
    stock: 5
  }
];
// Display all products
console.log("Products:");

for (let product of products) {
  console.log(product.productName);
}

// Calculate inventory value
let inventoryValue = 0;

for (let product of products) {
  inventoryValue += product.price * product.stock;
}
console.log("Total Inventory Value:" + inventoryValue);


// Find products with stock less than 10
console.log("Low Stock Products:");

for (let product of products) {
  if (product.stock < 10) {
    console.log(product.productName + " - Stock: " + product.stock);
  }
}

// Display stock status
console.log("Stock Status:");

for (let product of products) {

  if (product.stock === 0) {
    console.log(product.productName + " → Out of Stock");
  }
  else if (product.stock < 10) {
    console.log(product.productName + " → Low Stock");
  }
  else {
    console.log(product.productName + " → In Stock");
  }
}

// Callback function for product report
function generateProduct(products, callback) {
  console.log("Generating Product Report...");
  callback(products);
}

function productReady(products) {
  console.log("Report Generated Successfully");
  console.log("Total Products:", products.length);
}

generateProduct(products, productReady);

// Task 8: College Admission System

let applicants = [
  {
    name: "Arun",
    age: 19,
    percentage: 75,
    department: "CSE"
  },
  {
    name: "Priya",
    age: 17,
    percentage: 82,
    department: "ECE"
  },
  {
    name: "Karthik",
    age: 20,
    percentage: 58,
    department: "MECH"
  },
  {
    name: "Anu",
    age: 18,
    percentage: 90,
    department: "IT"
  }
];

// Display applicant names
console.log("Applicant Names:");

for (let applicant of applicants) {
  console.log(applicant.name);
}

// Check eligibility and count eligible students
let eligibleCount = 0;

console.log("Eligibility Status:");

for (let applicant of applicants) {

  if (applicant.age >= 18 && applicant.percentage >= 60) {
    console.log(applicant.name + " → Eligible");
    eligibleCount++;
  } else {
    console.log(applicant.name + " → Not Eligible");
  }
}

console.log("Total Eligible Students:", eligibleCount);

// Switch statement for department names
console.log("Department Details:");

for (let applicant of applicants) {

  switch (applicant.department) {

    case "CSE":
      console.log(applicant.name + " → Computer Science Engineering");
      break;

    case "ECE":
      console.log(applicant.name + " → Electronics and Communication Engineering");
      break;

    case "MECH":
      console.log(applicant.name + " → Mechanical Engineering");
      break;

    case "IT":
      console.log(applicant.name + " → Information Technology");
      break;

    default:
      console.log(applicant.name + " → Other Department");
  }
}



// Callback function for admission result
function processAdmission(studentName, callback) {
  console.log("Processing admission for " + studentName + "...");
  callback(studentName);
}

function admissionResult(studentName) {
  console.log("Admission Confirmed for " + studentName);
}

processAdmission("Arun", admissionResult);

// Task 9: Bus Reservation System
let passengers = [
  {
    passengerId: 1,
    name: "Ravi",
    seatNumber: 12,
    ticketPrice: 500,
    busType: "AC"
  },
  {
    passengerId: 2,
    name: "Priya",
    seatNumber: 15,
    ticketPrice: 450,
    busType: "Non-AC"
  },
  {
    passengerId: 3,
    name: "Kumar",
    seatNumber: 18,
    ticketPrice: 500,
    busType: "AC"
  },
  {
    passengerId: 4,
    name: "Anu",
    seatNumber: 20,
    ticketPrice: 600,
    busType: "Sleeper"
  }
];


// Display passenger names
console.log("Passenger Names:");
for (let passenger of passengers) {
  console.log(passenger.name);
}

// Calculate total collection
let ticketCollection = 0;
for (passenger of passengers) {
  ticketCollection += passenger.ticketPrice;
}
console.log("Total Collection:", + ticketCollection);

// Check occupied seats
console.log("Occupied Seats:");
for (let passenger of passengers) {
  console.log("Seat No: " + passenger.seatNumber + " occupied by " + passenger.name
  );
}

// Switch statement for bus types
console.log("Bus Type Details:");

for (let passenger of passengers) {

  switch (passenger.busType) {

    case "AC":
      console.log(passenger.name + " → AC Bus");
      break;

    case "Non-AC":
      console.log(passenger.name + " → Non-AC Bus");
      break;

    case "Sleeper":
      console.log(passenger.name + " → Sleeper Bus");
      break;

    default:
      console.log(passenger.name + " → Other Bus Type");
  }
}

// Callback function for ticket confirmation
function bookTicket(passengerName, callback) {
  console.log("Booking ticket for " + passengerName + "...");
  callback(passengerName);
}
function ticketConfirmed(passengerName) {
  console.log("Ticket Confirmed for " + passengerName);

}

bookTicket("priya", ticketConfirmed);

// Task 10: Mobile Store Management
let mobiles = [
  {
    brand: "Samsung",
    model: "Galaxy S24",
    price: 75000,
    stock: 10
  },
  {
    brand: "Apple",
    model: "iPhone 15",
    price: 80000,
    stock: 5
  },
  {
    brand: "Xiaomi",
    model: "Redmi Note 13",
    price: 18000,
    stock: 15
  },
  {
    brand: "OnePlus",
    model: "OnePlus 12",
    price: 65000,
    stock: 8
  }
];
// Display all mobile names
console.log("Mobile Names:");

for (let mobile of mobiles) {
  console.log(mobile.brand + " " + mobile.model);
}

// Calculate total stock value
let totalStockValue = 0;

for (let mobile of mobiles) {
  totalStockValue += mobile.price * mobile.stock;
}

console.log("Total Stock Value: ₹" + totalStockValue);

// Show mobiles above ₹20,000
console.log("Mobiles Above ₹20,000:");

for (let mobile of mobiles) {
  if (mobile.price > 20000) {
    console.log(mobile.brand + " " + mobile.model + " - " + mobile.price);
  }
}
// Switch statement for brand category
console.log("Brand Categories:");

for (let mobile of mobiles) {

  switch (mobile.brand) {

    case "Samsung":
      console.log(mobile.model + " → Android Premium Brand");
      break;

    case "Apple":
      console.log(mobile.model + " → iOS Premium Brand");
      break;

    case "Xiaomi":
      console.log(mobile.model + " → Budget Android Brand");
      break;

    case "OnePlus":
      console.log(mobile.model + " → Flagship Android Brand");
      break;

    default:
      console.log(mobile.model + " → Other Brand");
  }
}
// Callback function for sales report
function generateSalesReport(mobiles, callback) {
  console.log("Generating Sales Report...");
  callback(mobiles);
}

function salesReportReady(mobiles) {
  console.log("Sales Report Generated Successfully");
  console.log("Total Mobiles:", mobiles.length);
}

// Function Call
generateSalesReport(mobiles, salesReportReady);