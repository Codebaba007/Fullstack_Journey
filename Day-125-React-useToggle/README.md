# Day 125 - React useToggle Custom Hook

## Overview

This project demonstrates how to create a reusable React Custom Hook called `useToggle`.

The hook manages Boolean state and provides a function to switch between `true` and `false`.

The application demonstrates two independent toggle features:

- Show / Hide Information
- Enable / Disable Feature

## Concepts Learned

- Creating reusable Custom Hooks
- Using `useState` inside a Custom Hook
- Custom Hook parameters and default values
- Functional state updates
- Returning arrays from Custom Hooks
- Array destructuring
- Independent state across Custom Hook instances
- Conditional rendering
- Ternary operators
- Reusing stateful logic across components

## Project Structure

```text
Day-125-React-useToggle/
├── src/
│   ├── hooks/
│   │   └── useToggle.js
│   ├── App.jsx
│   ├── App.css
│   └── main.jsx
├── public/
├── index.html
└── package.json
```

## Implementation

### 1. Creating the Custom Hook

File: `src/hooks/useToggle.js`

```javascript
import { useState } from "react";

function useToggle(initialValue = false) {
  const [value, setValue] = useState(initialValue);

  function toggle() {
    setValue(previousValue => !previousValue);
  }

  return [value, toggle];
}

export default useToggle;
```

### 2. Using the Custom Hook

File: `src/App.jsx`

```jsx
import "./App.css";
import useToggle from "./hooks/useToggle";

function App() {
  const [isVisible, toggleVisibility] = useToggle(false);

  const [isEnabled, toggleEnabled] = useToggle(true);

  return (
    <div className="container">
      <h1>React useToggle</h1>

      <div className="card">
        <h2>Show / Hide Information</h2>

        <button onClick={toggleVisibility}>
          {isVisible ? "Hide Information" : "Show Information"}
        </button>

        {isVisible && (
          <p>This information is now visible!</p>
        )}
      </div>

      <div className="card">
        <h2>Enable / Disable Feature</h2>

        <p>
          Status: {isEnabled ? "Enabled" : "Disabled"}
        </p>

        <button onClick={toggleEnabled}>
          Toggle Status
        </button>
      </div>
    </div>
  );
}

export default App;
```

## How It Works

1. `useToggle()` accepts an optional initial Boolean value.
2. `useState()` stores the current value.
3. The `toggle()` function uses a functional state updater to reverse the previous value.
4. The hook returns an array containing the current value and toggle function.
5. `App.jsx` calls the Custom Hook twice.
6. Each call maintains independent state.
7. Conditional rendering and ternary operators update the interface.

## Key Takeaways

- Custom Hooks allow stateful logic to be reused.
- Custom Hook names must start with `use`.
- A Custom Hook can accept parameters.
- Default parameters provide fallback values.
- Functional state updates use the previous state.
- Array destructuring extracts returned values.
- Separate Custom Hook calls maintain independent state.
- Custom Hooks reuse logic, not automatically shared state.

## Technologies Used

- React 19
- Vite
- JavaScript
- CSS

## Status

Completed - Day 125