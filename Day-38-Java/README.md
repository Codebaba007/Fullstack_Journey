# Day 38 - JavaScript Multiple Input Validation

## Overview

Day 38 focuses on validating multiple pieces of user input using JavaScript.

In the previous lesson, I learned how to validate a single input field using:

- `.value`
- `.trim()`
- `if / else`
- Button click events
- `.textContent`

In this project, I extended that concept by validating two input fields at the same time:

- Student Name
- Student ID

The validation checks whether either field is empty. If one or both fields are empty, an error message is displayed.

If both fields contain information, a success message is displayed.

This lesson introduces the logical OR operator `||`, which allows multiple conditions to be checked together.

---

## Project Objective

The main objective of Day 38 was to learn how to:

- Work with multiple input fields
- Read values from multiple inputs
- Use `.trim()` with multiple values
- Validate multiple pieces of user input
- Understand the logical OR operator `||`
- Combine multiple conditions inside an `if` statement
- Display appropriate validation messages
- Continue using `console.log()` for debugging

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

## 1. Working With Multiple Inputs

Multiple HTML input fields can be selected using `getElementById()`.

Example:

```javascript
const studentNameInput = document.getElementById("studentNameInput");
const studentIdValidationInput = document.getElementById("studentIdValidationInput");