
# Day 112 - React State Actions

## Overview

This project demonstrates how multiple actions can update a shared state object in React.

The student profile manager allows users to edit a student's name, reset the name, and toggle the department while preserving other properties in the student object.

## Concepts Learned

- Managing object state with `useState`
- Updating shared state through multiple actions
- Passing state and setter functions through props
- Using the spread operator to preserve existing properties
- Using functional state updates
- Handling button clicks with `onClick`
- Passing function references to event handlers
- Using the ternary operator to toggle between values
- Updating a specific property without replacing the entire object
- Creating reusable child components

## Features

- Student profile display
- Editable student name
- Reset name button
- Department toggle button
- Shared state across components
- Automatic UI updates after state changes

## Technologies Used

- React
- JavaScript
- CSS
- Vite

## Project Structure

```text
Day-112-React-State-Actions/
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

React state can be updated through different event handlers while remaining owned by a common parent component.

The spread operator preserves existing object properties when only one property needs to change. Functional state updates use the previous state to calculate the next state reliably.

The ternary operator can be used to toggle a property between two values.

## Learning Progress

- Day: 112
- Topic: React State Actions
- Status: Completed after implementation and testing
