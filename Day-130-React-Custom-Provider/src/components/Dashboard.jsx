import UserProfile from "./UserProfile";

function Dashboard() {
  return (
    <div className="card">
      <h2>Dashboard</h2>
      <p>This component forwards zero props down to its children.</p>
      <UserProfile />
    </div>
  );
}

export default Dashboard;