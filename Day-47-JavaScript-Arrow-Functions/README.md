**\*\*# Day 47 - JavaScript Arrow Functions\*\***

**\*\*## Overview\*\***

Day 47 focuses on JavaScript arrow functions.

In previous days, I learned how to create regular functions, use parameters, return values, multiple parameters, and default parameters.

Day 47 builds on those concepts by learning how arrow functions provide an alternative and shorter syntax for writing functions.

The exercises included creating basic arrow functions, using multiple parameters, returning values, using implicit returns, working with default parameters, processing student objects, and using arrow functions with conditional logic.

**\*\*---\*\***

**\*\*## Project Objective\*\***

The objectives of Day 47 were:

\\- Understand arrow function syntax

\\- Understand the difference between regular functions and arrow functions

\\- Create arrow functions with parameters

\\- Use multiple parameters with arrow functions

\\- Use `return` inside arrow functions

\\- Understand implicit return

\\- Use default parameters with arrow functions

\\- Pass objects into arrow functions

\\- Use conditions inside arrow functions

\\- Reuse previously learned function concepts with arrow functions

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

**\*\*## 1. Basic Arrow Function\*\***

An arrow function provides an alternative syntax for creating a function.

A regular function can be written as:

\`\`\`javascript

function greetStudent(name) {

    return "Hello, " + name;

}

\`\`\`

The same function can be written as an arrow function:

\`\`\`javascript

const greetStudent = (name) => {

    return "Hello, " + name;

};

\`\`\`

The arrow syntax is represented by:

\`\`\`javascript

=>

\`\`\`

The logic of the function remains the same.

**\*\*---\*\***

**\*\*## 2. Arrow Functions with Parameters\*\***

Arrow functions can receive parameters just like regular functions.

\`\`\`javascript

const greetStudent = (name) => {

    return "Hello, " + name;

};

\`\`\`

The function can then be called with different arguments:

\`\`\`javascript

const result1 = greetStudent("Rahim");

const result2 = greetStudent("Nusrat");

console.log(result1);

console.log(result2);

\`\`\`

Expected output:

\`\`\`text

Hello, Rahim

Hello, Nusrat

\`\`\`

The parameter works the same way as it does in a regular function.

**\*\*---\*\***

**\*\*## 3. Arrow Functions with Multiple Parameters\*\***

Arrow functions can receive multiple parameters.

\`\`\`javascript

const addNumbers = (firstNumber, secondNumber) => {

    return firstNumber + secondNumber;

};

\`\`\`

The function can be called with different arguments:

\`\`\`javascript

console.log(addNumbers(10, 20));

console.log(addNumbers(50, 25));

\`\`\`

Expected output:

\`\`\`text

30

75

\`\`\`

The arguments are mapped to the parameters in the same order:

\`\`\`text

10 → firstNumber

20 → secondNumber

\`\`\`

**\*\*---\*\***

**\*\*## 4. Arrow Functions with `return`\*\***

Arrow functions can use the `return` statement.

\`\`\`javascript

const calculateAverage = (mark1, mark2, mark3) => {

    const average = (mark1 + mark2 + mark3) / 3;

    return average;

};

\`\`\`

Example:

\`\`\`javascript

console.log(calculateAverage(80, 85, 90));

console.log(calculateAverage(70, 80, 90));

\`\`\`

Output:

\`\`\`text

85

80

\`\`\`

The function receives three parameters, calculates the average, and returns the result.

**\*\*---\*\***

**\*\*## 5. Implicit Return\*\***

Arrow functions can use a shorter syntax when the function contains a single expression.

Instead of:

\`\`\`javascript

const addNumbers = (a, b) => {

    return a + b;

};

\`\`\`

The function can be written as:

\`\`\`javascript

const addNumbers = (a, b) => a + b;

\`\`\`

The expression after the arrow is automatically returned.

For example:

\`\`\`javascript

console.log(addNumbers(10, 20));

console.log(addNumbers(50, 25));

\`\`\`

Output:

\`\`\`text

30

75

\`\`\`

This is called an implicit return.

**\*\*---\*\***

**\*\*## 6. Arrow Functions with Default Parameters\*\***

Arrow functions can also use default parameters.

\`\`\`javascript

const getStudentStatus = (name, status = "Pending") => {

    return name + " - Status: " + status;

};

\`\`\`

If a status is provided:

\`\`\`javascript

getStudentStatus("Rahim Ahmed", "Active");

\`\`\`

The provided value is used.

If the status is not provided:

\`\`\`javascript

getStudentStatus("Nusrat Jahan");

\`\`\`

The default value is used:

\`\`\`text

Nusrat Jahan - Status: Pending

\`\`\`

The default value can also be overridden:

\`\`\`javascript

getStudentStatus("Nusrat Jahan", "Graduated");

\`\`\`

The result is:

\`\`\`text

Nusrat Jahan - Status: Graduated

\`\`\`

**\*\*---\*\***

**\*\*## 7. Arrow Functions with Student Objects\*\***

Arrow functions can receive objects as parameters.

\`\`\`javascript

const getStudentResult = (student, passingCgpa = 3.75) => {

    if (student.cgpa >= passingCgpa) {

        return student.name + " has passed.";

    } else {

        return student.name + " has not passed.";

    }

};

\`\`\`

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

The function can then be called:

\`\`\`javascript

console.log(getStudentResult(student1));

console.log(getStudentResult(student2));

console.log(getStudentResult(student2, 3.50));

\`\`\`

Expected output:

\`\`\`text

Rahim Ahmed has passed.

Tanvir Hasan has not passed.

Tanvir Hasan has passed.

\`\`\`

This combines arrow functions with objects, default parameters, conditions, and return values.

**\*\*---\*\***

**\*\*## 8. Arrow Functions with Conditional Logic\*\***

Arrow functions can contain normal JavaScript conditional statements.

\`\`\`javascript

const getGrade = (cgpa) => {

    if (cgpa >= 3.75) {

        return "A";

    } else if (cgpa >= 3.50) {

        return "B";

    } else if (cgpa >= 3.00) {

        return "C";

    } else {

        return "F";

    }

};

\`\`\`

Testing different CGPAs:

\`\`\`javascript

console.log(getGrade(3.90));

console.log(getGrade(3.60));

console.log(getGrade(3.20));

console.log(getGrade(2.80));

\`\`\`

Expected output:

\`\`\`text

A

B

C

F

\`\`\`

**\*\*---\*\***

**\*\*# Testing\*\***

**\*\*## Test 1 - Basic Arrow Function\*\***

\`\`\`javascript

console.log(greetStudent("Rahim"));

console.log(greetStudent("Nusrat"));

\`\`\`

The arrow function correctly returned greetings for different names.

**\*\*## Test 2 - Multiple Parameters\*\***

\`\`\`javascript

console.log(addNumbers(10, 20));

console.log(addNumbers(50, 25));

console.log(addNumbers(100, 50));

\`\`\`

Expected:

\`\`\`text

30

75

150

\`\`\`

**\*\*## Test 3 - Average Calculation\*\***

\`\`\`javascript

console.log(calculateAverage(80, 85, 90));

console.log(calculateAverage(70, 80, 90));

\`\`\`

Expected:

\`\`\`text

85

80

\`\`\`

**\*\*## Test 4 - Implicit Return\*\***

\`\`\`javascript

const multiplyNumbers = (a, b) => a * b;

const calculateSquare = (number) => number * number;

console.log(multiplyNumbers(5, 4));

console.log(calculateSquare(6));

\`\`\`

Expected:

\`\`\`text

20

36

\`\`\`

**\*\*## Test 5 - Student Result\*\***

\`\`\`javascript

console.log(getStudentResult(student1));

console.log(getStudentResult(student2));

console.log(getStudentResult(student2, 3.50));

\`\`\`

Expected:

\`\`\`text

Rahim Ahmed has passed.

Tanvir Hasan has not passed.

Tanvir Hasan has passed.

\`\`\`

**\*\*## Test 6 - Student Grade\*\***

\`\`\`javascript

console.log(getGrade(3.90));

console.log(getGrade(3.60));

console.log(getGrade(3.20));

console.log(getGrade(2.80));

\`\`\`

Expected:

\`\`\`text

A

B

C

F

\`\`\`

**\*\*---\*\***

**\*\*# Previous Concepts Used\*\***

Day 47 built upon concepts learned during previous JavaScript lessons:

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

\\- `if`

\\- `else if`

\\- `else`

\\- `&&`

\\- Comparison operators

\\- `>=`

\\- `console.log()`

**\*\*---\*\***

**\*\*# What I Learned\*\***

Day 47 introduced arrow functions as an alternative way to write JavaScript functions.

I learned that regular functions and arrow functions can perform the same basic tasks, but arrow functions provide a shorter syntax.

I learned how to create arrow functions with parameters:

\`\`\`javascript

const greetStudent = (name) => {

    return "Hello, " + name;

};

\`\`\`

I also learned how arrow functions can use multiple parameters, default parameters, objects, conditions, and return values.

Another important concept was implicit return.

For simple functions, this:

\`\`\`javascript

const addNumbers = (a, b) => a + b;

\`\`\`

can replace:

\`\`\`javascript

const addNumbers = (a, b) => {

    return a + b;

};

\`\`\`

This makes arrow functions especially useful for short functions and callbacks.

**\*\*---\*\***

**\*\*# Project Structure\*\***

\`\`\`text

Day-47-JavaScript-Arrow-Functions/

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

The next lessons will continue building on JavaScript functions and arrow functions.

Future concepts will gradually introduce:

\\- Arrow functions with arrays

\\- Callback functions

\\- Array methods

\\- Using functions to process collections of data

\\- Combining functions with the existing Student Information project

**\*\*---\*\***

