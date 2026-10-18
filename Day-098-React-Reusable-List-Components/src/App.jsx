import "./App.css";

const students = [
    { id: 101, name: "Mehedi", department: "CSE", cgpa: 3.75 },
    { id: 102, name: "Rahim", department: "EEE", cgpa: 3.60 },
    { id: 103, name: "Karim", department: "BBA", cgpa: 3.40 }
];

function StudentCard({ student }) {
    const { name, department, cgpa } = student;

    return (
        <article className="student-card">
            <h2>{name}</h2>
            <p>Department: {department}</p>
            <p>CGPA: {cgpa}</p>
        </article>
    );
}
function App() {
    return (
        <main className="dashboard">
            <h1>Student Dashboard</h1>

            <div className="student-list">
                {students.map((student) => {
                    return (
                        <StudentCard
                            key={student.id}
                            student={student}
                        />
                    );
                })}
            </div>
        </main>
    );
}

export default App;