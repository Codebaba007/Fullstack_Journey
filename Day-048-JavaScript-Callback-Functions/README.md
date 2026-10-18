**\*\*# Day 48 - JavaScript Callback Functions\*\***

**\*\*## Overview\*\***

Day 48 focuses on JavaScript callback functions.

In Day 47, I learned how to create and use arrow functions.

Day 48 builds on that concept by learning how a function can be passed into another function as an argument.

A callback function is a function that is passed into another function and then executed by that function.

The exercises included passing regular functions as callbacks, using arrow functions as callbacks, passing student objects into callback functions, creating different operations with callbacks, and passing arrow functions directly as callback arguments.

**\*\*---\*\***

**\*\*## Project Objective\*\***

The objectives of Day 48 were:

\\- Understand callback functions

\\- Understand how functions can be passed as arguments

\\- Understand the difference between passing a function and calling a function

\\- Use callback parameters

\\- Execute a callback function inside another function

\\- Use arrow functions as callbacks

\\- Pass objects into callback functions

\\- Create different operations using the same callback processor

\\- Pass arrow functions directly as callbacks

\\- Understand the flow of data through callback functions

**\*\*---\*\***

**\*\*## Technologies Used\*\***

\\- HTML5

\\- CSS3

\\- JavaScript

\\- DOM API

\\- Git

\\- GitHub

\\- VS Code

\\- Live Server

**\*\*---\*\***

**\*\*# Concepts Learned\*\***

**\*\*## 1. Callback Function\*\***

A callback function is a function that is passed into another function as an argument.

For example:

