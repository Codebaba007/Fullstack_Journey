# Day 129 - React Updating Context State

## Overview

This project builds on Day 128 by upgrading the React Context API from a read-only data channel into an interactive state-sharing system.

The application allows users to:

- Store user state at the top level (`App.jsx`).
- Broadcast both the state value and its updater function via `UserContext.Provider`.
- Display the current username in a deeply nested component (`UserName.jsx`).
- Update the shared username from a separate nested sibling component (`EditUser.jsx`) without prop drilling.

## Concepts Learned

- Passing objects through `Context.Provider` (`value={{ username, setUsername }}`)
- Destructuring specific values and updater functions from `useContext()`
- Updating parent state from deeply nested child components
- Maintaining a Single Source of Truth while decoupling sibling components
- File naming case-sensitivity across Windows and JavaScript build tools (Vite/ESLint)

## Project Structure

```text
Day-129-React-Updating-Context/
├── src/
│   ├── components/
│   │   ├── Dashboard.jsx
│   │   ├── EditUser.jsx
│   │   ├── UserName.jsx
│   │   └── UserProfile.jsx
│   ├── context/
│   │   └── UserContext.jsx
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   └── main.jsx
├── public/
├── index.html
└── package.json
```

## Implementation

### 1. Creating the Context

File: `src/context/UserContext.jsx`

```jsx
import { createContext } from "react";

export const UserContext = createContext();
```

### 2. Broadcasting State and Updater Function

File: `src/App.jsx`

```jsx
import { useState } from "react";
import Dashboard from "./components/Dashboard";
import { UserContext } from "./context/UserContext";

function App() {
  const [username, setUsername] = useState("Mehedi");

  return (
    <div>
      <h1>My Dashboard</h1>
      <UserContext.Provider setUsername username, value="{{" }}>
        <Dashboard/>
      </UserContext.Provider>
    </div>
  );
}

export default App;
```

### 3. Reading Shared State

File: `src/components/UserName.jsx`

```jsx
import { useContext } from "react";
import { UserContext } from "../context/UserContext";

function UserName() {
  const { username } = useContext(UserContext);

  return <h2>Hello, {username || "Guest"}</h2>;
}

export default UserName;
```

### 4. Updating Shared State

File: `src/components/EditUser.jsx`

```jsx
import { useContext } from "react";
import { UserContext } from "../context/UserContext";

function EditUser() {
  const { username, setUsername } = useContext(UserContext);

  return (
    <div>
      <label>Update Username: </label>
      <input
        type="text"
        value={username}
        onChange={(event) => setUsername(event.target.value)}
        placeholder="Enter new username"
      />
    </div>
  );
}

export default EditUser;
```

## How It Works

1. `App.jsx` initializes `username` using `useState("Mehedi")`.
2. `UserContext.Provider` broadcasts an object containing `{ username, setUsername }`.
3. `Dashboard.jsx` and `UserProfile.jsx` act as clean structural components without accepting or forwarding props.
4. `UserName.jsx` consumes `useContext(UserContext)` and destructures `username` to render the greeting.
5. `EditUser.jsx` consumes `useContext(UserContext)` and destructures both `username` and `setUsername`.
6. Typing in the input field calls `setUsername`, updating the state in `App.jsx` and automatically re-rendering `UserName.jsx`.

## Key Takeaways

- A Context `Provider` can pass objects containing both state values and state setter functions.
- Double curly braces `{{ }}` in JSX represent a JavaScript object literal inside a JSX expression.
- Consumer components only need to destructure the specific properties they use from `useContext()`.
- Even when a deeply nested child calls `setUsername()`, the top-level component (`App`) still owns and manages the state.
- Import paths must match exact file casing (`UserName.jsx` vs `Username.jsx`) to prevent bundler and TypeScript server errors.

## Technologies Used

- React 19
- Vite
- JavaScript (ES6+)
- React Context API (`createContext`, `useContext`)

## Status

Completed - Day 129