import {useState} from 'react'

import './App.css'

function App() {

  const [count, setCount] = useState(0);
  return(
    <main className="counter">
      <h>
        React Counter
      </h>
      <p> Current count: {count}</p>
      <button onClick={() => setCount(count+1)}>increase</button>
      <button onClick={() => setCount(count - 1)}>
    Decrease
</button>
    </main>
  )
}
export default App