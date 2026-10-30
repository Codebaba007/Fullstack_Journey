# Day 113 - React Previous State and Updater Functions

## Overview

Today I practiced managing React state using previous state and functional updater functions.

The main focus was understanding the difference between direct state updates and functional state updates.

## Concepts Covered

- Using `useState()` to manage counter state.
- Understanding direct state updates.
- Understanding functional updater functions.
- Using previous state to calculate the next state.
- Understanding how React processes multiple state updates.
- Updating state multiple times using functional updater functions.

## Key Difference

### Direct State Update

```jsx
setCount(count + 1);
```

Uses the state value from the current render.

### Functional State Update

```jsx
setCount(previousCount => previousCount + 1);
```

Uses the previous state value to calculate the next state.

## Practical Implementation

Built a counter application with the following functionality:

- Increase count by 1.
- Increase count by 3 using multiple functional updates.
- Decrease count by 1.
- Reset count to 0.
- Increase count by 5 using a functional updater.

## Key Takeaways

- Functional updates are useful when the next state depends on the previous state.
- Multiple direct updates can use the same state value from the current render.
- Functional updater functions allow React to process updates sequentially.
- State should be updated using the appropriate pattern depending on the situation.

## Status

Completed