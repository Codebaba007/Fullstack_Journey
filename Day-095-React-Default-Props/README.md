# Day 95 — React Default Values for Props

## Overview

Today I learned how to provide default values for React props using JavaScript destructuring.

Default values allow a component to display sensible information when a parent component does not provide an optional prop.

## Learning Objectives

- Understand default values in JavaScript destructuring.
- Provide default values for React props.
- Understand how React components behave when props are omitted.
- Combine props destructuring with default values.
- Build a reusable student status dashboard.

## 1. Default Values in Destructuring

JavaScript allows a default value to be assigned during destructuring.

```javascript
const { status = "Pending" } = student;
```

If `student.status` is `undefined`, the variable `status` receives `"Pending"`.

## 2. Default Values in React Props

```jsx
function StudentCard({ name, status = "Pending" }) {
    return (
        <article>
            <h2>{name}</h2>
            <p>Status: {status}</p>
        </article>
    );
}
```

The default value is used when the parent component does not provide the `status` prop or provides it as `undefined`.

## 3. Passing Props

```jsx
<StudentCard name="Mehedi" status="Active" />
<StudentCard name="Rahim" />
<StudentCard name="Karim" status="Inactive" />
```

Expected results:

- Mehedi — Active
- Rahim — Pending
- Karim — Inactive

Explicitly provided statuses take precedence over the default value.

## 4. Practical Project

Built a Student Status Dashboard featuring:

- A reusable `StudentCard` component.
- Student names and IDs passed through props.
- A default status of `"Pending"`.
- Different statuses for different students.
- CSS styling for cards and status labels.
- Responsive layout for smaller screens.

## Key Takeaways

- Props allow parent components to pass data to child components.
- Destructuring makes props easier to access.
- Default values handle missing optional props.
- A default value does not replace an explicitly provided value.
- A default is used for `undefined`, not for every falsy value such as an empty string.

## Completion Checklist

- [ ] Understand default values in destructuring.
- [ ] Use a default value in React function parameters.
- [ ] Display a fallback status when the prop is omitted.
- [ ] Build and test the student dashboard.
- [ ] Verify that explicit statuses override the default.
- [ ] Run the application successfully.

## Outcome

I can provide default values for optional React props and use them to make reusable components more reliable.
