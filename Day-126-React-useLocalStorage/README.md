# Day 126 - React useLocalStorage Custom Hook

## Overview

This project demonstrates how to create a reusable React Custom Hook called `useLocalStorage`.

The hook synchronizes React state with the browser's Local Storage, allowing data to persist even after refreshing the page.

The application allows users to:

- Enter their name.
- Save their name automatically.
- Retrieve the saved name after refreshing.
- Clear the saved name.

## Concepts Learned

- Creating reusable Custom Hooks
- Using `useState` and `useEffect` together
- Understanding browser Local Storage
- Saving data with `localStorage.setItem()`
- Retrieving data with `localStorage.getItem()`
- Converting data using `JSON.stringify()`
- Parsing stored data using `JSON.parse()`
- Lazy initialization with `useState`
- Synchronizing React state with browser storage
- Controlled inputs
- Managing persistent application data

## Project Structure

```text
Day-126-React-useLocalStorage/
├── src/
│   ├── hooks/
│   │   └── useLocalStorage.js
│   ├── App.jsx
│   ├── App.css
│   └── main.jsx
├── public/
├── index.html
└── package.json
```

## Implementation

### 1. Creating the Custom Hook

File: `src/hooks/useLocalStorage.js`

```javascript
import { useEffect, useState } from "react";

function useLocalStorage(key, initialValue) {
  const [value, setValue] = useState(() => {
    const storedValue = localStorage.getItem(key);

    if (storedValue !== null) {
      return JSON.parse(storedValue);
    }

    return initialValue;
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
}

export default useLocalStorage;
```

### 2. Using the Custom Hook

File: `src/App.jsx`

```jsx
import "./App.css";
import useLocalStorage from "./hooks/useLocalStorage";

function App() {
  const [name, setName] = useLocalStorage("username", "");

  function handleClear() {
    setName("");
  }

  return (
    <div className="container">
      <h1>React Local Storage</h1>

      <div className="card">
        <h2>Save Your Name</h2>

        <input
          type="text"
          value={name}
          onChange={(event) => setName(event.target.value)}
          placeholder="Enter your name"
        />

        <p>
          Saved Name: {name || "No name entered"}
        </p>

        <button onClick={handleClear}>
          Clear Name
        </button>
      </div>
    </div>
  );
}

export default App;
```

## How It Works

1. The Custom Hook receives a storage key and an initial value.
2. `useState` uses lazy initialization to check Local Storage.
3. `localStorage.getItem()` retrieves previously stored data.
4. `JSON.parse()` converts stored JSON text into JavaScript data.
5. `useEffect` synchronizes changes to React state with Local Storage.
6. `JSON.stringify()` converts JavaScript data into JSON text.
7. `localStorage.setItem()` saves the updated value.
8. Refreshing the browser does not remove the saved value.

## Important Local Storage Methods

| Method | Purpose |
|---|---|
| `localStorage.setItem()` | Save data |
| `localStorage.getItem()` | Retrieve data |
| `localStorage.removeItem()` | Remove a specific key |
| `localStorage.clear()` | Clear all Local Storage data |

## Key Takeaways

- React state normally resets when the page is refreshed.
- Local Storage allows data to persist between page loads.
- Local Storage stores values as strings.
- `JSON.stringify()` converts JavaScript values into JSON text.
- `JSON.parse()` converts JSON text back into JavaScript values.
- `useEffect` synchronizes React state with browser storage.
- Custom Hooks make stateful logic reusable.

## Technologies Used

- React 19
- Vite
- JavaScript
- CSS
- Browser Local Storage

## Status

Completed - Day 126