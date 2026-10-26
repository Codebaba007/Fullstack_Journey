import { useState } from 'react';
import './App.css';

function App() {
  const [studentName, setStudentName] = useState('');

  return (
    <main className="dashboard">
      <h1>Student Dashboard</h1>

      <StudentInput
        studentName={studentName}
        setStudentName={setStudentName}
      />

      <StudentGreeting studentName={studentName} />
    </main>
  );
}

function StudentInput({studentName, setStudentName}){
  return (
    <section className="panel">
      <h2>
        Update Student Name
      </h2>
      <input
        type="text"
        value={studentName}
        onChange={(event) => setStudentName(event.target.value)}
        placeholder="Enter student name"
      />
    </section>
  )
}

function StudentGreeting({ studentName }) {
  return (
    <section className="panel">
      <h2>Student Greeting</h2>

      {studentName.trim() ? (
        <p>Welcome, {studentName}!</p>
      ) : (
        <p>Enter a name to see the greeting.</p>
      )}
    </section>
  );
}

export default App;