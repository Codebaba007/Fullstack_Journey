# Day 37 - JavaScript Basic Form Validation

## Overview

Day 37 focuses on basic form validation using JavaScript.

In previous lessons, I learned how to work with user input and dynamically update the webpage using the DOM.

I learned how to:

- Read user input using `.value`
- Respond to user actions using event listeners
- Use the `input` event
- Update webpage content using `.textContent`
- Use the `.length` property
- Handle empty input

In this project, I built a basic Student Name Validation feature.

The user can enter a student name and click the Validate Name button. JavaScript checks the input and displays an appropriate message depending on whether a valid name was entered.

The project also introduces the `trim()` method, which removes unnecessary whitespace from the beginning and end of a string.

---

## Project Objective

The main objective of Day 37 was to learn how to:

- Read user input from an HTML input field
- Use `.trim()` to remove unnecessary whitespace
- Check whether a string is empty
- Use `if / else` for validation
- Respond to button clicks
- Display validation messages dynamically
- Use `console.log()` for debugging
- Understand and fix a JavaScript `ReferenceError`

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

The value entered into an input field can be accessed using `.value`.

```javascript
const name = nameInput.value;