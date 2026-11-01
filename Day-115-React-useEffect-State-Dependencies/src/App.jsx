import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [studentName, setStudentname] = useState("Alex");

  useEffect(() => {
    document.title = `Dashboard - ${studentName}`;

    console.log("Student name changed:", studentName);
  }, [studentName]);

  return (
    <div>
      <h1>Student Dashboard</h1>

      <h2>Student: {studentName}</h2>

      <button onClick={() => setStudentname("John")}>
        Change to John
      </button>

      <button onClick={() => setStudentname("Alex")}>
        Change to Alex
      </button>
    </div>
  );
}

export default App;