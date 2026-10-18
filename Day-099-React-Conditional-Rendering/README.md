# Day 99 — React Conditional Rendering

## Overview

Today I learned how to conditionally render UI elements in React based on JavaScript conditions.

I built a Student Dashboard that displays different messages depending on a student's status. I practiced the ternary operator, logical AND (`&&`), and using a JavaScript function to return status messages.

## Learning Objectives

- Understand conditional rendering in React.
- Use the ternary operator inside JSX.
- Use `&&` to conditionally display elements.
- Use JavaScript functions to determine what message to display.
- Understand how data influences the rendered UI.
- Apply CSS classes to style dashboard elements.

## 1. Student Data

```javascript
const student = {
    name: "Mehedi",
    cgpa: 3.75,
    status: "Active"
};
```

The student's status determines which messages appear in the dashboard.

## 2. Conditional Rendering with the Ternary Operator

```jsx
{student.status === "Active"
    ? "Student is active"
    : "Student is not active"}
```

The ternary operator selects one of two values depending on whether the condition is true or false.

## 3. Conditional Rendering with `&&`

```jsx
{student.status === "Active" && (
    <p className="success-message">
        Welcome back! Your student account is active.
    </p>
)}
```

The paragraph renders only when the student's status is `"Active"`.

## 4. Using a Function for Status Messages

```javascript
function getStatusMessage(status) {
    if (status === "Active") {
        return "This student is currently active.";
    }

    if (status === "Pending") {
        return "This student's status is awaiting confirmation.";
    }

    return "This student is currently inactive.";
}
```

The function receives a status and returns the corresponding message.

The result can be displayed inside JSX:

```jsx
<p>{getStatusMessage(student.status)}</p>
```

## 5. Practical Project

Built a Student Dashboard featuring:

- Student name and CGPA.
- A student status property.
- A ternary expression for status-based messages.
- A function for handling multiple statuses.
- A conditional welcome message using `&&`.
- CSS styling and responsive layout.

## Key Takeaways

- Conditional rendering displays UI based on conditions.
- The ternary operator is useful for choosing between two alternatives.
- The `&&` operator is useful for rendering an element only when a condition is true.
- JavaScript functions can return values that React displays.
- Changing the underlying data can change the rendered UI.

## Practice Challenges

- [ ] Change the student status to `"Pending"` and verify the message.
- [ ] Add a `"Suspended"` status and handle it explicitly.
- [ ] Display a message only when the CGPA is at least 3.70.
- [ ] Explain the difference between the ternary operator and `&&`.

## Completion Checklist

- [ ] Understand conditional rendering.
- [ ] Use a ternary expression inside JSX.
- [ ] Use `&&` to conditionally render an element.
- [ ] Create a function that returns status messages.
- [ ] Style the dashboard.
- [ ] Run the application and test different statuses.

## Outcome

I can use JavaScript conditions and expressions to control which elements React renders.

## Next Step

Continue developing React fundamentals through practical exercises involving components, props, and interactive UI.
