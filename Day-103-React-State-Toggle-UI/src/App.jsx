import {useState} from 'react';
import "./App.css";

function App() {
  const [isVisible, setIsvisible]= useState(false);
  const [isMsg, setIsMsg] = useState(false);

  function handleToggle(){
    setIsvisible(previousValue => !previousValue);
  }

  function handleMsgToggle(){
    setIsMsg(previousValue => !previousValue);
  }

  return(
    <main className = "dashboard">
      <h1>
        Student Dashboard
      </h1>
      <p>Click the button to show or hide the content.</p>
      <button onClick ={handleToggle}>
        {isVisible ? 'Hide profile' : 'Show profile'} Content
        </button>
        <br/>
      <button onClick={handleMsgToggle}> {isMsg ? 'Hide' : 'Show'} Hidden msg</button>

      {isVisible && (
        <section className = "profile-card">
          <h2>Mehedi</h2>
          <p>Deparment: Computer Science</p>
          <p>CGPA: 3.85</p>
          <p>Status: Active</p>
          <p>ID: 12345</p>

        </section>
      )}
      
      {isMsg && (
        <section className = "profile-card">
          <message>
            Life is hard, but you can do it. Keep going and never give up!
          </message>

        </section>
      )}

    </main>
  )

}
export default App;