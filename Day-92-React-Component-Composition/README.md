# Day 92 — React Component Composition

## Overview

Today I learned **React Component Composition**.

Component composition is the practice of building a larger user interface by combining smaller, reusable React components.

The main goal was to understand how components can be organized into a component tree and how props allow reusable components to display different data.

## Topics Covered

- React component composition
- Parent and child components
- Reusable components
- Using one component inside another
- Passing props to reusable components
- Component definitions vs component usage
- Understanding the React component tree
- Basic CSS styling for a Student Dashboard

---

## 1. What Is Component Composition?

Component composition means building a larger interface by combining smaller components.

For example:

```text
App
│
├── DashboardHeader
│
├── StudentCard
│
└── StudentCard
```

Each component has a specific responsibility.

- `App` combines the components.
- `DashboardHeader` displays the dashboard heading.
- `StudentCard` displays student information.

---

## 2. DashboardHeader Component

The `DashboardHeader` component displays the dashboard title and subtitle.

```jsx
function DashboardHeader() {
    return (
        <header>
            <h1>Student Dashboard</h1>
            <p>Academic overview</p>
        </header>
    );
}
```

This component can be used inside another component:

```jsx
<DashboardHeader />
```

---

## 3. Reusable StudentCard Component

The `StudentCard` component receives student information through props.

```jsx
function StudentCard(props) {
    return (
        <article>
            <h2>{props.name}</h2>
            <p>ID: {props.id}</p>
            <p>Department: {props.department}</p>
        </article>
    );
}
```

The component does not need to know which student it is displaying.

It simply receives the information through props.

---

## 4. Reusing a Component

The same component can display different students.

```jsx
<StudentCard
    name="Mehedi"
    id={101}
    department="CSE"
/>

<StudentCard
    name="Rahim"
    id={102}
    department="EEE"
/>
```

The component definition stays the same, but the props change.

This avoids creating a separate component for every student.

---

## 5. Complete App.jsx Example

```jsx
import "./App.css";

function DashboardHeader() {
    return (
        <header>
            <h1>Student Dashboard</h1>
            <p>Academic overview</p>
        </header>
    );
}

function StudentCard(props) {
    return (
        <article>
            <h2>{props.name}</h2>
            <p>ID: {props.id}</p>
            <p>Department: {props.department}</p>
        </article>
    );
}

function App() {
    return (
        <div>
            <DashboardHeader />

            <StudentCard
                name="Mehedi"
                id={101}
                department="CSE"
            />

            <StudentCard
                name="Rahim"
                id={102}
                department="EEE"
            />
        </div>
    );
}

export default App;
```

---

## 6. Basic Styling

The `App.css` stylesheet provides basic layout and styling for the dashboard.

```css
#root {
    max-width: 900px;
    margin: 0 auto;
    padding: 32px 20px;
    font-family: Arial, sans-serif;
}

header {
    background: #172554;
    color: white;
    padding: 24px;
    border-radius: 12px;
    margin-bottom: 24px;
}

header h1 {
    margin-top: 0;
    margin-bottom: 8px;
}

header p {
    margin-bottom: 0;
    color: #dbeafe;
}

article {
    border: 1px solid #d1d5db;
    border-radius: 10px;
    padding: 20px;
    margin-bottom: 16px;
    background: white;
    color: #111827;
}

article h2 {
    margin-top: 0;
}
```

---

## 7. Component Tree

The application follows this structure:

```text
main.jsx
   │
   └── App
        │
        ├── DashboardHeader
        │
        ├── StudentCard
        │     └── Mehedi's information
        │
        └── StudentCard
              └── Rahim's information
```

`main.jsx` renders `App`, and `App` combines the smaller components into the dashboard.

---

## 8. Key Takeaways

- Component composition combines smaller components into a larger UI.
- Components can be used inside other components.
- A parent component can render multiple child components.
- Props allow a reusable component to display different data.
- A component definition describes the UI; using the component renders it in a particular location.
- Breaking an interface into smaller components makes code easier to understand and maintain.
- Each component should have a clear responsibility.

---

## Day 92 Summary

**Day:** 92

**Topic:** React Component Composition

**Project:** Student Dashboard

**Status:** Completed

**Next Topic:** React's `children` Prop