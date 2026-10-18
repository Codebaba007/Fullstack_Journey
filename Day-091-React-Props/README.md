# Day 91 — React Props

## Overview

Today I learned **React Props**.

Props are used to pass data from a **parent component to a child component**.

The main goal was to understand how components can be made reusable by giving them different data.

---

## 1. Parent and Child Components

React applications are built from components.

For example:

```text
App
 │
 ├── StudentCard
 ├── StudentCard
 └── StudentCard
```

Here:

- `App` is the parent component.
- `StudentCard` is the child component.

---

## 2. What Are Props?

Props means **properties**.

They allow a parent component to send information to a child component.

The basic flow is:

```text
Parent
   │
   │ props
   ↓
Child
```

Props flow **from parent to child**.

They do not automatically flow from child to parent.

---

## 3. Sending Props

A parent can send information to a child like this:

```jsx
<StudentCard name="Mehedi" />
```

Here:

```text
name = "Mehedi"
```

is a prop.

Multiple props can be passed:

```jsx
<StudentCard
    name="Mehedi"
    department="CSE"
/>
```

---

## 4. Receiving Props

The child component receives props through the `props` parameter.

```jsx
function StudentCard(props) {
    return (
        <div>
            <h2>{props.name}</h2>
            <p>{props.department}</p>
        </div>
    );
}
```

The `props` object contains the information sent by the parent.

Conceptually:

```text
props
 ├── name → "Mehedi"
 └── department → "CSE"
```

Therefore:

```jsx
{props.name}
```

displays:

```text
Mehedi
```

And:

```jsx
{props.department}
```

displays:

```text
CSE
```

---

## 5. Reusable Components

Props allow the same component to be reused with different data.

Example:

```jsx
<StudentCard
    name="Mehedi"
    id={101}
    department="CSE"
    cgpa={3.75}
/>

<StudentCard
    name="Rahim"
    id={102}
    department="EEE"
    cgpa={3.60}
/>

<StudentCard
    name="Karim"
    id={103}
    department="BBA"
    cgpa={3.40}
/>
```

The same `StudentCard` component is used three times.

Only the data changes.

```text
StudentCard
     │
     ├── Mehedi
     │
     ├── Rahim
     │
     └── Karim
```

---

## 6. Strings and JavaScript Values

String props can be passed directly:

```jsx
name="Mehedi"
```

Numbers are passed using `{}`:

```jsx
id={101}
cgpa={3.75}
```

This is because `{}` allows us to provide a JavaScript value or expression.

---

## 7. The `<div>` Inside a Component

A `<div>` is **not required because a function is a React component**.

The `<div>` is simply an HTML element used to group multiple JSX elements.

For example:

```jsx
function StudentCard() {
    return (
        <div>
            <h2>Mehedi</h2>
            <p>CSE</p>
        </div>
    );
}
```

The `<div>` acts as a container.

```text
StudentCard
    │
    └── div
         ├── h2
         └── p
```

A React Fragment can also be used instead:

```jsx
function StudentCard() {
    return (
        <>
            <h2>Mehedi</h2>
            <p>CSE</p>
        </>
    );
}
```

This groups the JSX without creating an actual `<div>` in the HTML.

---

## 8. Main Example

The final example used a reusable `StudentCard` component:

```jsx
function StudentCard(props) {
    return (
        <div>
            <h2>{props.name}</h2>
            <p>ID: {props.id}</p>
            <p>Department: {props.department}</p>
            <p>CGPA: {props.cgpa}</p>
        </div>
    );
}

function App() {
    return (
        <div>
            <h1>Student Dashboard</h1>

            <StudentCard
                name="Mehedi"
                id={101}
                department="CSE"
                cgpa={3.75}
            />

            <StudentCard
                name="Rahim"
                id={102}
                department="EEE"
                cgpa={3.60}
            />

            <StudentCard
                name="Karim"
                id={103}
                department="BBA"
                cgpa={3.40}
            />
        </div>
    );
}

export default App;
```

---

## 9. Component Flow

The complete flow is:

```text
main.jsx
   │
   │ renders
   ↓
  App
   │
   │ sends props
   ↓
StudentCard
   │
   │ receives
   ↓
 props
   │
   ├── name
   ├── id
   ├── department
   └── cgpa
```

The important relationship is:

```text
Parent → Props → Child
```

---

## Key Takeaways

- Props means properties.
- Props allow components to receive data.
- Props are passed from parent to child.
- Props are accessed through the `props` parameter.
- `props.name` accesses the `name` prop.
- Props make components reusable.
- The same component can display different data depending on the props it receives.
- A `<div>` is only a JSX container; it is not required for a React component.
- React Fragments (`<>...</>`) can group JSX without creating an extra HTML element.

---

## Day 91 Mental Model

```text
main.jsx
    │
    ↓
   App
    │
    │  props
    ↓
StudentCard
    │
    ↓
  UI
```

The central rule:

```text
Parent → Child
```

**Status:** Completed

**Next:** React Component Composition