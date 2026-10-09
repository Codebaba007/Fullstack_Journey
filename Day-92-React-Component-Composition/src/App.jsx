import "./App.css";

function DashBoardHeader() {
    return (
        <header>
            <h1>Student Dashboard</h1>
            <p>Academic Overview</p>
        </header>
    );
}
function StudentCard(props) {
    return (
        <article>
            <h2>{props.name}</h2>
            <p>ID: {props.id}</p>
            <p>Department: {props.department}</p>
        </article>
    );
}
function App() {
    return (
        <div>
            <DashBoardHeader />

            <StudentCard
                name="Mehedi"
                id={101}
                department="CSE"
            />

            <StudentCard
                name="Rahim"
                id={102}
                department="EEE"
            />
        </div>
    );
} 
export default App;