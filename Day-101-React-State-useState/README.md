# Day 101 — React State with useState

## Overview

Day 101 introduces React state using the `useState` Hook. The goal is to understand how React stores changing information and updates the user interface when state changes.

The project is a simple interactive counter that allows users to increase and decrease a displayed number.

## Learning Objectives

- Understand what state means in React.
- Understand why ordinary local variables are insufficient for interactive UI updates.
- Import and use the `useState` Hook.
- Understand state variables and state setter functions.
- Display state values in JSX.
- Update state through button click events.
- Understand how state updates trigger React re-renders.
- Connect event handling from Day 100 with state management.

## Project Setup

This project was created using Vite and React.

```bash
npm create vite@latest . -- --template react
npm install
npm run dev
```

## Project Structure

```text
Day-101-React-State-useState/
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

### 1. What Is State?

State is information that a React component remembers between renders.

Examples of state include:

- A counter value.
- Whether a menu is open.
- Text entered into an input.
- Whether a user has selected an option.

When state changes, React can render the component again using the updated value.

### 2. The useState Hook

React provides the `useState` Hook to create and manage state.

```jsx
const [count, setCount] = useState(0);
```

This declaration contains three important parts:

- `useState(0)` initializes the state with a value of zero.
- `count` represents the current state value.
- `setCount` is the function used to request a state update.

The square brackets use JavaScript array destructuring to give names to the values returned by `useState`.

### 3. Displaying State in JSX

```jsx
<p>Current count: {count}</p>
```

Curly braces allow JavaScript expressions to be evaluated inside JSX. React displays the current value of `count` in the paragraph.

### 4. Updating State

```jsx
<button onClick={() => setCount(count + 1)}>
    Increase
</button>
```

When the button is clicked, the event handler requests that the count increase by one.

The arrow function ensures the update runs when the button is clicked rather than immediately during rendering.

### 5. State and Re-rendering

Updating state tells React to render the component again with the new state value.

An ordinary local variable changing does not, by itself, trigger a React re-render.

This is why state is essential for interactive interfaces.

## Implementation

### App.jsx

```jsx
import { useState } from "react";
import "./App.css";

function App() {
    const [count, setCount] = useState(0);

    return (
        <main className="counter">
            <h1>React Counter</h1>

            <p>Current count: {count}</p>

            <button onClick={() => setCount(count + 1)}>
                Increase
            </button>

            <button onClick={() => setCount(count - 1)}>
                Decrease
            </button>
        </main>
    );
}

export default App;
```

## Styling

### App.css

```css
.counter {
    max-width: 400px;
    margin: 80px auto;
    padding: 32px;
    text-align: center;
    background-color: #f4f7fb;
    border-radius: 12px;
}

.counter h1 {
    margin-bottom: 20px;
}

.counter p {
    font-size: 24px;
    margin-bottom: 24px;
}

.counter button {
    padding: 12px 24px;
    margin: 4px;
    border: none;
    border-radius: 8px;
    background-color: #2563eb;
    color: white;
    font-size: 16px;
    cursor: pointer;
}

.counter button:hover {
    background-color: #1d4ed8;
}
```

## Testing

1. Start the development server with `npm run dev`.
2. Open the local URL provided by Vite.
3. Confirm the initial counter value is zero.
4. Click Increase and verify the displayed value increases.
5. Click Decrease and verify the displayed value decreases.
6. Confirm the UI updates without manually refreshing the page.

## Key Takeaways

- `useState` creates state with an initial value.
- The state variable provides the current value.
- The setter function requests a state update.
- JSX can display state values using curly braces.
- Event handlers can update state in response to user interactions.
- State updates allow React to render the UI with new values.

## Next Step

Continue learning React state and interactive UI behavior, building on the event-handling concepts from Day 100.