# Day 34 - JavaScript DOM User Input & Student Search

## Overview

Day 34 focuses on connecting JavaScript user input with an existing array of student objects and dynamically updating the webpage.

In previous lessons, I learned how to work with arrays of objects and methods such as:

- `forEach()`
- `map()`
- `filter()`
- `find()`
- `reduce()`

I also learned how to work with the DOM and event listeners.

In this project, I combined those concepts to build a Student Search feature.

The user can enter a Student ID, click the Search button, and JavaScript searches the student array. If the student is found, their information is displayed dynamically on the webpage.

If the Student ID does not exist, an appropriate error message is displayed.

---

## Project Objective

The main objective of Day 34 was to learn how to:

- Read user input from an HTML input field
- Convert input values into the correct data type
- Search an array of objects using `find()`
- Handle cases where no matching object is found
- Update HTML elements dynamically using JavaScript
- Connect user actions to JavaScript using event listeners
- Understand the basic idea of shared state using a variable such as `selectedStudent`

---

## Technologies Used

- HTML5
- CSS3
- JavaScript
- DOM API
- Git & GitHub
- Live Server

---

# Concepts Learned

## 1. Reading User Input

HTML input fields can be accessed using:

```javascript
const studentIdInput = document.getElementById("studentIdInput");