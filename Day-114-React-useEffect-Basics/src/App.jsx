import {useEffect, useState} from 'react';
import './App.css';
function App(){
  const[count, setCount] = useState(0);

  useEffect(()=>{
    document.title = "React useEffect Practice";

  }, []);
   return (
    <div>
      <h1>Count: {count}</h1>

      <button onClick={() => setCount(count + 1)}>
        Increase
      </button>
    </div>
  );
}

export default App;