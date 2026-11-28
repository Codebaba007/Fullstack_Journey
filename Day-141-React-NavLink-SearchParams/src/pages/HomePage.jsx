// src/pages/HomePage.jsx

import { Link } from "react-router-dom";

function HomePage() {
  return (
    <>
      <h1>NavLink & Query Params</h1>

      <div className="card">
        <h2>Shareable URLs with useSearchParams</h2>
        <p>
          Try opening a pre-filtered topic link below and notice how the
          query string (<code>?category=...</code>) stays synced with the UI
          and survives a page refresh.
        </p>

        <div className="stats-grid">
          <div className="stat-box">
            <span className="stat-label">Active Hook</span>
            <span className="stat-value">NavLink</span>
          </div>

          <div className="stat-box">
            <span className="stat-label">URL Hook</span>
            <span className="stat-value">useSearchParams</span>
          </div>

          <div className="stat-box">
            <span className="stat-label">State Sync</span>
            <span className="stat-value">URL Bar</span>
          </div>
        </div>

        <div className="button-group">
          <Link to="/topics" className="btn-link">
            All Topics
          </Link>
          <Link to="/topics?category=Performance" className="btn-link secondary">
            Performance Topics
          </Link>
          <Link to="/topics?category=Routing" className="btn-link secondary">
            Routing Topics
          </Link>
        </div>
      </div>
    </>
  );
}

export default HomePage;