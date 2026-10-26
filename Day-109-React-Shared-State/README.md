
# Day 109 - React Shared State

## Overview

This project demonstrates how to share state between React components by lifting state up to their closest common parent.

A student dashboard allows the user to enter a name in one component and display a greeting in another component using the same state.

## Concepts Learned

- Managing state with `useState`
- Lifting state up to a common parent component
- Passing state through props
- Passing a state setter function through props
- Updating parent state from a child component
- Using controlled inputs
- Handling input changes with `onChange`
- Sharing data between sibling components
- Conditional rendering with the ternary operator
- Using `.trim()` to check for whitespace-only input
- Understanding JavaScript case sensitivity

## Features

- Student name input
- Live greeting updates
- Shared state between components
- Conditional greeting when the input is empty
- Reusable child components

## Technologies Used

- React
- JavaScript
- CSS
- Vite

## Project Structure

```text
Day-109-React-Shared-State/
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

The `App` component owns the `studentName` state because both child components need access to the same information.

The `StudentInput` component receives the state setter through props and uses it to update the parent's state. The `StudentGreeting` component receives the updated name and displays it.

This pattern is called lifting state up and helps keep shared data consistent across components.

## Learning Progress

- Day: 109
- Topic: React Shared State and Lifting State Up
- Status: Completed after implementation and testing
