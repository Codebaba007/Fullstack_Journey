# Day 94 — React Props Destructuring

## Overview

Today I learned how to use JavaScript object destructuring to make React components cleaner and easier to read.

Instead of repeatedly accessing values through `props.name`, `props.id`, and `props.department`, I learned how to extract the required values directly from the props object.

## Learning Objectives

- Understand JavaScript object destructuring.
- Destructure props inside a component function.
- Destructure props directly in function parameters.
- Pass data from a parent component to child components.
- Use destructured props to build reusable React components.

## 1. JavaScript Object Destructuring

```javascript
const student = {
    name: "Mehedi",
    id: 101,
    department: "CSE"
};

const { name, id, department } = student;
```

Destructuring extracts selected properties from an object into variables.

## 2. Destructuring Inside a Component

```jsx
function StudentCard(props) {
    const { name, id, department } = props;

    return (
        <article>
            <h2>{name}</h2>
            <p>ID: {id}</p>
            <p>Department: {department}</p>
        </article>
    );
}
```

## 3. Destructuring in Function Parameters

```jsx
function StudentCard({ name, id, department }) {
    return (
        <article>
            <h2>{name}</h2>
            <p>ID: {id}</p>
            <p>Department: {department}</p>
        </article>
    );
}
```

This is a shorter way to access the properties of the props object.

## 4. Practical Project

I built a student dashboard containing:

- A reusable `DashboardHeader` component.
- A reusable `StudentCard` component.
- Multiple student cards with different information.
- Props for student name, ID, department, and CGPA.
- CSS styling for the dashboard and student cards.

## 5. Practice Challenge

Extend the `StudentCard` component by adding a `status` prop.

Requirements:

- Display the student's status.
- Give each student a different status.
- Pass the status from the parent component.
- Use destructuring to access the new prop.

## Key Takeaways

- Props are passed from parent components to child components.
- A component receives its props as one object.
- Destructuring extracts selected properties from that object.
- Destructuring in function parameters makes components more concise.
- Props help make components reusable with different data.

## Completion Checklist

- [ ] Understand JavaScript object destructuring.
- [ ] Destructure props inside a component.
- [ ] Destructure props directly in function parameters.
- [ ] Build the student dashboard.
- [ ] Complete the `status` prop challenge.
- [ ] Run the application and verify the output.

## Outcome

I can use props destructuring to write cleaner React components and pass data between parent and child components.
