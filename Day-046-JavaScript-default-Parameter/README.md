**# Day 46 - JavaScript Default Parameters**

**## Overview**

Day 46 focuses on JavaScript default parameters.

In Day 45, I learned how functions can receive multiple values through multiple parameters.

Day 46 builds on that concept by learning how a parameter can have a default value when no argument is provided.

Default parameters allow functions to have a fallback value while still allowing that value to be replaced when a different argument is provided.

The exercises included greeting students with a default name, calculating discounts with a default percentage, creating student summaries with a default semester, checking scholarship eligibility with a default CGPA requirement, and handling student status with a default value.

**---**

**## Project Objective**

The objectives of Day 46 were:

\- Understand default parameters

\- Understand how default values work when an argument is missing

\- Use default parameters with strings

\- Use default parameters with numbers

\- Use default parameters with multiple parameters

\- Override default parameter values

\- Use default parameters with `return`

\- Use default parameters with conditions

\- Use default parameters with objects

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

**## 1. Default Parameters**

A default parameter provides a fallback value when an argument is not provided.

```javascript
function greetStudent(name = "Student") {

    console.log("Hello, " + name);

}
```

If an argument is provided:

```javascript
greetStudent("Rahim");
```

The output is:

```text
Hello, Rahim
```

If no argument is provided:

```javascript
greetStudent();
```

The default value is used:

```text
Hello, Student
```

**---**

**## 2. Default Parameters with Numbers**

Default parameters can also be used with numbers.

```javascript
function calculateDiscount(price, discount = 10) {

    const finalPrice = price - (price * discount / 100);

    return finalPrice;

}
```

When a discount is provided:

```javascript
const result1 = calculateDiscount(100, 20);
```

The result is:

```text
80
```

When the discount is not provided:

```javascript
const result2 = calculateDiscount(100);
```

The default discount of `10` is used.

The result is:

```text
90
```

**---**

**## 3. Default Parameters with Multiple Parameters**

A function can have multiple parameters while one of them uses a default value.

```javascript
function createStudentSummary(name, department, semester = 1) {

    return name + " - " + department + " - Semester: " + semester;

}
```

If the semester is provided:

```javascript
createStudentSummary(
    "Rahim Ahmed",
    "Computer Science",
    6
);
```

The result is:

```text
Rahim Ahmed - Computer Science - Semester: 6
```

If the semester is not provided:

```javascript
createStudentSummary(
    "Nusrat Jahan",
    "Software Engineering"
);
```

The default value is used:

```text
Nusrat Jahan - Software Engineering - Semester: 1
```

**---**

**## 4. Default Parameters with Conditions**

Default parameters can be combined with conditional logic.

```javascript
function checkScholarship(cgpa, requiredCgpa = 3.75) {

    if (cgpa >= requiredCgpa) {

        return "Student is eligible for scholarship.";

    } else {

        return "Student is not eligible for scholarship.";

    }

}
```

When only the student's CGPA is provided:

```javascript
checkScholarship(3.90);
```

The default requirement is used:

```text
requiredCgpa = 3.75
```

A different requirement can also be provided:

```javascript
checkScholarship(3.60, 3.50);
```

Now:

```text
cgpa = 3.60
requiredCgpa = 3.50
```

The student is eligible because:

```text
3.60 >= 3.50
```

**---**

**## 5. Default Parameters with Objects**

Default parameters can also be used when working with objects.

```javascript
function getStudentStatus(student, status = "Pending") {

    return student.name + " - Status: " + status;

}
```

Example student objects:

```javascript
const student1 = {
    name: "Rahim Ahmed",
    cgpa: 3.75
};

const student2 = {
    name: "Nusrat Jahan",
    cgpa: 3.88
};
```

When a status is provided:

```javascript
getStudentStatus(student1, "Active");
```

The result is:

```text
Rahim Ahmed - Status: Active
```

When the status is not provided:

```javascript
getStudentStatus(student2);
```

The default value is used:

```text
Nusrat Jahan - Status: Pending
```

The default can also be overridden:

```javascript
getStudentStatus(student2, "Graduated");
```

The result is:

```text
Nusrat Jahan - Status: Graduated
```

**---**

**# Testing**

**## Test 1 - Default Student Name**

```javascript
greetStudent("Rahim");
greetStudent();
```

Expected:

```text
Hello, Rahim
Hello, Student
```

**## Test 2 - Default Discount**

```javascript
console.log(calculateDiscount(100, 20));
console.log(calculateDiscount(100));
```

Expected:

```text
80
90
```

**## Test 3 - Default Semester**

```javascript
console.log(
    createStudentSummary("Rahim Ahmed", "Computer Science", 6)
);

console.log(
    createStudentSummary("Nusrat Jahan", "Software Engineering")
);
```

Expected:

```text
Rahim Ahmed - Computer Science - Semester: 6
Nusrat Jahan - Software Engineering - Semester: 1
```

**## Test 4 - Default Scholarship Requirement**

```javascript
console.log(checkScholarship(3.90));
console.log(checkScholarship(3.70));
console.log(checkScholarship(3.70, 3.60));
```

The function correctly used the default requirement when no custom value was provided and used the provided requirement when one was given.

**## Test 5 - Default Student Status**

```javascript
console.log(getStudentStatus(student1, "Active"));
console.log(getStudentStatus(student2));
console.log(getStudentStatus(student2, "Graduated"));
```

Expected:

```text
Rahim Ahmed - Status: Active
Nusrat Jahan - Status: Pending
Nusrat Jahan - Status: Graduated
```

**---**

**# Previous Concepts Used**

Day 46 built upon concepts learned during previous JavaScript lessons:

\- Variables

\- `const`

\- Objects

\- Object properties

\- Functions

\- Function parameters

\- Function arguments

\- Multiple parameters

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

Day 46 demonstrated how default parameters provide fallback values for function parameters.

I learned that when an argument is provided, JavaScript uses the provided value.

When an argument is not provided, JavaScript uses the default value defined in the function.

For example:

```javascript
function getStudentStatus(student, status = "Pending")
```

If a status is provided:

```javascript
getStudentStatus(student1, "Active");
```

The provided value is used.

If the status is not provided:

```javascript
getStudentStatus(student2);
```

The default value `"Pending"` is used.

I also learned that default parameters can be combined with calculations, conditions, objects, multiple parameters, and return values.

This makes functions more flexible because they can have sensible default behavior while still allowing custom values when needed.

**---**

**# Project Structure**

```text
Day-46-JavaScript-Default-Parameters/
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

The next lessons will continue building on JavaScript functions and parameters.

Future concepts will gradually introduce:

\- More reusable function patterns

\- Function interactions with the DOM

\- Using function results in webpage updates

\- Combining functions with the existing Student Information project