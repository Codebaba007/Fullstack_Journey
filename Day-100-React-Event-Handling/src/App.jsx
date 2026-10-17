import "./App.css";

function App() {
    function handleWelcomeClick() {
        console.log("Welcome to the Student Dashboard!");
    }

    function handleHelpClick() {
        console.log("Help button was clicked!");
    }
    function handlelifeClick() {
      console.log("Button was clicked!");
    }

    return (
        <main className="dashboard">
            <h1>Student Dashboard</h1>

            <button onClick={handleWelcomeClick}>
                Welcome
            </button>

            <button onClick={handleHelpClick}>
                Help
            </button>
            <button onClick={handlelifeClick}>
              yuff
            </button>
        </main>
    );
}
export default App;