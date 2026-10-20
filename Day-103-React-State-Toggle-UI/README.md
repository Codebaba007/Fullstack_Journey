# Day 103 — React State: Toggle UI with useState

## Overview

Day 103 combines React state, event handling, and conditional rendering to create an interactive Student Dashboard.

The application allows users to show and hide a student profile using a button. The button label also changes according to the current state.

## Learning Objectives

- Use the `useState` Hook to manage Boolean state.
- Understand `true` and `false` as visibility values.
- Toggle state using an updater function.
- Use the logical NOT operator (`!`).
- Connect state updates to click event handlers.
- Render JSX conditionally using the `&&` operator.
- Use a ternary expression to change a button label.
- Understand how one state variable can control multiple UI elements.

## Project Setup

This project uses React and Vite.

```bash
npm create vite@latest . -- --template react
npm install
npm run dev
```

## Project Structure

```text
Day-103-React-State-Toggle-UI/
├── public/
├── src/
│   ├── assets/
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   └── main.jsx
├── index.html
├── package.json
├── package-lock.json
└── README.md
```

## Main Concepts

### 1. Boolean State

Boolean state stores either `true` or `false`.

```jsx
const [isVisible, setIsVisible] = useState(false);
```

The initial value is `false`, so the student profile starts hidden.

- `isVisible` stores the current visibility state.
- `setIsVisible` requests a state update.
- `useState(false)` initializes the state.

### 2. Toggling State

```jsx
setIsVisible(previousValue => !previousValue);
```

The logical NOT operator reverses a Boolean value.

- `!true` becomes `false`.
- `!false` becomes `true`.

The updater function receives the previous state and returns the opposite value.

### 3. Conditional Rendering with &&

```jsx
{isVisible && (
    <section className="profile-card">
        <h2>Mehedi</h2>
        <p>Department: Computer Science & Engineering</p>
        <p>CGPA: 3.75</p>
        <p>Status: Active</p>
    </section>
)}
```

The profile section is rendered only when `isVisible` is true.

When the value is false, the expression does not render the profile section.

### 4. Conditional Button Labels

```jsx
{isVisible ? "Hide Profile" : "Show Profile"}
```

This ternary expression displays the appropriate button label:

- When `isVisible` is true, the label is `Hide Profile`.
- When `isVisible` is false, the label is `Show Profile`.

### 5. Event Handling

```jsx
<button onClick={handleToggle}>
    {isVisible ? "Hide Profile" : "Show Profile"}
</button>
```

The click event invokes the `handleToggle` function, which updates the state.

React then renders the interface using the updated state value.

## Implementation

### App.jsx

```jsx
import { useState } from "react";
import "./App.css";

function App() {
    const [isVisible, setIsVisible] = useState(false);

    function handleToggle() {
        setIsVisible(previousValue => !previousValue);
    }

    return (
        <main className="dashboard">
            <h1>Student Dashboard</h1>

            <p>Click the button to show or hide the student profile.</p>

            <button onClick={handleToggle}>
                {isVisible ? "Hide Profile" : "Show Profile"}
            </button>

            {isVisible && (
                <section className="profile-card">
                    <h2>Mehedi</h2>
                    <p>Department: Computer Science & Engineering</p>
                    <p>CGPA: 3.75</p>
                    <p>Status: Active</p>
                </section>
            )}
        </main>
    );
}

export default App;
```

## Styling

### App.css

```css
.dashboard {
    max-width: 600px;
    margin: 70px auto;
    padding: 32px;
    text-align: center;
    background-color: #f4f7fb;
    border-radius: 12px;
}

.dashboard h1 {
    margin-bottom: 12px;
}

.dashboard > p {
    margin-bottom: 24px;
    color: #475569;
}

.dashboard button {
    padding: 12px 20px;
    border: none;
    border-radius: 8px;
    background-color: #2563eb;
    color: white;
    font-size: 16px;
    cursor: pointer;
}

.dashboard button:hover {
    background-color: #1d4ed8;
}

.profile-card {
    margin-top: 24px;
    padding: 24px;
    text-align: left;
    background-color: white;
    border: 1px solid #dbe3ef;
    border-radius: 10px;
}

.profile-card h2 {
    margin-bottom: 16px;
}

.profile-card p {
    margin: 10px 0;
    color: #334155;
}
```

## Testing

1. Start the development server with `npm run dev`.
2. Confirm that the student profile is initially hidden.
3. Click Show Profile and verify that the student details appear.
4. Confirm that the button label changes to Hide Profile.
5. Click Hide Profile and verify that the details disappear.
6. Repeat the process to confirm that the toggle works consistently.

## Key Takeaways

- Boolean state is useful for controlling visibility.
- The logical NOT operator reverses a Boolean value.
- Updater functions can calculate the next state from the previous state.
- Conditional rendering controls which JSX elements appear