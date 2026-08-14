# Day 35 - JavaScript Input Events & Dynamic DOM Updates

## Overview

Day 35 focuses on learning how JavaScript can respond to user input in real time using the `input` event.

In the previous lesson, I learned how to read user input when a button is clicked and use that input to search through an array of student objects.

In this project, I focused on a different type of interaction: detecting changes inside an input field as the user types.

I created a small Live Input Practice section where the user can type text and JavaScript immediately updates the webpage with the entered value.

This helped me understand how JavaScript can create dynamic and interactive user interfaces without requiring a button click or page refresh.

---

## Project Objective

The main objective of Day 35 was to learn how to:

- Detect changes in an input field
- Use the `input` event
- Use `addEventListener()` with an input element
- Read the current value of an input using `.value`
- Select HTML elements using `getElementById()`
- Update webpage content using `.textContent`
- Respond to user actions in real time
- Use conditional statements to handle empty input
- Use `return` to stop a function early
- Connect user input with dynamic DOM updates

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

## 1. Selecting an Input Element

The first step was selecting the input element from the HTML using `getElementById()`.

HTML:

```html
<input
    type="text"
    id="liveInput"
    placeholder="Type something..."
>