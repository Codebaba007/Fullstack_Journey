# Day 124 - React Custom Hooks

## Overview

This project introduces React Custom Hooks by building a reusable counter hook.

The application uses a custom hook called `useCounter` to manage counter state and provide three operations:

- Increase
- Decrease
- Reset

The counter logic is separated from the UI, making it reusable across React components.

## Concepts Learned

- Understanding React Custom Hooks
- Creating custom hooks using JavaScript functions
- Custom Hook naming conventions
- Using `useState` inside a Custom Hook
- Returning objects from functions
- Object destructuring
- Separating application logic from UI components
- Reusing stateful logic across components

## Project Structure

```text
Day-124-React-Custom-Hooks/
├── src/
│   ├── hooks/
│   │   └── useCounter.js
│   ├── App.jsx
│   ├── App.css
│   └── main.jsx
├── public/
├── index.html
└── package.json
```

## Implementation

### 1. Creating the Custom Hook

File: `src/hooks/useCounter.js`

```javascript
import { useState } from "react";

function useCounter() {
  const [count, setCount] = useState(0);

  function increase() {
    setCount(count + 1);
  }

  function decrease() {
    setCount(count - 1);
  }

  function reset() {
    setCount(0);
  }

  return {
    count,
    increase,
    decrease,
    reset
  };
}

export default useCounter;
```

### 2. Using the Custom Hook

File: `src/App.jsx`

```jsx
import "./App.css";
import useCounter from "./hooks/useCounter";

function App() {
  const {
    count,
    increase,
    decrease,
    reset
  } = useCounter();

  return (
    <div className="container">
      <h1>React Custom Hooks</h1>

      <div className="counter">
        <h2>{count}</h2>

        <button onClick={increase}>Increase</button>
        <button onClick={decrease}>Decrease</button>
        <button onClick={reset}>Reset</button>
      </div>
    </div>
  );
}

export default App;
```

## How It Works

1. `useCounter()` creates a counter state using `useState`.
2. The `increase`, `decrease`, and `reset` functions update that state.
3. The hook returns the state and functions in an object.
4. `App.jsx` imports and calls the Custom Hook.
5. Object destructuring extracts the returned properties.
6. Button events execute the corresponding functions.
7. React updates the UI when the counter state changes.

## Important Takeaways

- Custom Hooks allow stateful logic to be reused between components.
- Custom Hook names must start with `use`.
- Custom Hooks can use built-in React Hooks.
- A Custom Hook can return values, objects, or functions.
- Calling the same Custom Hook in different components creates independent state for each component.
- Custom Hooks share logic, not automatically the same state.

## Technologies Used

- React 19
- Vite
- JavaScript
- CSS

## Status

Completed - Day 124