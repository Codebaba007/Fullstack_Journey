
import { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  function increaseOnce() {
    setCount(count + 1);
  }

  function increaseThreeTimes() {
    setCount(previousCount => previousCount + 1);
    setCount(previousCount => previousCount + 1);
    setCount(previousCount => previousCount + 1);
  }

  function decreaseOnce() {
    setCount(previousCount => previousCount - 1);
  }

  function resetCounter() {
    setCount(0);
  }

  return (
    <main className="counter">
      <h1>React State Updates</h1>

      <section className="panel">
        <h2>Current Count</h2>
        <p className="count">{count}</p>

        <div className="actions">
          <button onClick={increaseOnce}>
            +1
          </button>

          <button onClick={increaseThreeTimes}>
            +3
          </button>

          <button onClick={decreaseOnce}>
            -1
          </button>

          <button onClick={resetCounter}>
            Reset
          </button>
        </div>
      </section>
    </main>
  );
}

export default App;
