# Day 115 - React useEffect with State Dependencies

## Overview

Today I learned how React's `useEffect` Hook responds to changes in state through its dependency array.

I practiced synchronizing React state with an external browser feature using `document.title`.

## Concepts Covered

- Using `useState` to manage student information.
- Using `useEffect` to synchronize external systems.
- Understanding state dependencies.
- Using `[studentName]` as an effect dependency.
- Understanding when an effect executes.
- Understanding the difference between component rendering and effect execution.
- Using `console.log()` to observe effect execution.

## Practical Implementation

Built a Student Dashboard application featuring:

- Student name displayed on the webpage.
- Button to change the student name to John.
- Button to change the student name back to Alex.
- Browser tab title dynamically updated using `document.title`.
- Console message whenever the effect executes.

## Key Takeaways

- An effect runs after the initial mount.
- An effect runs again when one of its dependencies changes.
- Changing unrelated state does not necessarily rerun an effect.
- React can render a component without rerunning every effect.
- Dependency arrays help control when effects execute.

## Important Code Example

```jsx
useEffect(() => {
  document.title = `Dashboard - ${studentName}`;

  console.log("Student name changed:", studentName);
}, [studentName]);
```

## Status

Completed