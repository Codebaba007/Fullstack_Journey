# Day 39 - JavaScript Numeric Range Validation

## Overview

Day 39 builds on the multiple-input validation from Day 38.

Today, I learned how to validate numerical input by checking whether a value falls within an allowed range.

The project uses a Student Information validation system where the Student ID must be between `2026001` and `2026999`.

This introduced numerical comparison operators, `Number()`, and `else if`.

---

## Project Objective

The goal of Day 39 was to extend the Student Information validation system by:

- Reading a Student Name from an input
- Reading a Student ID from an input
- Converting the Student ID from a string to a number
- Checking whether required information has been entered
- Checking whether the Student ID is within an allowed range
- Using comparison operators
- Using `else if`
- Combining conditions with `||`
- Displaying different validation messages
- Testing valid and invalid Student IDs

---

## Technologies Used

- HTML5
- CSS3
- JavaScript
- DOM API
- Git
- GitHub
- Live Server

---

## Concepts Learned

### 1. Number()

HTML input values are received as strings.

JavaScript's `Number()` function can convert the input value into a number.

```javascript1
const studentId = Number(studentIdValidationInput.value);