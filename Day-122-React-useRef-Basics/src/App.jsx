import { useRef } from "react";
import "./App.css";

function App() {
  const inputRef = useRef(null);

  function handleFocus() {
    inputRef.current.focus();
  }

  return (
    <div className="container">
      <h1>React useRef</h1>

      <input
        ref={inputRef}
        type="text"
        placeholder="Enter your username"
      />

      <button onClick={handleFocus}>
        Focus Input
      </button>
    </div>
  );
}

export default App;