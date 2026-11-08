# Day 122 - React useRef Basics

## Overview

This project introduces the React `useRef` hook and demonstrates how to access and interact with DOM elements directly.

The application contains an input field and a button. Clicking the button automatically focuses the input field.

## Concepts Learned

- Importing `useRef` from React
- Creating a reference using `useRef(null)`
- Understanding the `.current` property
- Connecting refs to DOM elements
- Accessing DOM elements through refs
- Using the JavaScript `.focus()` method
- Handling button clicks to trigger DOM interactions

## Project Structure

```text
Day-122-React-useRef-Basics/
├── src/
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   └── main.jsx
├── public/
├── index.html
└── package.json
```

## Implementation

### 1. Creating a Ref

```jsx
const inputRef = useRef(null);
```

Creates a reference object with an initially null `current` property.

### 2. Connecting the Ref

```jsx
<input
  ref={inputRef}
  type="text"
  placeholder="Enter your username"
/>
```

React assigns the actual input DOM element to `inputRef.current`.

### 3. Accessing the DOM Element

```jsx
function handleFocus() {
  inputRef.current.focus();
}
```

The `.focus()` method moves keyboard focus to the input field.

### 4. Button Event

```jsx
<button onClick={handleFocus}>
  Focus Input
</button>
```

Clicking the button executes the `handleFocus` function.

## Key Takeaways

- `useRef()` returns an object containing a `current` property.
- React can use refs to provide access to DOM elements.
- `ref={inputRef}` connects a reference to a DOM element.
- `inputRef.current` accesses the referenced element.
- Changing a ref's `.current` value does not trigger a React re-render.
- Unlike state, refs are useful for values that need to persist without affecting the rendered UI.

## Technologies Used

- React 19
- Vite
- JavaScript
- CSS

## Status

Completed - Day 122