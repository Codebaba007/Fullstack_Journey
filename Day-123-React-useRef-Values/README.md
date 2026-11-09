# Day 123 - React useState vs useRef

## Overview

This project demonstrates the differences between React's `useState` and `useRef` hooks.

The application contains two counters:

- A state counter that updates the UI when its value changes.
- A ref counter that updates its value without triggering a re-render.

The ref counter's updated value can be observed through the browser console.

## Concepts Learned

- Importing `useState` and `useRef`
- Understanding the difference between state and refs
- Creating persistent reference objects
- Accessing and modifying the `.current` property
- Understanding React re-renders
- Using the browser console to inspect ref values
- Understanding when to use state versus refs

## Project Structure

```text
Day-123-React-useRef-Values/
├── src/
│   ├── App.jsx
│   ├── App.css
│   └── main.jsx
├── public/
├── index.html
└── package.json
```

## Implementation

### 1. State Counter

```jsx
const [stateCount, setStateCount] = useState(0);

function handleStateClick() {
  setStateCount(stateCount + 1);
}
```

Updating state triggers a re-render, allowing the updated counter to appear in the UI.

### 2. Ref Counter

```jsx
const refCount = useRef(0);

function handleRefClick() {
  refCount.current = refCount.current + 1;

  console.log("Ref Count:", refCount.current);
}
```

The ref value is updated through its `.current` property without triggering a re-render.

## Key Differences

| useState | useRef |
|---|---|
| Stores state | Stores a persistent reference |
| Updating it triggers a re-render | Updating `.current` does not trigger a re-render |
| Used for UI-related data | Used for DOM access and values that don't need to update the UI |

## Key Takeaways

- `useRef()` returns an object containing a `current` property.
- A ref retains its value between renders.
- Changing `.current` does not trigger a re-render.
- State updates trigger React to render the component again.
- Use `useState` when a value affects the UI.
- Use `useRef` when a value needs to persist without triggering a re-render.

## Technologies Used

- React 19
- Vite
- JavaScript
- CSS

## Status

Completed - Day 123