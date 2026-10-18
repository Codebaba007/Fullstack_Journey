# Day 97 — React List Rendering with `.map()`

## Overview

Today I learned how to render lists dynamically in React using JavaScript arrays and the `.map()` method.

Instead of writing separate JSX elements for every student, I used an array of student objects and generated the UI from the data.

## Learning Objectives

- Store multiple objects in a JavaScript array.
- Access array elements and object properties.
- Understand how the `.map()` method works.
- Generate JSX elements dynamically.
- Render multiple student cards from one array.
- Understand the purpose of React's `key` prop.
- Apply CSS classes to dynamically rendered elements.

## 1. Student Data

```javascript
const students = [
    { id: 101, name: "Mehedi", department: "CSE", cgpa: 3.75 },
    { id: 102, name: "Rahim", department: "EEE", cgpa: 3.60 },
    { id: 103, name: "Karim", department: "BBA", cgpa: 3.40 }
];
```

Each student is an object containing an ID, name, department, and CGPA. The objects are stored together in an array named `students`.

## 2. Understanding `.map()`

The `.map()` method processes each array item and returns a new array containing the results.

```javascript
const numbers = [1, 2, 3];

const doubledNumbers = numbers.map((number) => {
    return number * 2;
});
```

The result is `[2, 4, 6]`.

In React, the callback can return JSX elements instead of numbers or strings.

## 3. Rendering a List in React

```jsx
{students.map((student) => {
    return (
        <p key={student.id}>{student.name}</p>
    );
})}
```

React renders a paragraph for every student in the array.

## 4. Student Dashboard

The completed application includes:

- A `Student Dashboard` heading.
- An array of student objects.
- Dynamically generated student cards.
- Student names, departments, and CGPAs.
- A unique `key` based on each student's ID.
- CSS styling for the dashboard and student cards.
- Responsive styling for smaller screens.

## 5. Understanding the `key` Prop

React uses keys to identify list elements between renders.

```jsx
<article className="student-card" key={student.id}>
    <h2>{student.name}</h2>
    <p>Department: {student.department}</p>
    <p>CGPA: {student.cgpa}</p>
</article>
```

The student ID provides a stable, unique key for each student in the list.

## Key Takeaways

- Arrays can store multiple objects.
- `students[0]` accesses the first item in an array.
- `student.name` accesses a property of a student object.
- `.map()` transforms each array item into a corresponding result.
- JSX expressions use curly braces to evaluate JavaScript.
- React list elements should have stable, unique keys.
- Adding an object to the array automatically adds a corresponding rendered element.

## Practice Challenges

- [ ] Add a fourth student to the array.
- [ ] Add an email property to every student.
- [ ] Display the email in each student card.
- [ ] Explain how `.map()` generates the elements.
- [ ] Explain why `key={student.id}` is used.

## Completion Checklist

- [ ] Create an array of student objects.
- [ ] Render multiple students using `.map()`.
- [ ] Display each student's information.
- [ ] Add a stable key to each list item.
- [ ] Apply CSS styling.
- [ ] Run the application and verify the output.

## Outcome

I can render lists of data dynamically in React using `.map()` and understand the role of the `key` prop in list rendering.

## Next Step

Learn how to extract the student card markup into a reusable React component while continuing to render the student list dynamically.
