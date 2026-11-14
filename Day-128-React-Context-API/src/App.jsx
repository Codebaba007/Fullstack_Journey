import Dashboard from "./components/Dashboard";

function App(){
  const username = "Mehedi"
  return (
    <div>
      <h1>
        My Dashboard
      </h1>
      <Dashboard username={username}/>
    </div>
  )
}
export default App;