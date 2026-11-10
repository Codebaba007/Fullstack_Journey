import "./App.css";
import useCounter from "./hooks/useCounter";

function App() {
  const { count, increment, decrement, reset } = useCounter();

  return (
    <div className="container">
      <h1>
        React Custom Hooks
      </h1>
      <div className="counter">
        <h2>{count}</h2>
        <button onClick={increment}>+</button>
        <button onClick={decrement}>-</button>
        <button onClick={reset}>Reset</button>
      </div>
    </div>
  );
}

export default App;