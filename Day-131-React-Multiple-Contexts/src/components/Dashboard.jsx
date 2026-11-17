// src/components/Dashboard.jsx

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

      <UserProfile />
    </div>
  );
}

export default Dashboard;