import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [studentName, setStudentName] = useState("Alex");
  const [department, setDepartment] = useState("CSE");

  useEffect(() => {
    document.title = `${studentName} - ${department} | Student Dashboard`;

    console.log("Dashboard updated:", studentName, department);
  }, [studentName, department]);

  return (
    <div>
      <h1>Student Dashboard</h1>

      <h2>Student: {studentName}</h2>
      <h2>Department: {department}</h2>

      <button onClick={() => setStudentName("Mehedi")}>
        Change Name
      </button>

      <button onClick={() => setDepartment("EEE")}>
        Change Department
      </button>
    </div>
  );
}

export default App;