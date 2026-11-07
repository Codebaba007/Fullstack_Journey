import { useState, useEffect } from "react";
import "./App.css";

async function fetchUsers(setUsers, setLoading, setError) {
  setLoading(true);
  setError("");

  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/users"
    );

    if (!response.ok) {
      throw new Error("Failed to fetch users");
    }

    const data = await response.json();

    setUsers(data);

  } catch (error) {
    setError(error.message);

  } finally {
    setLoading(false);
  }
}

function App() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetchUsers(setUsers, setLoading, setError);
  }, []);

  return (
    <div className="container">
      <h1>User Dashboard</h1>

      {loading ? (
        <h2>Loading users...</h2>
      ) : error ? (
        <div className="error">
          <h2>{error}</h2>

          <button
            onClick={() =>
              fetchUsers(setUsers, setLoading, setError)
            }
          >
            Retry
          </button>
        </div>
      ) : (
        <div className="user-list">
          {users.map((user) => (
            <div className="user-card" key={user.id}>
              <h2>{user.name}</h2>
              <p>Email: {user.email}</p>
              <p>Username: {user.username}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default App;