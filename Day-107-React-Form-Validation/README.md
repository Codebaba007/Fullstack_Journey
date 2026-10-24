
# Day 107 - React Custom Form Validation

## Overview

This project demonstrates how to validate user input in React using controlled components, state management, conditional rendering, and custom validation functions.

## Concepts Learned

- Managing form data using `useState`
- Managing validation errors using an object in React state
- Reusing an input change handler
- Validating form fields with a custom function
- Using `.trim()` to reject whitespace-only names
- Checking email format using a regular expression
- Using `.test()` to evaluate a regular expression
- Validating password length with `.length`
- Returning validation errors from a function
- Using `Object.keys()` to check whether errors exist
- Displaying error messages with conditional rendering
- Preventing default form submission with `event.preventDefault()`
- Using `noValidate` to disable native browser form validation
- Providing accessible error feedback with `aria-invalid` and `aria-describedby`

## Features

- Registration form with name, email, and password fields
- Custom validation for each field
- Individual error messages
- Password minimum-length check
- Email-format validation
- Success message when all validation checks pass
- Responsive and simple form styling

## Technologies Used

- React
- JavaScript
- HTML
- CSS
- Vite

## Project Structure

```text
Day-107-React-Form-Validation/
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

The `validateForm()` function checks user input and returns an object containing validation errors.

The `errors` state stores those errors and allows React to display messages conditionally. The form displays a success message only when the validation function returns an empty error object.

Regular expressions can help check email format, but they cannot confirm that an email address actually exists.

## Security Note

Frontend validation improves the user experience but does not replace backend validation. A production registration system must validate data on the server and handle passwords securely.

## Learning Progress

- Day: 107
- Topic: React Custom Form Validation
- Status: Completed after implementation and testing
