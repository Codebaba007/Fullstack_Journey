# Day 117 - React useEffect Cleanup Functions

## Overview

Today I learned how to use cleanup functions in React's `useEffect` Hook.

The main focus was understanding how to clean up side effects, particularly timers, when an effect is no longer needed.

## Concepts Covered

- Understanding cleanup functions.
- Returning a function from `useEffect`.
- Understanding `setInterval()`.
- Understanding `clearInterval()`.
- Storing timer IDs in variables.
- Cleaning up effects before they run again.
- Cleaning up effects when components unmount.
- Understanding React Strict Mode's additional development checks.

## Practical Implementation

Built a React Timer application featuring:

- A Timer component.
- State management using `useState`.
- Automatic counter updates every second.
- Timer creation using `setInterval()`.
- Timer cleanup using `clearInterval()`.
- Show and Hide Timer functionality.
- Console messages to observe effect setup and cleanup.

## Important Code Example

```jsx
useEffect(() => {
  const timer = setInterval(() => {
    setSeconds(previousSeconds => previousSeconds + 1);
  }, 1000);

  return () => {
    clearInterval(timer);
  };
}, []);
```

## Key Takeaways

- Cleanup functions are returned from inside `useEffect`.
- `clearInterval()` stops a repeating timer.
- React runs the previous cleanup before running an effect again when its dependencies change.
- React runs cleanup when a component unmounts.
- Cleanup prevents unnecessary background tasks and resource leaks.
- React Strict Mode performs additional effect checks in development.

## Status

Completed