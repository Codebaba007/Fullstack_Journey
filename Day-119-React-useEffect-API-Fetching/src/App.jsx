import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function fetchUsers() {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );

      const data = await response.json();

      setUsers(data);
    }

    fetchUsers();
  }, []);

  return (
    <div className="container">
      <h1>Student Dashboard</h1>

      <div className="user-list">
        {users.map((user) => (
          <div className="user-card" key={user.id}>
            <h2>{user.name}</h2>
            <p>Email: {user.email}</p>
            <p>Username: {user.username}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;