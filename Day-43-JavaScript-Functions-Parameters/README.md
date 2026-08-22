**# Day 43 - JavaScript Functions with Parameters**

**## Overview**

Day 43 focuses on JavaScript functions with parameters.

Parameters allow functions to receive data when they are called.

In this project, different functions were created to practice passing values into functions and using those values inside the function logic.

The exercises included greeting students, checking student ages, displaying student information, and checking scholarship eligibility.

**---**

**## Project Objective**

The objectives of Day 43 were:

\- Understand function parameters

\- Understand function arguments

\- Pass values into functions

\- Use parameters inside function logic

\- Pass numbers into functions

\- Pass objects into functions

\- Reuse one function with different values

\- Use parameters with \`if/else\`

\- Understand the difference between parameters and arguments

**---**

**## Technologies Used**

\- HTML5

\- CSS3

\- JavaScript

\- DOM API

\- Git

\- GitHub

\- VS Code

\- Live Server

**---**

**# Concepts Learned**

**## 1. Function Parameters**

A parameter is a variable defined inside the parentheses of a function.

\`\`\`javascript
function greetStudent(name) {

    console.log("Hello, " + name + "!");

}
\`\`\`

In this example, \`name\` is the parameter.

The parameter acts as a placeholder for a value that will be provided when the function is called.

**---**

**## 2. Function Arguments**

An argument is the actual value passed into a function.

\`\`\`javascript
greetStudent("Rahim");
\`\`\`

Here, \`"Rahim"\` is the argument.

The value is passed into the \`name\` parameter.

**---**

**## 3. Reusing a Function with Different Values**

The same function can be called multiple times with different arguments.

\`\`\`javascript
function greetStudent(name) {

    console.log("Hello, " + name + "!");

}

greetStudent("Rahim");
greetStudent("Nusrat");
greetStudent("Ayesha");
\`\`\`

Output:

\`\`\`text
Hello, Rahim!
Hello, Nusrat!
Hello, Ayesha!
\`\`\`

This demonstrates how parameters make functions reusable.

**---**

**## 4. Using Parameters with Conditions**

Parameters can be used inside conditional statements.

\`\`\`javascript
function checkStudentAge(age) {

    if (age >= 18) {

        console.log("Student is an adult.");

    } else {

        console.log("Student is a minor.");

    }

}
\`\`\`

Different values can be passed to the same function.

\`\`\`javascript
checkStudentAge(21);
checkStudentAge(17);
checkStudentAge(22);
\`\`\`

The function produces a different result depending on the value of the \`age\` parameter.

**---**

**## 5. Passing Objects into Functions**

A complete object can also be passed into a function.

\`\`\`javascript
function showStudent(student) {

    console.log("Student Name: " + student.name);
    console.log("Student ID: " + student.studentId);
    console.log("Department: " + student.department);

}
\`\`\`

Example student object:

\`\`\`javascript
const student1 = {
    name: "Rahim Ahmed",
    studentId: 2026001,
    department: "Computer Science"
};
\`\`\`

The object can then be passed into the function:

\`\`\`javascript
showStudent(student1);
\`\`\`

The function can access the object's properties through the parameter.

**---**

**## 6. Reusing a Function with Multiple Objects**

One function can process multiple student objects.

\`\`\`javascript
const student1 = {
    name: "Rahim Ahmed",
    studentId: 2026001,
    department: "Computer Science"
};

const student2 = {
    name: "Nusrat Jahan",
    studentId: 2026002,
    department: "Software Engineering"
};

const student3 = {
    name: "Tanvir Hasan",
    studentId: 2026003,
    department: "Information Technology"
};
\`\`\`

The same function can be used for all three:

\`\`\`javascript
showStudent(student1);
showStudent(student2);
showStudent(student3);
\`\`\`

This demonstrates the practical benefit of parameters.

The function does not need to know in advance which student object it will receive.

**---**

**# Student Scholarship Example**

The final exercise used a parameter with conditional logic.

\`\`\`javascript
function checkScholarship(cgpa) {

    if (cgpa >= 3.75) {

        console.log("Student is eligible for scholarship.");

    } else {

        console.log("Student is not eligible for scholarship.");

    }

}
\`\`\`

Different CGPA values can be passed into the function:

\`\`\`javascript
checkScholarship(3.90);
checkScholarship(3.50);
checkScholarship(3.75);
\`\`\`

Expected output:

\`\`\`text
Student is eligible for scholarship.
Student is not eligible for scholarship.
Student is eligible for scholarship.
\`\`\`

**---**

**# Testing**

**## Test 1 - Different Student Names**

\`\`\`javascript
greetStudent("Rahim");
greetStudent("Nusrat");
greetStudent("Ayesha");
\`\`\`

The function successfully displayed a different greeting for each student.

**## Test 2 - Student Age**

\`\`\`javascript
checkStudentAge(21);
checkStudentAge(17);
checkStudentAge(22);
\`\`\`

The function correctly identified adult and minor students.

**## Test 3 - Student Objects**

\`\`\`javascript
showStudent(student1);
showStudent(student2);
showStudent(student3);
\`\`\`

The function correctly displayed the information of each student.

**## Test 4 - Scholarship Eligibility**

\`\`\`javascript
checkScholarship(3.90);
checkScholarship(3.50);
checkScholarship(3.75);
\`\`\`

The function correctly determined scholarship eligibility based on the CGPA.

**---**

**# Previous Concepts Used**

Day 43 built upon concepts learned during previous JavaScript lessons:

\- Variables

\- \`const\`

\- Objects

\- Object properties

\- Functions

\- Function calls

\- \`if\`

\- \`else\`

\- Comparison operators

\- \`>=\`

\- \`console.log()\`

**---**

**# What I Learned**

Day 43 demonstrated how parameters make JavaScript functions reusable.

A function can receive different values and perform the same operation on each value.

For example:

\`\`\`javascript
showStudent(student1);
showStudent(student2);
showStudent(student3);
\`\`\`

The same function can work with all three objects because the student object is passed through the function parameter.

I also learned the difference between a parameter and an argument.

A parameter is defined when creating the function:

\`\`\`javascript
function showStudent(student)
\`\`\`

An argument is provided when calling the function:

\`\`\`javascript
showStudent(student1);
\`\`\`

**---**

**# Project Structure**

\`\`\`text
Day-43-JavaScript-Functions-Parameters/
│
├── index.html
├── script.js
├── style.css
├── assets/
└── README.md
\`\`\`

**---**

**# Day Status**

Completed

**---**

**# Next Steps**

The next lessons will continue building on JavaScript functions.

Future concepts will be introduced separately, including:

\- Return values

\- Using returned values

\- Functions with multiple parameters

\- Connecting functions with DOM interactions