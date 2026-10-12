
import "./App.css";

function StudentCard({ name, id, status = "Pending" }) {
    return (
        <article className="student-card">
            <div>
                <h2>{name}</h2>
                <p className="student-id">Student ID: {id}</p>
            </div>

            <span className={`status status-${status.toLowerCase()}`}>
                {status}
            </span>
        </article>
    );
}

function App() {
    return (
        <main className="dashboard">
            <header className="dashboard-header">
                <h1>Student Dashboard</h1>
                <p>Academic status overview</p>
            </header>

            <section className="student-list">
                <StudentCard
                    name="Mehedi"
                    id={101}
                    status="Active"
                />

                <StudentCard
                    name="Rahim"
                    id={102}
                />

                <StudentCard
                    name="Karim"
                    id={103}
                    status="Inactive"
                />
            </section>
        </main>
    );
}

export default App;
