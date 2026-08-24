**# Day 45 - JavaScript Functions with Multiple Parameters**

**## Overview**

Day 45 focuses on JavaScript functions with multiple parameters.

In Day 43, I learned how to pass data into functions using parameters.

In Day 44, I learned how functions can send a value back using the `return` statement.

Day 45 builds on both concepts by learning how functions can receive multiple values through multiple parameters.

The exercises included adding numbers, subtracting numbers, creating student summaries, calculating averages, checking student eligibility, and processing student objects using multiple parameters.

**---**

**## Project Objective**

The objectives of Day 45 were:

\- Understand multiple function parameters

\- Understand how multiple arguments are passed into a function

\- Understand the order of parameters and arguments

\- Use multiple parameters in calculations

\- Use multiple parameters with conditions

\- Use multiple parameters with `return`

\- Pass objects as function arguments

\- Combine multiple parameters with previously learned concepts

\- Create reusable functions that work with different data

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

**## 1. Multiple Function Parameters**

A function can receive more than one parameter.

```javascript
function addNumbers(firstNumber, secondNumber) {

    return firstNumber + secondNumber;

}
```

The function has two parameters:

```text
firstNumber
secondNumber
```

Values can then be passed into the function:

```javascript
const result = addNumbers(10, 20);

console.log(result);
```

Output:

```text
30
```

The arguments are mapped to the parameters in the same order:

```text
10 → firstNumber
20 → secondNumber
```

**---**

**## 2. Parameter Order**

The order of arguments is important.

For example:

```javascript
function subtract(firstNumber, secondNumber) {

    return firstNumber - secondNumber;

}
```

Calling:

```javascript
subtract(20, 5);
```

returns:

```text
15
```

But:

```javascript
subtract(5, 20);
```

returns:

```text
-15
```

The first argument always goes to the first parameter, and the second argument goes to the second parameter.

**---**

**## 3. Multiple Parameters with Student Data**

Multiple parameters can be used to create a reusable student summary function.

```javascript
function createStudentSummary(name, department, cgpa) {

    return name + " - " + department + " - CGPA: " + cgpa;

}
```

The function can receive three different values:

```javascript
const summary = createStudentSummary(
    "Rahim Ahmed",
    "Computer Science",
    3.75
);

console.log(summary);
```

Output:

```text
Rahim Ahmed - Computer Science - CGPA: 3.75
```

The values are mapped as:

```text
"Rahim Ahmed" → name
"Computer Science" → department
3.75 → cgpa
```

**---**

**## 4. Multiple Parameters with Calculations**

Multiple parameters can also be used in calculations.

```javascript
function calculateAverage(mark1, mark2, mark3) {

    const average = (mark1 + mark2 + mark3) / 3;

    return average;

}
```

Example:

```javascript
const average = calculateAverage(80, 85, 90);

console.log(average);
```

Output:

```text
85
```

The three arguments are passed into the three parameters:

```text
80 → mark1
85 → mark2
90 → mark3
```

The function processes all three values and returns one result.

**---**

**## 5. Multiple Parameters with Conditions**

Multiple parameters can also be used with conditional logic.

```javascript
function checkEligibility(cgpa, attendance) {

    if (cgpa >= 3.75 && attendance >= 90) {

        return "Student is eligible.";

    } else {

        return "Student is not eligible.";

    }

}
```

The function receives:

```text
cgpa
attendance
```

Both conditions must be true for the student to be eligible.

Example:

```javascript
const result1 = checkEligibility(3.80, 95);
const result2 = checkEligibility(3.80, 85);
const result3 = checkEligibility(3.60, 95);

console.log(result1);
console.log(result2);
console.log(result3);
```

Expected output:

```text
Student is eligible.
Student is not eligible.
Student is not eligible.
```

This combines multiple parameters with the logical AND operator learned previously.

**---**

**## 6. Multiple Parameters with Objects**

A function can receive an object as one parameter and another value as a second parameter.

```javascript
function getStudentResult(student, passingCgpa) {

    if (student.cgpa >= passingCgpa) {

        return student.name + " has passed.";

    } else {

        return student.name + " has not passed.";

    }

}
```

Example student objects:

```javascript
const student1 = {
    name: "Rahim Ahmed",
    cgpa: 3.75
};

const student2 = {
    name: "Tanvir Hasan",
    cgpa: 3.62
};
```

The function can then receive both the student object and the required CGPA:

```javascript
const result1 = getStudentResult(student1, 3.75);
const result2 = getStudentResult(student2, 3.75);

console.log(result1);
console.log(result2);
```

Output:

```text
Rahim Ahmed has passed.
Tanvir Hasan has not passed.
```

The parameters work as:

```text
student → student1
passingCgpa → 3.75
```

**---**

**# Testing**

**## Test 1 - Adding Numbers**

```javascript
console.log(addNumbers(10, 20));
console.log(addNumbers(50, 25));
console.log(addNumbers(100, 150));
```

The function correctly returned:

```text
30
75
250
```

**## Test 2 - Subtracting Numbers**

```javascript
console.log(subtract(20, 5));
console.log(subtract(50, 10));
console.log(subtract(10, 25));
```

The function correctly returned:

```text
15
40
-15
```

**## Test 3 - Student Summary**

```javascript
createStudentSummary(
    "Rahim Ahmed",
    "Computer Science",
    3.75
);
```

The function correctly created a summary using three parameters.

**## Test 4 - Student Average**

```javascript
calculateAverage(80, 85, 90);
```

The function correctly returned:

```text
85
```

**## Test 5 - Student Eligibility**

```javascript
checkEligibility(3.75, 90);
checkEligibility(3.90, 88);
checkEligibility(3.60, 95);
```

The function correctly determined eligibility based on CGPA and attendance.

**## Test 6 - Student Result**

```javascript
getStudentResult(student1, 3.80);
getStudentResult(student2, 3.50);
```

The function correctly determined the result based on the student's CGPA and the required passing CGPA.

**---**

**# Previous Concepts Used**

Day 45 built upon concepts learned during previous JavaScript lessons:

\- Variables

\- `const`

\- Objects

\- Object properties

\- Functions

\- Function parameters

\- Function arguments

\- Function calls

\- `return`

\- `if`

\- `else`

\- `&&`

\- Comparison operators

\- `>=`

\- `console.log()`

**---**

**# What I Learned**

Day 45 demonstrated how a function can receive multiple pieces of information through multiple parameters.

I learned that arguments are assigned to parameters according to their order.

For example:

```javascript
function calculateAverage(mark1, mark2, mark3)
```

receives:

```text
First argument → mark1
Second argument → mark2
Third argument → mark3
```

I also learned that multiple parameters can be combined with calculations, conditions, objects, and return values.

This makes functions more flexible and reusable because the same function can process different sets of data.

**---**

**# Project Structure**

```text
Day-45-JavaScript-Multiple-Parameters/
│
├── index.html
├── script.js
├── style.css
├── assets/
└── README.md
```

**---**

**# Day Status**

Completed

**---**

**# Next Steps**

The next lessons will continue building on JavaScript functions.

Future concepts will gradually introduce:

\- More advanced function usage

\- Using returned values with the DOM

\- Reusable functions for webpage interactions

\- Combining functions with the existing Student Information project