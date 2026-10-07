# Day 90 — React Fundamentals: Components & JSX

## Overview

Today, I started the React phase of my Full-Stack Development journey.

The main focus was understanding the foundation of React rather than simply copying code.

Topics covered:

- React project setup with Vite
- React components
- `App.jsx`
- `main.jsx`
- JSX
- JSX vs HTML
- JavaScript variables inside JSX
- JSX expressions using `{ }`
- Returning JSX from a component
- Building a simple Student Profile

---

## 1. React Project Setup

The project was created using Vite with React and JavaScript.

The project structure includes:

```text
Day-90-React-Basics/
│
├── node_modules/
├── public/
├── src/
│   ├── assets/
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   └── main.jsx
│
├── index.html
├── package.json
└── vite.config.js
```

The main files studied today were:

```text
src/
├── App.jsx
└── main.jsx
```

The development server was started with:

```bash
npm run dev
```

---

# 2. What Is React?

React is a JavaScript library for building user interfaces.

Instead of manually creating and modifying DOM elements with JavaScript, React allows us to describe the UI using components and JSX.

The basic idea is:

```text
React
  ↓
Components
  ↓
JSX
  ↓
User Interface
```

---

# 3. React Components

A React component is essentially a JavaScript function that returns UI.

Example:

```jsx
function App() {
    return <h1>Hello React</h1>;
}

export default App;
```

The `App` function is a React component.

The component returns JSX:

```jsx
<h1>Hello React</h1>
```

---

# 4. App.jsx

`App.jsx` contains the `App` component.

Example:

```jsx
function App() {
    return <h1>Hello React</h1>;
}

export default App;
```

The component can contain normal JavaScript as well as JSX.

---

# 5. main.jsx

`main.jsx` is responsible for rendering the React application.

The important part is:

```jsx
<App />
```

This uses the `App` component.

The basic flow is:

```text
main.jsx
   │
   │ renders
   ↓
<App />
   │
   ↓
App.jsx
   │
   ↓
App component
   │
   ↓
JSX
   │
   ↓
Browser
```

---

# 6. JSX

JSX is a syntax used by React that allows UI markup to be written inside JavaScript.

Example:

```jsx
function App() {
    return <h1>Hello React</h1>;
}
```

The following:

```jsx
<h1>Hello React</h1>
```

looks like HTML, but it is JSX being returned from a JavaScript function.

JSX is not simply HTML. It is JavaScript syntax that allows us to describe UI in a markup-like form.

---

# 7. JavaScript Variables in JSX

Normal JavaScript variables can be created inside a component.

Example:

```jsx
function App() {
    const name = "Mehedi";

    return <h1>Hello {name}</h1>;
}
```

The variable:

```js
const name = "Mehedi";
```

is JavaScript.

The expression:

```jsx
{name}
```

allows that JavaScript value to be used inside JSX.

The browser displays:

```text
Hello Mehedi
```

---

# 8. JSX Expressions

Curly braces `{ }` are used to evaluate JavaScript expressions inside JSX.

For example:

```jsx
const age = 23;

return <p>I am {age} years old.</p>;
```

The `{age}` tells JSX to evaluate the JavaScript variable instead of treating `age` as plain text.

Without the braces:

```jsx
<p>I am age years old.</p>
```

The word `age` would be displayed as text.

With the braces:

```jsx
<p>I am {age} years old.</p>
```

The value stored in `age` is displayed.

---

# 9. Returning JSX

A component returns its UI using `return`.

Example:

```jsx
function App() {
    return (
        <div>
            <h1>Hello</h1>
            <p>Welcome to React.</p>
        </div>
    );
}
```

The JSX is placed inside one overall parent structure.

Here, the parent is:

```jsx
<div>
```

and the `h1` and `p` elements are inside it.

---

# 10. Student Profile Practice

A Student Profile was created to practice using JavaScript variables inside JSX.

```jsx
function App() {
    const studentName = "Mehedi";
    const studentId = 101;
    const department = "Computer Science & Engineering";
    const cgpa = 3.75;

    return (
        <div>
            <h1>Student Profile</h1>

            <p>Name: {studentName}</p>
            <p>ID: {studentId}</p>
            <p>Department: {department}</p>
            <p>CGPA: {cgpa}</p>
        </div>
    );
}

export default App;
```

This example combines:

- JavaScript variables
- React components
- JSX
- JSX expressions
- HTML-like elements

---

# 11. Data and UI

The Student Profile demonstrated an important React idea:

```text
JavaScript data
      ↓
     { }
      ↓
    JSX
      ↓
     UI
```

For example:

```jsx
const studentName = "Mehedi";
```

is displayed using:

```jsx
<p>Name: {studentName}</p>
```

Changing the variable changes the displayed value.

---

# Key Takeaways

- React is a JavaScript library for building user interfaces.
- React applications are built from components.
- A React component can be a JavaScript function that returns JSX.
- `App.jsx` contains the `App` component.
- `main.jsx` renders the `App` component.
- JSX looks similar to HTML but is used inside JavaScript.
- JavaScript expressions can be inserted into JSX using `{ }`.
- Components return the UI they want React to render.
- JavaScript data can be displayed inside JSX.

---

# Day 90 Mental Model

```text
JavaScript
    │
    ├── Variables
    │
    └── Functions
           │
           ↓
       React Component
           │
           ↓
          JSX
           │
           ↓
       User Interface
```

---

# Day 90 Completion

**Day:** 90

**Topic:** React Fundamentals — Components & JSX

**Status:** Completed

**React Phase:** Started

**Next:** React Props