\`\`\`javascript

function greetStudent(name) {

    return "Hello, " + name;

}

function processStudent(name, callback) {

    return callback(name);

}

console.log(processStudent("Rahim", greetStudent));

\`\`\`

Expected output:

\`\`\`text

Hello, Rahim

\`\`\`

Here, \`greetStudent\` is passed into \`processStudent\` as an argument.

The function is stored in the \`callback\` parameter.

**\*\*---\*\***

**\*\*## 2. Callback Parameters\*\***

A function can receive another function through a parameter.

\`\`\`javascript

function processStudent(name, callback) {

    return callback(name);

}

\`\`\`

When the function is called:

\`\`\`javascript

processStudent("Rahim", greetStudent);

\`\`\`

The parameters receive:

\`\`\`text

name = "Rahim"

callback = greetStudent

\`\`\`

Then:

\`\`\`javascript

callback(name);

\`\`\`

executes the function that was passed as the callback.

**\*\*---\*\***

**\*\*## 3. Passing a Function vs Calling a Function\*\***

An important part of callbacks is understanding the difference between:

\`\`\`javascript

getStudentName

\`\`\`

and:

\`\`\`javascript

getStudentName()

\`\`\`

Passing the function:

\`\`\`javascript

processStudent(student1, getStudentName);

\`\`\`

means the function itself is being passed.

Calling the function:

\`\`\`javascript

getStudentName();

\`\`\`

means the function is being executed immediately.

The callback pattern requires passing the function so that another function can decide when to execute it.

**\*\*---\*\***

**\*\*## 4. Callback Functions with Arrow Functions\*\***

Arrow functions can also be used as callbacks.

For example:

\`\`\`javascript

const greetStudent = (name) => {

    return "Hello, " + name;

};

function processStudent(name, callback) {

    return callback(name);

}

console.log(processStudent("Rahim", greetStudent));

\`\`\`

Expected output:

\`\`\`text

Hello, Rahim

\`\`\`

The arrow function is stored in the \`greetStudent\` variable and passed into \`processStudent\`.

**\*\*---\*\***

**\*\*## 5. Passing an Arrow Function Directly\*\***

An arrow function can also be passed directly as a callback without storing it in a separate variable.

\`\`\`javascript

function processStudent(name, callback) {

    return callback(name);

}

console.log(

    processStudent("Nusrat", (name) => {

        return "Welcome, " + name;

    })

);

\`\`\`

Expected output:

\`\`\`text

Welcome, Nusrat

\`\`\`

The callback is created directly inside the function call.

**\*\*---\*\***

**\*\*## 6. Callback Functions with Student Objects\*\***

Callbacks can receive objects as arguments.

Example student objects:

\`\`\`javascript

const student1 = {

    name: "Rahim Ahmed",

    cgpa: 3.75

};

const student2 = {

    name: "Tanvir Hasan",

    cgpa: 3.62

};

\`\`\`

A reusable callback processor can be created:

\`\`\`javascript

const processStudent = (student, callback) => {

    return callback(student);

};

\`\`\`

A callback can then retrieve the student's name:

\`\`\`javascript

const getStudentName = (student) => {

    return student.name;

};

\`\`\`

The callback can be passed into the processor:

\`\`\`javascript

console.log(processStudent(student1, getStudentName));

console.log(processStudent(student2, getStudentName));

\`\`\`

Expected output:

\`\`\`text

Rahim Ahmed

Tanvir Hasan

\`\`\`

**\*\*---\*\***

**\*\*## 7. Using Different Callbacks with the Same Function\*\***

The same \`processStudent()\` function can be used with different callbacks.

A callback for the student's name:

\`\`\`javascript

const getStudentName = (student) => {

    return student.name;

};

\`\`\`

A callback for the student's CGPA:

\`\`\`javascript

const getStudentCgpa = (student) => {

    return student.cgpa;

};

\`\`\`

A callback for creating a message:

\`\`\`javascript

const getStudentMessage = (student) => {

    return student.name + " has a CGPA of " + student.cgpa;

};

\`\`\`

The same processor can use all three callbacks:

\`\`\`javascript

console.log(processStudent(student1, getStudentName));

console.log(processStudent(student1, getStudentCgpa));

console.log(processStudent(student1, getStudentMessage));

\`\`\`

Expected output:

\`\`\`text

Rahim Ahmed

3.75

Rahim Ahmed has a CGPA of 3.75

\`\`\`

The \`processStudent()\` function does not need to change.

Only the callback changes.

**\*\*---\*\***

**\*\*## 8. Callback Functions with Calculations\*\***

Callbacks can perform calculations using the data they receive.

For example:

\`\`\`javascript

const getCgpaPercentage = (student) => {

    return student.cgpa * 25;

};

\`\`\`

The callback can be passed into the processor:

\`\`\`javascript

console.log(

    processStudent(student1, getCgpaPercentage)

);

console.log(

    processStudent(student2, getCgpaPercentage)

);

\`\`\`

Expected output:

\`\`\`text

93.75

90.5

\`\`\`

Another callback can calculate a bonus CGPA:

\`\`\`javascript

const addBonusCgpa = (student) => {

    return student.cgpa + 0.10;

};

\`\`\`

Then:

\`\`\`javascript

console.log(

    processStudent(student1, addBonusCgpa)

);

console.log(

    processStudent(student2, addBonusCgpa)

);

\`\`\`

Expected output:

\`\`\`text

3.85

3.72

\`\`\`

**\*\*---\*\***

**\*\*## 9. Inline Callback Functions\*\***

An arrow function can be written directly inside the function call.

For example:

\`\`\`javascript

console.log(

    processStudent(student1, (student) => student.name)

);

\`\`\`

The same pattern can be used to retrieve the CGPA:

\`\`\`javascript

console.log(

    processStudent(student2, (student) => student.cgpa)

);

\`\`\`

A custom message can also be created:

\`\`\`javascript

console.log(

    processStudent(

        student2,

        (student) => student.name + " is a student."

    )

);

\`\`\`

Expected output:

\`\`\`text

Rahim Ahmed

3.62

Tanvir Hasan is a student.

\`\`\`

**\*\*---\*\***

**\*\*## 10. Callback Flow\*\***

When the following code is executed:

\`\`\`javascript

processStudent(student1, getStudentName);

\`\`\`

The values are assigned to the parameters:

\`\`\`text

student = student1

callback = getStudentName

\`\`\`

Inside the function:

\`\`\`javascript

callback(student);

\`\`\`

The callback is executed with the student object.

This is effectively:

\`\`\`javascript

getStudentName(student1);

\`\`\`

The callback then returns:

\`\`\`text

Rahim Ahmed

\`\`\`

The complete flow is:

\`\`\`text

student1 + getStudentName

            ↓

      processStudent()

            ↓

student = student1

callback = getStudentName

            ↓

      callback(student)

            ↓

   getStudentName(student)

            ↓

       student.name

            ↓

      "Rahim Ahmed"

\`\`\`

**\*\*---\*\***

**\*\*# Testing\*\***

**\*\*## Test 1 - Basic Callback\*\***

\`\`\`javascript

console.log(processStudent("Rahim", greetStudent));

\`\`\`

Expected:

\`\`\`text

Hello, Rahim

\`\`\`

**\*\*## Test 2 - Student Name Callback\*\***

\`\`\`javascript

console.log(processStudent(student1, getStudentName));

console.log(processStudent(student2, getStudentName));

\`\`\`

Expected:

\`\`\`text

Rahim Ahmed

Tanvir Hasan

\`\`\`

**\*\*## Test 3 - Student CGPA Callback\*\***

\`\`\`javascript

console.log(processStudent(student1, getStudentCgpa));

console.log(processStudent(student2, getStudentCgpa));

\`\`\`

Expected:

\`\`\`text

3.75

3.62

\`\`\`

**\*\*## Test 4 - Student Message Callback\*\***

\`\`\`javascript

console.log(processStudent(student1, getStudentMessage));

console.log(processStudent(student2, getStudentMessage));

\`\`\`

Expected:

\`\`\`text

Rahim Ahmed has a CGPA of 3.75

Tanvir Hasan has a CGPA of 3.62

\`\`\`

**\*\*## Test 5 - Scholarship Callback\*\***

\`\`\`javascript

console.log(processStudent(student1, checkScholarship));

console.log(processStudent(student2, checkScholarship));

\`\`\`

Expected:

\`\`\`text

Eligible for scholarship

Not eligible for scholarship

\`\`\`

**\*\*## Test 6 - Bonus CGPA Callback\*\***

\`\`\`javascript

console.log(processStudent(student1, calculateBonusCgpa));

console.log(processStudent(student2, calculateBonusCgpa));

\`\`\`

Expected:

\`\`\`text

3.85

3.72

\`\`\`

**\*\*## Test 7 - Inline Arrow Callback\*\***

\`\`\`javascript

console.log(

    processStudent(student1, (student) => student.name)

);

console.log(

    processStudent(student2, (student) => student.cgpa)

);

\`\`\`

Expected:

\`\`\`text

Rahim Ahmed

3.62

\`\`\`

**\*\*---\*\***

**\*\*# Previous Concepts Used\*\***

Day 48 built upon concepts learned during previous JavaScript lessons:

\\- Variables

\\- `const`

\\- Objects

\\- Object properties

\\- Functions

\\- Function parameters

\\- Function arguments

\\- Multiple parameters

\\- Function calls

\\- `return`

\\- Default parameters

\\- Arrow functions

\\- Implicit return

\\- `if`

\\- `else if`

\\- `else`

\\- Comparison operators

\\- `>=`

\\- `console.log()`

**\*\*---\*\***

**\*\*# What I Learned\*\***

Day 48 introduced callback functions.

I learned that a function can be passed into another function as an argument.

For example:

\`\`\`javascript

processStudent(student1, getStudentName);

\`\`\`

Here, \`student1\` is the student object and \`getStudentName\` is the callback function.

Inside the processor:

\`\`\`javascript

const processStudent = (student, callback) => {

    return callback(student);

};

\`\`\`

The callback parameter receives the function that was passed into \`processStudent()\`.

I learned that:

\`\`\`javascript

getStudentName

\`\`\`

passes the function itself, while:

\`\`\`javascript

getStudentName()

\`\`\`

executes the function immediately.

I also learned that the same function can perform different operations depending on which callback is provided.

For example:

\`\`\`javascript

processStudent(student1, getStudentName);

processStudent(student1, getStudentCgpa);

processStudent(student1, getStudentMessage);

\`\`\`

The processor remains unchanged while the callback determines what operation is performed.

I also learned that arrow functions can be passed directly as callbacks:

\`\`\`javascript

processStudent(student1, (student) => student.name);

\`\`\`

This is one of the reasons arrow functions are commonly used in modern JavaScript.

**\*\*---\*\***

**\*\*# Project Structure\*\***

\`\`\`text

Day-48-JavaScript-Callback-Functions/

│

├── index.html

├── script.js

├── style.css

├── assets/

└── README.md

\`\`\`

**\*\*---\*\***

**\*\*# Day Status\*\***

Completed

**\*\*---\*\***

**\*\*# Next Steps\*\***

The next lessons will continue building on JavaScript callbacks and arrow functions.

Future concepts will gradually introduce:

\\- Array methods

\\- `forEach()`

\\- `map()`

\\- `filter()`

\\- Using callback functions with arrays

\\- Processing collections of student objects

\\- Combining callbacks with the existing Student Information project

**\*\*---\*\***
