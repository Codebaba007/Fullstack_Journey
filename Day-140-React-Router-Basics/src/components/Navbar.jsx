// src/components/Navbar.jsx

import { Link } from "react-router-dom";

function Navbar() {
  return (
    <header className="navbar">
      <div className="navbar-inner">
        <Link to="/" className="brand">
          React Router (Day 140)
        </Link>

        <nav className="nav-links" aria-label="Primary Navigation">
          <Link to="/" className="nav-link">
            Home
          </Link>
          <Link to="/modules" className="nav-link">
            Modules
          </Link>
          <Link to="/about" className="nav-link">
            About
          </Link>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;