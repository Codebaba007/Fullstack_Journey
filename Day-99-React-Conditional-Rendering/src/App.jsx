
import "./App.css";

const student = {
    name: "Mehedi",
    cgpa: 3.75,
    status: "Active"
};

function getStatusMessage(status, cgpa) {
  
    if (status === "Pending") {
        return "This student's status is awaiting confirmation.";
    }
    if (status === "Active" && cgpa > 3.50) {
        return "This student is currently studing in probation.";
        }

    return "This student is currently inactive.";
}

function App() {
    return (
        <main className="dashboard">
            <h1>Student Dashboard</h1>
            <p>Student: {student.name}</p>
            <p>CGPA: {student.cgpa}</p>

            <p>
              {student.status === "Active" ? "Student is Active" :
              "student is Inactive"}
            </p>
            <p>{getStatusMessage(student.status, student.cgpa)}</p>
        </main>
    );
}

export default App;
