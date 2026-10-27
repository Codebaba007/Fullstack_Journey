
import { useState } from 'react';
import './App.css';

function App() {
  const [studentName, setStudentName] = useState('');

  // Derived values: calculate from studentName
  const nameLength = studentName.trim().length;
  const isNameLongEnough = nameLength >= 3;

  return (
    <main className="dashboard">
      <h1>Student Profile</h1>

      <StudentInput
        studentName={studentName}
        setStudentName={setStudentName}
      />

      <StudentSummary
        studentName={studentName}
        nameLength={nameLength}
        isNameLongEnough={isNameLongEnough}
      />
    </main>
  );
}

function StudentInput({ studentName, setStudentName }) {
  return (
    <section className="panel">
      <label htmlFor="studentName">Student Name</label>

      <input
        id="studentName"
        type="text"
        value={studentName}
        onChange={(event) => setStudentName(event.target.value)}
        placeholder="Enter a student name"
      />
    </section>
  );
}

function StudentSummary({
  studentName,
  nameLength,
  isNameLongEnough
}) {
  return (
    <section className="panel">
      <h2>Profile Summary</h2>

      <p>
        <strong>Name:</strong>{' '}
        {studentName.trim() || 'No name entered'}
      </p>

      <p>
        <strong>Character count:</strong> {nameLength}
      </p>

      <p>
        <strong>Status:</strong>{' '}
        {nameLength === 0
          ? 'Waiting for input'
          : isNameLongEnough
            ? 'Name length is valid'
            : 'Enter at least 3 characters'}
      </p>
    </section>
  );
}

export default App;
