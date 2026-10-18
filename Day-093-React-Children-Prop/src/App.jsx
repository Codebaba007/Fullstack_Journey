import "./App.css";

function InfoBox(props) {
    return (
        <div className="info-box">
            <h2>{props.title}</h2>
            <div>{props.children}</div>
        </div>
    );
}

function App() {
    return (
        <div>
            <InfoBox title="Student Information">
                <p>Name: Mehedi</p>
                <p>Department: CSE</p>
            </InfoBox>

            <InfoBox title="Important Notice">
                <p>Registration closes on Friday.</p>
                <p>Please contact the department office.</p>
            </InfoBox>
            <InfoBox title="Upcoming Events">
                <p>Event 1: Workshop on React</p>
                <p>Event 2: Seminar on JavaScript</p>
            </InfoBox>
        </div>
    );
}

export default App;