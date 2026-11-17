# Day 131 - React Combining Multiple Contexts

## Overview

This project builds on Day 130 by managing **two independent global contexts** (`UserContext` and `ThemeContext`) within the same React application. By separating user identity state from UI theme state, components can subscribe to one context, the other, or both simultaneously while keeping state logic clean and modular.

The application allows users to:

- Store `username` and `theme` states independently at the top level (`App.jsx`).
- Broadcast user state and helpers (`resetUser`, `removeUser`) via `UserContext.Provider`.
- Broadcast theme state and helper (`toggleTheme`) via `ThemeContext.Provider`.
- Toggle between Light and Dark modes from both `App.jsx` and nested `Dashboard.jsx`.
- Consume both contexts simultaneously inside `UserName.jsx` while keeping `EditUser.jsx` subscribed only to `UserContext`.

## Concepts Learned

- Separating unrelated global concerns into distinct Context files (`UserContext.jsx` and `ThemeContext.jsx`)
- Nesting multiple `Context.Provider` components in `App.jsx`
- Calling `useContext()` multiple times inside a single component (`UserName.jsx`)
- Selective context subscription so components only read the contexts they actually need
- Dynamic theme switching using CSS modifier classes (`.app.light` and `.app.dark`)

## Project Structure

```text
Day-131-React-Multiple-Contexts/
├── src/
│   ├── components/
│   │   ├── Dashboard.jsx
│   │   ├── EditUser.jsx
│   │   ├── UserName.jsx
│   │   └── UserProfile.jsx
│   ├── context/
│   │   ├── ThemeContext.jsx
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

### 1. Creating the Contexts

File: `src/context/UserContext.jsx`

```jsx
import { createContext } from "react";

export const UserContext = createContext();
```

File: `src/context/ThemeContext.jsx`

```jsx
import { createContext } from "react";

export const ThemeContext = createContext();
```

### 2. Managing Both States & Nesting Providers

File: `src/App.jsx`

```jsx
import { useState } from "react";
import "./App.css";
import Dashboard from "./components/Dashboard";
import { UserContext } from "./context/UserContext";
import { ThemeContext } from "./context/ThemeContext";

function App() {
  const [username, setUsername] = useState("Mehedi");
  const [theme, setTheme] = useState("light");

  function resetUser() {
    setUsername("Mehedi");
  }

  function removeUser() {
    setUsername("");
  }

  function toggleTheme() {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  }

  return (
    <div className={`app ${theme}`}>
      <div className="container">
        <h1>Multiple Contexts</h1>

        <div className="card">
          <h2>App Level Status</h2>
          <p>Active User: {username || "No user logged in"}</p>
          <p>Current Theme: {theme.toUpperCase()}</p>

          <div className="button-group">
            <button className="secondary" onClick={toggleTheme}>
              Switch to {theme === "light" ? "Dark" : "Light"} Mode
            </button>
          </div>
        </div>

        <ThemeContext.Provider theme, toggleTheme value="{{" }}>
          <UserContext.Provider removeUser resetUser, setUsername, username, value="{{" }}>
            <Dashboard/>
          </UserContext.Provider>
        </ThemeContext.Provider>
      </div>
    </div>
  );
}

export default App;
```

### 3. Consuming ThemeContext in Dashboard

File: `src/components/Dashboard.jsx`

```jsx
import { useContext } from "react";
import UserProfile from "./UserProfile";
import { ThemeContext } from "../context/ThemeContext";

function Dashboard() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div className="card">
      <h2>Dashboard</h2>
      <p>Dashboard reads ThemeContext directly ({theme} mode).</p>

      <div className="button-group" style={{ marginBottom: "16px" }}>
        <button className="secondary" onClick={toggleTheme}>
          Toggle Theme from Dashboard
        </button>
      </div>

      <UserProfile/>
    </div>
  );
}

export default Dashboard;
```

### 4. Consuming Both Contexts vs. Single Context

File: `src/components/UserName.jsx`

```jsx
import { useContext } from "react";
import { UserContext } from "../context/UserContext";
import { ThemeContext } from "../context/ThemeContext";

function UserName() {
  const { username, removeUser } = useContext(UserContext);
  const { theme } = useContext(ThemeContext);

  return (
    <div className="card">
      <h3>User Display</h3>
      <p>Hello, {username || "Guest"}</p>
      <p>Viewing in: {theme} mode</p>

      <div className="button-group">
        <button className="danger" onClick={removeUser}>
          Remove Saved Name
        </button>
      </div>
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

1. `App.jsx` initializes two independent `useState` hooks: `username` (`"Mehedi