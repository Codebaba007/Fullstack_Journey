# Day 127 - React useLocalStorage Error Handling

## Overview

This project improves the reusable React Custom Hook `useLocalStorage` by introducing error handling and a dedicated removal function.

The application allows users to:

- Enter and save their name.
- Automatically persist data in browser Local Storage.
- Retrieve saved data after refreshing the page.
- Remove a saved value completely.
- Handle errors when reading, parsing, saving, or removing stored data.

## Concepts Learned

- Improving reusable Custom Hooks
- Using `useState` and `useEffect`
- Error handling with `try...catch`
- Handling JSON parsing errors
- Saving data with `localStorage.setItem()`
- Retrieving data with `localStorage.getItem()`
- Removing data with `localStorage.removeItem()`
- Converting data using `JSON.stringify()` and `JSON.parse()`
- Creating reusable removal functions
- Returning multiple values from Custom Hooks
- Array destructuring

## Project Structure

```text
Day-127-React-useLocalStorage-Error-Handling/
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

### 1. Creating the Improved Custom Hook

File: `src/hooks/useLocalStorage.js`

```javascript
import { useEffect, useState } from "react";

function useLocalStorage(key, initialValue) {
  const [value, setValue] = useState(() => {
    try {
      const storedValue = localStorage.getItem(key);

      if (storedValue !== null) {
        return JSON.parse(storedValue);
      }

      return initialValue;
    } catch (error) {
      console.error("Error reading Local Storage:", error);

      return initialValue;
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.error("Error saving to Local Storage:", error);
    }
  }, [key, value]);

  function removeValue() {
    try {
      localStorage.removeItem(key);
    } catch (error) {
      console.error("Error removing from Local Storage:", error);
    }

    setValue(initialValue);
  }

  return [value, setValue, removeValue];
}

export default useLocalStorage;
```

### 2. Using the Custom Hook

File: `src/App.jsx`

```jsx
import "./App.css";
import useLocalStorage from "./hooks/useLocalStorage";

function App() {
  const [name, setName, removeName] = useLocalStorage(
    "username",
    ""
  );

  return (
    <div className="container">
      <h1>Improved Local Storage</h1>

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

        <button onClick={removeName}>
          Remove Saved Name
        </button>
      </div>
    </div>
  );
}

export default App;
```

## How It Works

1. The Custom Hook receives a storage key and an initial value.
2. `useState` uses lazy initialization to retrieve existing data.
3. `localStorage.getItem()` retrieves stored data.
4. `JSON.parse()` converts stored JSON text into JavaScript data.
5. `try...catch` handles errors during data retrieval and parsing.
6. `useEffect` synchronizes React state with Local Storage.
7. `JSON.stringify()` converts JavaScript values into JSON text.
8. `localStorage.setItem()` saves updated values.
9. `removeValue()` deletes the stored key and resets React state.

## Important Local Storage Methods

| Method | Purpose |
|---|---|
| `localStorage.setItem()` | Save data |
| `localStorage.getItem()` | Retrieve data |
| `localStorage.removeItem()` | Remove a specific key |
| `localStorage.clear()` | Clear all Local Storage data |

## Error Handling

The application uses `try...catch` to handle:

- Errors while retrieving stored data.
- Invalid JSON during parsing.
- Errors while saving data.
- Errors while removing stored data.

If reading or parsing fails, the hook falls back to the initial value.

## Key Takeaways

- Error handling makes Custom Hooks more reliable.
- `try...catch` prevents common storage errors from crashing initialization.
- `removeItem()` deletes a storage key entirely.
- `setItem()` with an empty string does not delete the key.
- Custom Hooks can return multiple values and functions.
- React state and browser Local Storage are separate systems.
- Local Storage persistence does not guarantee that every storage operation will succeed.

## Technologies Used

- React 19
- Vite
- JavaScript
- CSS
- Browser Local Storage

## Status

Completed - Day 127