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

      <UserContext.Provider
        value={{ username, setUsername, resetUser, removeUser }}
      >
        <Dashboard />
      </UserContext.Provider>
    </div>
  );
}

export default App;