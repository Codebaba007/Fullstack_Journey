# Day 130 - React Context State & Action Helpers

## Overview

This project builds on Day 129 by expanding the React Context API to share not only state values and setter functions, but also reusable **action helper functions** (`resetUser` and `removeUser`) across multiple components, paired with a structured card-based UI layout.

The application allows users to:

- Store user state and define state-mutation helpers (`resetUser`, `removeUser`) at the top level (`App.jsx`).
- Broadcast state and action helpers together via `UserContext.Provider`.
- View synchronized state updates simultaneously in both `App.jsx` and nested components (`UserName.jsx`).
- Clear or reset shared user state from separate nested sibling components (`UserName.jsx` and `EditUser.jsx`) without prop drilling.

## Concepts Learned

- Sharing action helper functions alongside state in `Context.Provider`
- Centralizing state logic in `App.jsx` so child components call clean semantic actions (`removeUser()`, `resetUser()`)
- Selective object destructuring in consumer components (`useContext(UserContext)`)
- Synchronizing UI across top-level and deeply nested components from a single source of truth
- Structuring React layouts with dedicated `App.css` container and card classes

## Project Structure

```text
Day-130-React-Custom-Provider/
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

### 2. Defining State, Action Helpers & Broadcasting

File: `src/App.jsx`

```jsx
import { useState } from "react";
import "./App.css";
import Dashboard from "./components/Dashboard";
import { UserContext } from "./context/UserContext";

function App() {
  const [username, setUsername] = useState("Mehedi");

  function resetUser() {
    setUsername("Mehedi");
  }

  function removeUser() {
    setUsername("");
  }

  return (
    <div className="container">
      <h1>Context State & Actions</h1>

      <div className="card">
        <h2>App Level Status</h2>
        <p>Active User: {username || "No user logged in"}</p>
      </div>

      <UserContext.Provider removeUser resetUser, setUsername, username, value="{{" }}>
        <Dashboard/>
      </UserContext.Provider>
    </div>
  );
}

export default App;
```

### 3. Intermediate Structural Components

File: `src/components/Dashboard.jsx`

```jsx
import UserProfile from "./UserProfile";

function Dashboard() {
  return (
    <div className="card">
      <h2>Dashboard</h2>
      <p>This component forwards zero props down to its children.</p>
      <UserProfile/>
    </div>
  );
}

export default Dashboard;
```

File: `src/components/UserProfile.jsx`

```jsx
import UserName from "./UserName";
import EditUser from "./EditUser";

function UserProfile() {
  return (
    <div>
      <UserName/>
      <EditUser/>
    </div>
  );
}

export default UserProfile;
```

### 4. Consuming State and Action Helpers

File: `src/components/UserName.jsx`

```jsx
import { useContext } from "react";
import { UserContext } from "../context/UserContext";

function UserName() {
  const { username, removeUser } = useContext(UserContext);

  return (
    <div className="card">
      <h3>User Display</h3>
      <p>Hello, {username || "Guest"}</p>
      <button className="danger" onClick={removeUser}>
        Remove Saved Name
      </button>
    </div>
  );
}

export default UserName;
```

File: `src/components/EditUser.jsx`

```jsx
import { useContext } from "react";
import { UserContext } from "../context/UserContext";

function EditUser() {
  const { username, setUsername, resetUser } = useContext(UserContext);

  return (
    <div className="card">
      <h3>Update Username</h3>

      <input
        type="text"
        value={username}
        onChange={(event) => setUsername(event.target.value)}
        placeholder="Enter your name"
      />

      <div className="button-group">
        <button onClick={resetUser}>Reset to Default</button>
      </div>
    </div>
  );
}

export default EditUser;
```

## How It Works

1. `App.jsx` holds the `username` state and defines two helper functions: `resetUser()` (restores `"Mehedi"`) and `removeUser()` (clears to `""`).
2. `App.jsx` renders an **App Level Status** card directly using `username` and wraps `<Dashboard />` inside `<UserContext.Provider>`.
3. `UserContext.Provider` broadcasts `{ username, setUsername, resetUser, removeUser }` down the component tree.
4. `Dashboard.jsx` and `UserProfile.jsx` organize the layout without accepting or passing any props.
5. `UserName.jsx` destructures `{ username, removeUser }` from `useContext(UserContext)` to display the greeting and clear the saved name.
6. `EditUser.jsx` destructures `{ username, setUsername, resetUser }` to edit the input live and restore the default name.

## Key Takeaways

- Centralizing helper functions like `resetUser` and `removeUser` inside the state owner (`App.jsx`) prevents duplicating state-reset logic across multiple child components.
- Every component reading `username` (`App.jsx` and `UserName.jsx`) stays automatically synchronized whenever any child calls `setUsername`, `resetUser`, or `removeUser`.
- Separating layout styling into `App.css` (`.container`, `.card`, `.button-group`) keeps JSX clean and readable.

## Technologies Used

- React 19
- Vite
- JavaScript (ES6+)
- CSS3
- React Context API (`createContext`, `useContext`)

## Status

Completed - Day 130