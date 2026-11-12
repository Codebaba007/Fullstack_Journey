import "./App.css";
import useLocalStorage from "./hooks/useLocalStorage";

function App() {
  const [name, setName] = useLocalStorage("username", "");

  function handleClear() {
    setName("");
  }

  return (
    <div className="container">
      <h1>React Local Storage</h1>

      <div className="card">
        <h2>Save Your Name</h2>

        <input
          type="text"
          value={name}
          onChange={(event) => setName(event.target.value)}
          placeholder="Enter your name"
        />

        <p>
          Saved Name: {name || "No name entered"}
        </p>

        <button onClick={handleClear}>
          Clear Name
        </button>
      </div>
    </div>
  );
}

export default App;