// src/components/UserName.jsx

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