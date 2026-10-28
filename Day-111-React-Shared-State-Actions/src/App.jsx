

import { useState } from 'react';
import './App.css';

function App () {
  const [student, setStudent] = useState({
    name: 'Alex',
    department: 'CSE'
  });
  return (
    <main className="dashboard">
      <h1>Student Dashboard</h1>

      <StudentProfile student={student} />

      <NameEditor
        student={student}
        setStudent={setStudent}
      />

      <DepartmentEditor
        student={student}
        setStudent={setStudent}
      />
    </main>
  );
}
  function StudentProfile({ student}){
    return (
      <section className="panel">
        <h2>Student Profile</h2>
        <p><strong>Name:</strong> {student.name}</p>
        <p><strong>Department:</strong> {student.department}</p>
      </section>
    );
  }
  function NameEditor({ student, setStudent }) {
    function handleNameChange(event){
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
          placeholder="Enter new name"
        />
      </section>
    );
  }
    function DepartmentEditor({ student, setStudent }) {
  function handleDepartmentChange(event) {
    const newDepartment = event.target.value;

    setStudent(previousStudent => ({
      ...previousStudent,
      department: newDepartment
    }));
  }

  return (
    <section className="panel">
      <h2>Update Department</h2>

      <select
        value={student.department}
        onChange={handleDepartmentChange}
      >
        <option value="CSE">CSE</option>
        <option value="EEE">EEE</option>
        <option value="BBA">BBA</option>
      </select>
    </section>
  );
    }
export default App;