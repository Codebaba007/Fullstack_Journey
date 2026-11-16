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