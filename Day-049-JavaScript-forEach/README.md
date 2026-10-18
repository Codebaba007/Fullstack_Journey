# Day 49 - JavaScript forEach()

## Overview

Day 49 focuses on the JavaScript `forEach()` array method.

In Day 48, I learned about callback functions and how a function can be passed into another function as an argument.

Day 49 builds on that concept by learning how `forEach()` uses a callback function to execute an operation for every item in an array.

The exercises included using `forEach()` with arrays of strings, arrays of numbers, student objects, conditions, indexes, and the complete students array.

A Student Performance Report was also created using `forEach()` with student objects, indexes, CGPA values, and conditional logic.

---

## Project Objective

The objectives of Day 49 were:

- Understand the `forEach()` method
- Understand how `forEach()` works with callback functions
- Use arrow functions as `forEach()` callbacks
- Loop through arrays using `forEach()`
- Access the current array item
- Access the current array index
- Access the entire array inside a callback
- Use `forEach()` with objects
- Use conditions inside `forEach()`
- Process multiple student objects
- Create a student performance report using `forEach()`

---

## Technologies Used

- HTML5
- CSS3
- JavaScript
- DOM API
- Git
- GitHub
- VS Code
- Live Server

---

# Concepts Learned

## 1. The `forEach()` Method

The `forEach()` method is used to execute a function once for every item in an array.

For example:

```javascript
const students = ["Rahim", "Nusrat", "Tanvir", "Sakib"];

students.forEach((student) => {

    console.log(student);

});