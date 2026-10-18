function StudentCard(props) {
    return (
        <div>
            <h2>{props.name}</h2>
            <p>ID: {props.id}</p>
            <p>Department: {props.department}</p>
            <p>CGPA: {props.cgpa}</p>
        </div>
    );
}

function App() {
    return (
        <div>
            <h1>Student Dashboard</h1>

            <StudentCard
                name="Mehedi"
                id={101}
                department="CSE"
                cgpa={3.75}
            />

            <StudentCard
                name="Rahim"
                id={102}
                department="EEE"
                cgpa={3.60}
            />

            <StudentCard
                name="Karim"
                id={103}
                department="BBA"
                cgpa={3.40}
            />
        </div>
    );
}

export default App;