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