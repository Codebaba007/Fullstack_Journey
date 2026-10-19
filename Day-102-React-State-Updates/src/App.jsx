import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  function handleIncrease() {
    setCount(previousCount => previousCount + 1);
  }
  function handleDecrease() {
    setCount(previousCount => previousCount - 1);
  }
  function handlezTripleIncrease() {
    setCount(previousCount => previousCount + 1);
    setCount(previousCount => previousCount + 1);
    setCount(previousCount => previousCount + 1);
  }
  function handleReset() {
    setCount(0);
  }
  function handleFiveIncrease() {
    setCount(previousCount => previousCount + 5);
  }
  return (
    <main className="counter">
      <h1>State Update Practice</h1>

      <p className= "Count-display">{count}</p>
      <div className="button-group">
        <button onClick={handleIncrease}>Increase</button>
        <button onClick={handleDecrease}>Decrease</button>
        <button onClick={handlezTripleIncrease}>Triple Increase</button>
        <button onClick={handleReset}>Reset</button>
        <button onClick={handleFiveIncrease}>Five Increase</button>
      </div>
    </main>

  )
}
export default App;