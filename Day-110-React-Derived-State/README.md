
# Day 110 - React Derived State

## Overview

This project demonstrates derived values in React by building a student profile that calculates a student's name length and validation status from existing state.

Instead of storing duplicate information, the application calculates values directly from the student's name.

## Concepts Learned

- Managing state with `useState`
- Understanding derived values in React
- Calculating values from existing state
- Using `.trim()` to remove leading and trailing whitespace
- Using `.length` to count characters
- Using comparison operators to calculate Boolean values
- Passing calculated values through props
- Sharing state between parent and child components
- Conditional rendering with the ternary operator
- Avoiding unnecessary duplicate state

## Features

- Student name input
- Live character count
- Automatic name-length status
- Empty-input handling
- Shared state between components
- Responsive profile summary

## Technologies Used

- React
- JavaScript
- CSS
- Vite

## Project Structure

```text
Day-110-React-Derived-State/
├── public/
├── src/
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   └── main.jsx
├── index.html
├── package.json
└── README.md
```

## Key Takeaways

Derived values are calculated from existing state instead of being stored separately.

For example, `nameLength` is calculated using `studentName.trim().length`, while `isNameLongEnough` is calculated by checking whether the character count is at least three.

These values update automatically when React re-renders after the source state changes.

Avoiding unnecessary duplicate state helps prevent inconsistent data and simplifies state management.

## Learning Progress

- Day: 110
- Topic: React Derived State
- Status: Completed after implementation and testing
