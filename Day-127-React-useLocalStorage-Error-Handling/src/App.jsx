import "./App.css";
import useLocalStorage from "./hooks/useLocalStorage";

function App() {
  const [name, setName, removeName] = useLocalStorage(
    "username",
    ""
  );

  return (
    <div className="container">
      <h1>Improved Local Storage</h1>

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

        <button onClick={removeName}>
          Remove Saved Name
        </button>
      </div>
    </div>
  );
}

export default App;