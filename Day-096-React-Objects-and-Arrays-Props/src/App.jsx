
import "./App.css";

const student = {
    name: "Mehedi",
    department: "CSE",
    cgpa: 3.75
};

function StudentCard({ student }) {
    return (
        <article>
            <h2>{student.name}</h2>
            <p>Department: {student.department}</p>
            <p>CGPA: {student.cgpa}</p>
        </article>
    );
}

function App() {
    return (
        <div>
            <h1>Student Profile</h1>

            <StudentCard student={student} />
        </div>
    );
}

export default App;
