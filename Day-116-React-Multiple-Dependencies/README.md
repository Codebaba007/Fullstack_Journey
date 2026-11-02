# Day 116 - React Multiple Dependencies in useEffect

## Overview

Today I learned how to use multiple state variables as dependencies in React's `useEffect` Hook.

I practiced synchronizing multiple pieces of React state with an external browser feature using `document.title`.

## Concepts Covered

- Using multiple `useState` variables.
- Using multiple dependencies in `useEffect`.
- Understanding how React checks effect dependencies.
- Running an effect when either dependency changes.
- Understanding why all reactive values used inside an effect should be included in its dependency array.
- Observing effect execution using `console.log()`.

## Practical Implementation

Built a Student Dashboard application featuring:

- Student name state, initially set to Alex.
- Department state, initially set to CSE.
- Button to change the student name to Mehedi.
- Button to change the department to EEE.
- Dynamic browser tab title using both state variables.
- Console logging to observe effect execution.

## Important Code Example

```jsx
useEffect(() => {
  document.title = `${studentName} - ${department} | Student Dashboard`;

  console.log("Dashboard updated:", studentName, department);
}, [studentName, department]);
```

## Key Takeaways

- An effect can have multiple dependencies.
- The effect runs after the initial mount.
- Changing either dependency causes the effect to run again.
- Both dependencies do not need to change simultaneously.
- Missing dependencies can cause an effect to use outdated values.
- Dependency arrays help synchronize effects with reactive values.

## Status

Completed