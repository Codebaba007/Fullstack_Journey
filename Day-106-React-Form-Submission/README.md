
# Day 106 - React Form Submission

## Overview

This project demonstrates how to handle form submission in React using controlled inputs, state management, and event handling.

## Concepts Learned

- Handling form submission with `onSubmit`
- Preventing the default browser behavior using `event.preventDefault()`
- Using `useState` to manage form data
- Managing multiple form fields with a single state object
- Handling input changes with a reusable `handleChange` function
- Updating object state using the spread operator
- Using computed property names to update specific fields
- Displaying conditional success messages
- Using HTML form validation with `required` and `type="email"`

## Features

- Registration form with name, email, and password fields
- Controlled inputs connected to React state
- Reusable input change handler
- Form submission handler
- Conditional success message after submission
- Basic HTML form validation

## Technologies Used

- React
- JavaScript
- HTML
- CSS
- Vite

## Project Structure

```text
Day-106-React-Form-Submission/
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

React controlled inputs keep form values synchronized with component state. The `onChange` handler updates the relevant field, while the `onSubmit` handler processes the form without triggering a full-page reload.

Conditional rendering allows the application to display a success message only after submission.

## Future Improvements

- Add custom form validation and error messages
- Add a separate department field
- Improve the form's visual design
- Connect the form to a backend API
- Implement secure server-side registration and password handling

## Learning Progress

- Day: 106
- Topic: React Form Submission
- Status: Completed after fixing the form input elements and testing submission
