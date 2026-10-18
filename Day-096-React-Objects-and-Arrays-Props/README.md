# Day 96 — React Objects and Arrays as Props

## Overview

Today I learned how to pass a JavaScript object from a parent component to a child component using React props.

Instead of passing several individual values, I grouped related student information into one object and passed it to a reusable `StudentCard` component.

## Learning Objectives

- Understand how JavaScript objects store related information.
- Pass an object as a React prop.
- Receive an object through props destructuring.
- Access object properties inside JSX.
- Understand data flow from parent components to child components.

## 1. Creating a Student Object

```javascript
const student = {
    name: "Mehedi",
    department: "CSE",
    cgpa: 3.75
};
```

The object stores the student's name, department, and CGPA as properties.

## 2. Passing an Object as a Prop

```jsx
<StudentCard student={student} />
```

The parent component passes the entire object through a prop named `student`.

## 3. Receiving the Object

```jsx
function StudentCard({ student }) {
    return (
        <article>
            <h2>{student.name}</h2>
            <p>Department: {student.department}</p>
            <p>CGPA: {student.cgpa}</p>
        </article>
    );
}
```

The component receives the `student` prop and accesses its properties using dot notation.

## 4. Complete Application

The `App.jsx` project includes:

- A JavaScript object containing student information.
- A `StudentCard` component.
- Props destructuring to receive the object.
- JSX expressions to display object properties.
- An `App` component that passes the object to `StudentCard`.

## Key Takeaways

- JavaScript objects group related data into one value.
- React props can carry objects as well as strings and numbers.
- Curly braces in JSX allow JavaScript expressions.
- Props destructuring extracts the `student` property from the props object.
- The child component accesses the object's properties through `student.name`, `student.department`, and `student.cgpa`.

## Completion Checklist

- [ ] Create the student object.
- [ ] Build the `StudentCard` component.
- [ ] Pass the object using `student={student}`.
- [ ] Display the student's name, department, and CGPA.
- [ ] Run the application and verify the output.
- [ ] Understand how data flows from parent to child.

## Outcome

I can pass a JavaScript object to a React component through props and display its properties in JSX.

## Next Step

Continue learning how to pass arrays of objects as props and render multiple students using reusable React components.
