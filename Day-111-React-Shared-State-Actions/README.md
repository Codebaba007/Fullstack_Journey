
# Day 111 - React Shared State Actions

## Overview

This project demonstrates how multiple React components can access and update the same state object owned by a common parent component.

The student dashboard allows users to edit a student's name and department while keeping the profile synchronized.

## Concepts Learned

- Managing object state with `useState`
- Lifting state up to a common parent
- Sharing state between multiple child components
- Passing state and setter functions through props
- Updating object state using the spread operator
- Using functional state updates
- Creating controlled inputs
- Handling text input changes with `onChange`
- Handling selection changes with `onChange`
- Preserving existing object properties during state updates
- Understanding why component definitions should remain outside the parent component

## Features

- Student profile displaying name and department
- Editable student name
- Department selection
- Live profile updates
- Shared state across multiple components

## Technologies Used

- React
- JavaScript
- CSS
- Vite

## Project Structure

```text
Day-111-React-Shared-State-Actions/
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

The `App` component owns the student state because multiple child components need access to the same information.

The `NameEditor` and `DepartmentEditor` components receive the state setter through props. Each component updates its relevant property while preserving the other properties with the spread operator.

Child components should be defined outside the parent component to maintain stable component identity across renders.

## Learning Progress

- Day: 111
- Topic: React Shared State Actions
- Status: Completed after implementation and testing
