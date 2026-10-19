# Day 102 — React State Updates

## Overview

Day 102 builds on the `useState` Hook introduced in Day 101. This lesson focuses on updating state using both direct values and updater functions.

The project is an interactive counter with controls to increase, decrease, increase by three, and reset the count.

## Learning Objectives

- Review React state using `useState`.
- Understand direct state updates.
- Understand updater functions.
- Use the previous state value to calculate the next state.
- Understand why multiple direct updates can produce unexpected results.
- Use updater functions for multiple queued state updates.
- Create event handlers for different counter operations.

## Project Setup

This project uses React and Vite.

```bash
npm create vite@latest . -- --template react
npm install
npm run dev
```

## Project Structure

```text
Day-102-React-State-Updates/
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

### 1. Direct State Updates

A direct state update calculates and passes the next value to the setter.

```jsx
setCount(count + 1);
```

If `count` is `4`, this requests an update to `5`.

### 2. Updater Functions

An updater function receives the previous state value and calculates the next value.

```jsx
setCount(previousCount => previousCount + 1);
```

The parameter name `previousCount` is not fixed. Other names, such as `oldCount`, `prev`, or `n`, work equally well.

### 3. Multiple State Updates

Multiple direct updates that read the same render's state value may request the same result.

```jsx
setCount(count + 1);
setCount(count + 1);
setCount(count + 1);
```

When the next value depends on the previous state, updater functions are useful because React processes the queued updater functions in sequence.

```jsx
setCount(previousCount => previousCount + 1);
setCount(previousCount => previousCount + 1);
setCount(previousCount => previousCount + 1);
```

Starting from `4`, these updates produce a final value of `7`.

### 4. Resetting State

A reset operation sets the state to a specific value.

```jsx
setCount(0);
```

Unlike an increment or decrement, this update does not need to calculate a value from the previous state.

## Implementation

### App.jsx

```jsx
import { useState } from "react";
import "./App.css";

function App() {
    const [count, setCount] = useState(0);

    function handleIncrease() {
        setCount(previousCount => previousCount + 1);
    }

    function handleDecrease() {
        setCount(previousCount => previousCount - 1);
    }

    function handleTripleIncrease() {
        setCount(previousCount => previousCount + 1);
        setCount(previousCount => previousCount + 1);
        setCount(previousCount => previousCount + 1);
    }

    function handleReset() {
        setCount(0);
    }

    return (
        <main className="counter">
            <h1>State Update Practice</h1>

            <p className="count-display">{count}</p>

            <div className="button-group">
                <button onClick={handleDecrease}>-1</button>
                <button onClick={handleIncrease}>+1</button>
                <button onClick={handleTripleIncrease}>+3</button>
                <button onClick={handleReset}>Reset</button>
            </div>
        </main>
    );
}

export default App;
```

## Styling

### App.css

```css
.counter {
    max-width: 480px;
    margin: 80px auto;
    padding: 32px;
    text-align: center;
    background-color: #f4f7fb;
    border-radius: 12px;
}

.counter h1 {
    margin-bottom: 24px;
}

.count-display {
    font-size: 56px;
    font-weight: bold;
    margin: 24px 0;
}

.button-group {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 10px;
}

.button-group button {
    padding: 12px 18px;
    border: none;
    border-radius: 8px;
    background-color: #2563eb;
    color: white;
    font-size: 16px;
    cursor: pointer;
}

.button-group button:hover {
    background-color: #1d4ed8;
}
```

## Testing

1. Start the development server using `npm run dev`.
2. Confirm that the initial count is zero.
3. Click `+1` three times and verify that the count becomes three.
4. Click `+3` and verify that the count increases by three.
5. Click `-1` and verify that the count decreases by one.
6. Click Reset and verify that the count returns to zero.
7. Test decreasing below zero.

## Key Takeaways

- State setters can receive a direct value or an updater function.
- Updater functions calculate the next state from the previous state.
- The updater parameter name is chosen by the developer.
- Multiple queued updater functions are processed in sequence.
- Direct values are useful when setting a known value, such as zero during a reset.
- State updates allow React to render the interface with the updated value.

## Next Step

Continue building interactive React applications by learning additional state patterns and how to manage user interactions.