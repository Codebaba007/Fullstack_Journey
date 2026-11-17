// src/components/EditUser.jsx

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