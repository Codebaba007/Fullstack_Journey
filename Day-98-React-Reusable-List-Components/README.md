# Day 98 — React Reusable Components with `.map()`

## Overview

Today I learned how to extract repeated JSX markup into a reusable React component and render it dynamically using JavaScript's `.map()` method.

I built a Student Dashboard that displays multiple student cards from an array of student objects.

## Learning Objectives

- Understand why reusable components are useful.
- Extract repeated JSX markup into a separate component.
- Pass an object to a child component using props.
- Use destructuring to access object properties.
- Render reusable components with `.map()`.
- Understand the purpose of React's `key` prop.
- Distinguish between a parent component and a child component.

## 1. Student Data

```javascript
const students = [
    { id: 101, name: "Mehedi", department: "CSE", cgpa: 3.75 },
    { id: 102, name: "Rahim", department: "EEE", cgpa: 3.60 },
    { id: 103, name: "Karim", department: "BBA", cgpa: 3.40 }
];
```

Each student is represented by an object containing an ID, name, department, and CGPA.

## 2. Creating a Reusable StudentCard Component

```jsx
function StudentCard({ student }) {
    const { name, department, cgpa } = student;

    return (
        <article className="student-card">
            <h2>{name}</h2>
            <p>Department: {department}</p>
            <p>CGPA: {cgpa}</p>
        </article>
    );
}
```

The component receives one student's object through props and uses destructuring to extract the required properties.

## 3. Rendering Components with `.map()`

```jsx
{students.map((student) => {
    return (
        <StudentCard
            key={student.id}
            student={student}
        />
    );
})}
```

The `.map()` method generates a `StudentCard` element for each student in the array.

- `student={student}` passes the current student's object.
- `key={student.id}` provides a stable, unique key for React's list rendering.

## 4. Understanding Component Responsibilities

### App Component

- Manages the dashboard's overall structure.
- Uses the student array.
- Renders the list of student cards.

### StudentCard Component

- Defines the structure of one student card.
- Receives one student's data through props.
- Displays the student's name, department, and CGPA.

Separating these responsibilities makes the application easier to read, reuse, and maintain.

## 5. Alternative Approach

The card markup can also be written directly inside the `.map()` callback in `App`.

Extracting a separate `StudentCard` component is not mandatory, but it becomes useful when the markup needs to be reused or becomes more complex.

## Key Takeaways

- React components can be composed together to build larger interfaces.
- A component definition can be reused for multiple items.
- Props pass data from parent components to child components.
- Destructuring can simplify access to nested object properties.
- `.map()` dynamically renders components from an array.
- React uses keys to identify list items between renders.
- Components should have clear responsibilities.

## Practice Challenges

- [ ] Add a fourth student without changing the component definition.
- [ ] Add an email property and display it in each card.
- [ ] Explain why `StudentCard` is separate from `App`.
- [ ] Explain the difference between the `key` and `student` props.
- [ ] Try rendering the markup directly inside `.map()` and compare both approaches.

## Completion Checklist

- [ ] Create the student array.
- [ ] Build the reusable `StudentCard` component.
- [ ] Pass student objects through props.
- [ ] Use destructuring to access student properties.
- [ ] Render the cards with `.map()`.
- [ ] Add stable keys to the rendered components.
- [ ] Apply CSS styling and verify the application.

## Outcome

I can extract repeated JSX into reusable React components and render them dynamically from an array of objects.

## Next Step

Continue strengthening React component composition, props, and list rendering before moving deeper into state and interactive UI.
