// src/pages/AboutPage.jsx

import { Link } from "react-router-dom";

function AboutPage() {
  return (
    <>
      <h1>About SPA Routing</h1>

      <div className="card">
        <h2>Why React Router?</h2>
        <p>
          In a Single-Page Application (SPA), JavaScript controls view
          transitions smoothly while keeping shared layout elements—like{" "}
          <code>&lt;Navbar /&gt;</code>—mounted across route changes.
        </p>

        <div className="status-banner">
          <strong>Key Rule:</strong> Use <code>&lt;Link to="..."&gt;</code> for
          internal navigation so React Router intercepts clicks without a full
          browser reload.
        </div>

        <div className="button-group">
          <Link to="/" className="btn-link">
            Return Home
          </Link>
          <Link to="/modules" className="btn-link secondary">
            View Modules
          </Link>
        </div>
      </div>
    </>
  );
}

export default AboutPage;