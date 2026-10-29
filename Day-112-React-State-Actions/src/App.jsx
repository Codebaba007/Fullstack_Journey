
import { useState } from 'react';
import './App.css';

function App() {
  const [student, setStudent] = useState({
    name: 'Alex',
    department: 'CSE'
  });

  function resetName() {
    setStudent(previousStudent => ({
      ...previousStudent,
      name: 'Alex'
    }));
  }

  function changeDepartment() {
    setStudent(previousStudent => ({
      ...previousStudent,
      department:
        previousStudent.department === 'CSE' ? 'EEE' : 'CSE'
    }));
  }

  function ResetAll() {
    setStudent({
      name: 'Alex',
      department: 'CSE'
    });
  }

  return (
    <main className="dashboard">
      <h1>Student Profile Manager</h1>

      <StudentProfile student={student} />

      <div className="actions">
        <button onClick={resetName}>
          Reset Name
        </button>

        <button onClick={changeDepartment}>
          Toggle Department
        </button>
        <button onClick={ResetAll}>
          Reset All
        </button>
      </div>

      <NameEditor
        student={student}
        setStudent={setStudent}
      />
    </main>
  );
}

function StudentProfile({ student }) {
  return (
    <section className="panel">
      <h2>Student Profile</h2>
      <p><strong>Name:</strong> {student.name}</p>
      <p><strong>Department:</strong> {student.department}</p>
    </section>
  );
}

function NameEditor({ student, setStudent }) {
  function handleNameChange(event) {
    const newName = event.target.value;

    setStudent(previousStudent => ({
      ...previousStudent,
      name: newName
    }));
  }

  return (
    <section className="panel">
      <h2>Edit Name</h2>

      <input
        type="text"
        value={student.name}
        onChange={handleNameChange}
        placeholder="Enter student name"
      />
    </section>
  );
}

export default App;
