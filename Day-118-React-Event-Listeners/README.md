# Day 118 - React useEffect with Event Listeners

## Overview

Today I learned how to integrate JavaScript browser event listeners with React's `useEffect` Hook.

The main focus was detecting browser window resize events, updating React state, and properly cleaning up event listeners.

## Concepts Covered

- Understanding browser event listeners.
- Using `window.addEventListener()`.
- Listening for the browser `resize` event.
- Managing event listeners inside `useEffect`.
- Updating React state when browser events occur.
- Using `window.innerWidth` and `window.innerHeight`.
- Removing event listeners using `removeEventListener()`.
- Understanding why the same function reference is required for adding and removing listeners.
- Understanding event listener cleanup.

## Practical Implementation

Built a Window Size Detector application featuring:

- React state for browser width and height.
- Automatic detection of browser resize events.
- Dynamic UI updates when window dimensions change.
- Event listener registration inside `useEffect`.
- Cleanup using `removeEventListener()`.
- Styling using CSS.

## Important Code Example

```jsx
useEffect(() => {
  function handleResize() {
    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  }

  window.addEventListener("resize", handleResize);

  return () => {
    window.removeEventListener("resize", handleResize);
  };
}, []);
```

## Key Takeaways

- Browser event listeners can be managed inside `useEffect`.
- `addEventListener()` registers an event listener.
- `removeEventListener()` removes a registered listener.
- The same function reference must be used when adding and removing a listener.
- Updating React state causes the component to render again.
- An empty dependency array prevents the effect from registering another listener on ordinary re-renders.
- Cleanup prevents unnecessary listeners from remaining active.

## Status

Completed