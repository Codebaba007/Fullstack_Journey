# Day 104 — React Controlled Inputs

## Overview

Day 104 introduces controlled inputs in React. The project is a Student Search Dashboard where users can enter a name and see the text update immediately in a live preview.

It also includes a character counter that displays the number of characters entered.

## Learning Objectives

- Manage input text using React's `useState` Hook.
- Understand controlled inputs.
- Use the `value` prop to connect an input to state.
- Use the `onChange` event to update state.
- Understand `event.target.value`.
- Display state values dynamically in JSX.
- Use the string `.length` property to count characters.
- Calculate derived values without creating unnecessary state variables.

## Project Setup

This project uses React and Vite.

```bash
npm create vite@latest . -- --template react
npm install
npm run dev
```

## Project Structure

```text
Day-104-React-Controlled-Inputs/
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

### 1. State for Input Text

```jsx
const [name, setName] = useState("");
```

- `name` stores the current text.
- `setName` requests a state update.
- `useState("")` initializes the text as an empty string.

### 2. Controlled Inputs

A controlled input receives its displayed value from React state.

```jsx
<input
    value={name}
    onChange={handleNameChange}
/>
```

The `value` prop reflects the current state in the input. The `onChange` handler updates that state when the user types.

### 3. Handling Input Changes

```jsx
function handleNameChange(event) {
    setName(event.target.value);
}
```

- `event` represents the input event.
- `event.target` refers to the input element.
- `event.target.value` contains the current text entered by the user.
- `setName` updates the state with that text.

### 4. Live Preview

```jsx
<p>
    Student name: {name || "No name entered yet"}
</p>
```

The preview displays the current name. If the input is empty, the fallback message appears.

### 5. Character Counter

```jsx
<p className="character-count">
    Characters entered: {name.length}
</p>
```

The `.length` property returns the length of the string.

Examples:

- An empty string has a length of `0`.
- `"Hello"` has a length of `5`.
- `"Mehedi"` has a length of `6`.
- `"React Developer"` has a length of `15`, including the space.

The character count is derived from the existing `name` state, so a separate state variable is unnecessary.

## Implementation

### App.jsx

```jsx
import { useState } from "react";
import "./App.css";

function App() {
    const [name, setName] = useState("");

    function handleNameChange(event) {
        setName(event.target.value);
    }

    return (
        <main className="dashboard">
            <h1>Student Search Dashboard</h1>

            <label htmlFor="student-name">
                Enter a student name
            </label>

            <input
                id="student-name"
                type="text"
                placeholder="Type your name..."
                value={name}
                onChange={handleNameChange}
            />

            <section className="result-card">
                <h2>Live Preview</h2>

                <p>
                    Student name: {name || "No name entered yet"}
                </p>

                <p className="character-count">
                    Characters entered: {name.length}
                </p>
            </section>
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
    background-color: #f4f7fb;
    border-radius: 12px;
}

.dashboard h1 {
    text-align: center;
    margin-bottom: 28px;
}

.dashboard label {
    display: block;
    margin-bottom: 8px;
    font-weight: 600;
}

.dashboard input {
    width: 100%;
    box-sizing: border-box;
    padding: 12px;
    border: 1px solid #cbd5e1;
    border-radius: 8px;
    font-size: 16px;
}

.dashboard input:focus {
    outline: 2px solid #2563eb;
    border-color: #2563eb;
}

.result-card {
    margin-top: 24px;
    padding: 20px;
    background-color: white;
    border: 1px solid #dbe3ef;
    border-radius: 10px;
}

.result-card h2 {
    margin-bottom: 12px;
}

.result-card p {
    overflow-wrap: anywhere;
}

.character-count {
    margin-top: 12px;
    font-size: 14px;
    color: #64748b;
}
```

## Testing

1. Start the development server using `npm run dev`.
2. Confirm that the input starts empty.
3. Verify that the initial preview says "No name entered yet".
4. Type a name and confirm that the preview updates immediately.
5. Verify that the character counter increases as you type.
6. Delete some characters and confirm that the count decreases.
7. Clear the input and verify that the counter returns to zero.

## Key Takeaways

- Controlled inputs connect form fields to React state.
- The `value` prop reflects the state in the input.
- The `onChange` event captures user input.
- `event.target.value` retrieves the current input text.
- React updates the preview when the state changes.
- The `.length` property calculates the number of characters.
- Derived values can be calculated directly from existing state.

## Next Step

Continue learning React forms and state management, building on controlled inputs and event handling.