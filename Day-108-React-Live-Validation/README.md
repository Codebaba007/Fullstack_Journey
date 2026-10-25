
# Day 108 - React Live Form Validation

## Overview

This project extends the custom form validation from Day 107 by adding live validation after the user attempts to submit the form.

Instead of requiring another submission to check corrected inputs, the application updates individual field errors as the user types.

## Concepts Learned

- Managing form data with `useState`
- Managing validation errors with React state
- Creating a reusable `validateField()` function
- Validating one field using its name and value
- Updating input values with a shared `handleChange()` function
- Using the spread operator to preserve existing errors
- Using computed property names to update a specific error
- Validating all fields during form submission
- Using `Object.keys()` to check whether errors exist
- Rendering error messages conditionally
- Showing a success message only when validation passes
- Using `aria-invalid` to communicate field validity

## Features

- Registration form with name, email, and password fields
- Custom validation for each field
- Individual error messages
- Live error updates after the first submission attempt
- Password minimum-length validation
- Basic email-format validation
- Success message after successful validation
- Simple responsive styling

## Technologies Used

- React
- JavaScript
- HTML
- CSS
- Vite

## Project Structure

```text
Day-108-React-Live-Validation/
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

## Day 107 vs. Day 108

Day 107 introduced form validation when the user submits the form.

Day 108 builds on that foundation by validating individual fields as the user corrects them after the first submission attempt.

## Key Takeaways

The `validateField(name, value)` function validates a specific field and returns an error message or an empty string.

The `handleChange()` function updates form data and, once validation has started, updates the corresponding field error without removing other errors.

The application still validates every field when the form is submitted.

## Security Note

Frontend validation improves user experience but does not replace server-side validation. Production registration systems must validate submitted data securely on the backend.

## Learning Progress

- Day: 108
- Topic: React Live Form Validation
- Status: Completed after implementation and testing
