import {useState} from 'react';
import './App.css';

function App(){
  const [name, setName] = useState("");

  function handleNameChange(event){
    setName(event.target.value);
  }
  return(
    <main className= "dashboard">
      <h1>Student Search Dashboard</h1>
    
    <label htmlFor="name">Enter Student Name:</label>

    <input
      id="name"
      type="text"
      value={name}
      onChange={handleNameChange}
    />
    <section className="result-card">
      <h2>Live Preview</h2>
      <p>
        Student name: {name || "no name entered yet"}
      </p>
      <p>Character entered: {name.length}</p>

    </section>

    </main>
  )
}

export default App;