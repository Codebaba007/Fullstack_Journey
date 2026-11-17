// src/App.jsx

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

        <ThemeContext.Provider value={{ theme, toggleTheme }}>
          <UserContext.Provider
            value={{ username, setUsername, resetUser, removeUser }}
          >
            <Dashboard />
          </UserContext.Provider>
        </ThemeContext.Provider>
      </div>
    </div>
  );
}

export default App;