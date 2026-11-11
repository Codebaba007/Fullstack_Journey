import "./App.css";
import useToggle from "./hooks/useToggle";

function App() {
  const [isVisible, toggleVisibility] = useToggle(false);

  const [isEnabled, toggleEnabled] = useToggle(true);

  return (
    <div className="container">
      <h1>React useToggle</h1>

      <div className="card">
        <h2>Show / Hide Information</h2>

        <button onClick={toggleVisibility}>
          {isVisible ? "Hide Information" : "Show Information"}
        </button>

        {isVisible && (
          <p>This information is now visible!</p>
        )}
      </div>

      <div className="card">
        <h2>Enable / Disable Feature</h2>

        <p>
          Status: {isEnabled ? "Enabled" : "Disabled"}
        </p>

        <button onClick={toggleEnabled}>
          Toggle Status
        </button>
      </div>
    </div>
  );
}

export default App;