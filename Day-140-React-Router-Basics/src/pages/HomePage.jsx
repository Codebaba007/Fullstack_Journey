// src/pages/HomePage.jsx

import { Link } from "react-router-dom";

function HomePage() {
  return (
    <>
      <h1>Client-Side Routing Basics</h1>

      <div className="card">
        <h2>Welcome to React Router</h2>
        <p>
          Instead of requesting a brand-new HTML document from the server on
          every click, React Router updates the URL and swaps components
          instantly inside the browser.
        </p>

        <div className="stats-grid">
          <div className="stat-box">
            <span className="stat-label">Router Days</span>
            <span className="stat-value">140–144</span>
          </div>

          <div className="stat-box">
            <span className="stat-label">Pages Today</span>
            <span className="stat-value">3 Routes</span>
          </div>

          <div className="stat-box">
            <span className="stat-label">Page Reloads</span>
            <span className="stat-value">0</span>
          </div>
        </div>

        <div className="status-banner">
          <strong>Active Route:</strong> <code>/</code> (HomePage)
        </div>

        <div className="button-group">
          <Link to="/modules" className="btn-link">
            Browse Router Modules
          </Link>
          <Link to="/about" className="btn-link secondary">
            Learn How It Works
          </Link>
        </div>
      </div>
    </>
  );
}

export default HomePage;