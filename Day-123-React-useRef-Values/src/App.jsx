import { useState, useRef } from "react";
import "./App.css";

function App() {
  const [stateCount, setStateCount] = useState(0);

  const refCount = useRef(0);

  function handleStateClick() {
    setStateCount(stateCount + 1);
  }

  function handleRefClick() {
    refCount.current = refCount.current + 1;

    console.log("Ref Count:", refCount.current);
  }

  return (
    <div className="container">
      <h1>useState vs useRef</h1>

      <div className="counter">
        <h2>useState</h2>

        <p>Count: {stateCount}</p>

        <button onClick={handleStateClick}>
          Increase State
        </button>
      </div>

      <div className="counter">
        <h2>useRef</h2>

        <p>Check the browser console</p>

        <button onClick={handleRefClick}>
          Increase Ref
        </button>
      </div>
    </div>
  );
}

export default App;