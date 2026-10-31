# Day 114 - React useEffect Basics

## Overview

Today I learned the fundamentals of the React `useEffect` Hook and how it helps manage side effects in functional components.

The main focus was understanding how React can synchronize external systems with component state.

## Concepts Covered

- Understanding side effects in React.
- Introduction to the `useEffect` Hook.
- Using `document.title` to update the browser tab title.
- Understanding the dependency array.
- Understanding when an effect executes.
- Difference between effects with and without dependency arrays.

## Dependency Array

### 1. Without a Dependency Array

```jsx
useEffect(() => {
  console.log("Effect executed");
});
```

Runs after every render.

### 2. Empty Dependency Array

```jsx
useEffect(() => {
  console.log("Effect executed");
}, []);
```

Runs after the initial mount. React Strict Mode may run an additional setup cycle in development.

### 3. With Dependencies

```jsx
useEffect(() => {
  console.log(count);
}, [count]);
```

Runs after the initial mount and whenever `count` changes.

## Practical Implementation

Built a counter application using:

- `useState()` to manage counter state.
- `useEffect()` to synchronize the browser tab title.
- `document.title` to update the browser title.
- `[count]` as the dependency array.

## Key Takeaways

- React components render UI using JSX.
- Side effects allow components to synchronize with external systems.
- `useEffect` runs after React commits an update.
- The dependency array controls when an effect runs again.
- `useEffect` is not necessary for values that can be calculated directly during rendering.

## Status

Completed