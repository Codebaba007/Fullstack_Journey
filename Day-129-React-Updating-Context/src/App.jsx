import { useState } from "react";
import Dashboard from "./components/Dashboard";
import { UserContext } from "./context/UserContext";

function App() {
  const [username, setUsername] = useState("Mehedi");

  return (
    <div>
      <h1>My Dashboard</h1>
      <UserContext.Provider value={{ username, setUsername }}>
        <Dashboard />
      </UserContext.Provider>
    </div>
  );
}

export default App;