
import "./App.css";

const students = [
    { id: 101, name: "Mehedi", department: "CSE", cgpa: 3.75, email: "mehedi@gmail.com" },
    { id: 102, name: "Rahim", department: "EEE", cgpa: 3.60, email: "rahim@gmail.com" },
    { id: 103, name: "Karim", department: "BBA", cgpa: 3.40, email: "karim@gmail.com" },
    { id: 104, name: "Jamal", department: "CSE", cgpa: 3.90, email: "jamal@gmail.com" },
];

function App() {
    return (
        <main className="dashboard">
            <h1>Student Dashboard</h1>

            <div className="student-list">
                {students.map((student) => {
                    return (
                        <article className="student-card" key={student.id}>
                            <h2>{student.name}</h2>
                            <p>Department: {student.department}</p>
                            <p>academic CGPA: {student.cgpa}</p>
                            <p>Email: {student.email}</p>
                          
                            
                        </article>
                    );
                })}
            </div>
        </main>
    );
}

export default App;
