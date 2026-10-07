function App() {
    const studentName = "Rahim";
    const studentId = 101;
    const studentDept = "CSE";
    const studentCGPA = 3.75;

    return (
        <div>
            <h1>Student Information</h1>
            <p>Name: {studentName}</p>
            <p>ID: {studentId}</p>
            <p>Department: {studentDept}</p>
            <p>CGPA: {studentCGPA}</p>
        </div>
    );
}

export default App;