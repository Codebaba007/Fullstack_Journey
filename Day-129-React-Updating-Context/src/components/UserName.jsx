import { useContext } from "react";
import { UserContext } from "../context/UserContext";

function UserName() {
  const { username } = useContext(UserContext);

  return <h2>Hello, {username || "Guest"}</h2>;
}

export default UserName;