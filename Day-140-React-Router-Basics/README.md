# Day 140 - React Router Basics (`BrowserRouter`, `Routes`, `Route`, `Link`)

## Overview

This project kicks off the **React Router** module (Days 140–144) by configuring client-side routing with `react-router-dom`. Wrapping the root component in `<BrowserRouter>` and mapping URL paths inside `<Routes>` enables instant multi-page transitions across `/`, `/modules`, and `/about` without triggering full browser reloads while keeping `<Navbar />` mounted across every route.

The application allows users to:

- Configure client-side routing at the root level with `<BrowserRouter>` in `src/main.jsx`.
- Map URL paths (`/`, `/modules`, `/about`) to dedicated page components (`HomePage`, `ModulesPage`, `AboutPage`) using `<Routes>` and `<Route>`.
- Navigate smoothly between pages using `<Link to="...">` in both the top navigation bar and page action buttons without losing application state.

## Concepts Learned

- Installing and configuring `react-router-dom` in a Vite React project
- Wrapping `<App />` in `<BrowserRouter>` to connect React to the browser's History API
- Defining declarative route matching with `<Routes>` and `<Route path="..." element={<Page />} />`
- Using `<Link to="...">` instead of `<a href="...">` to prevent full-page reloads
- Keeping persistent UI elements (`<Navbar />`) outside `<Routes>` so they stay mounted across route transitions

## Project Structure

```text
Day-140-React-Router-Basics/
├── src/
│   ├── components/
│   │   └── Navbar.jsx
│   ├── pages/
│   │   ├── AboutPage.jsx
│   │   ├── HomePage.jsx
│   │   └── ModulesPage.jsx
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   └── main.jsx
├── public/
├── index.html
└── package.json
```

## Implementation

### 1. Wrapping Root with `BrowserRouter`

File: `src/main.jsx`

```jsx
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <App/>
    </BrowserRouter>
  </StrictMode>
);
```

### 2. Route Definitions & Persistent Navbar

File: `src/App.jsx`

```jsx
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import ModulesPage from "./pages/ModulesPage";
import AboutPage from "./pages/AboutPage";

function App() {
  return (
    <>
      <Navbar/>

      <main className="container">
        <Routes>
          <Route path="/" element={<HomePage/>} />
          <Route path="/modules" element={<ModulesPage/>} />
          <Route path="/about" element={<AboutPage/>} />
        </Routes>
      </main>
    </>
  );
}

export default App;
```

### 3. Persistent Navigation Bar

File: `src/components/Navbar.jsx`

```jsx
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <header className="navbar">
      <div className="navbar-inner">
        <Link className="brand" to="/">
          React Router (Day 140)
        </Link>

        <nav className="nav-links" aria-label="Primary Navigation">
          <Link className="nav-link" to="/">
            Home
          </Link>
          <Link className="nav-link" to="/modules">
            Modules
          </Link>
          <Link className="nav-link" to="/about">
            About
          </Link>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
```

### 4. Page Components

File: `src/pages/HomePage.jsx`

```jsx
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
          <Link className="btn-link" to="/modules">
            Browse Router Modules
          </Link>
          <Link className="btn-link secondary" to="/about">
            Learn How It Works
          </Link>
        </div>
      </div>
    </>
  );
}

export default HomePage;
```

File: `src/pages/ModulesPage.jsx`

```jsx
import { Link } from "react-router-dom";

const ROUTER_LESSONS = [
  { day: "Day 140", title: "BrowserRouter, Routes, Route & Link Basics" },
  { day: "Day 141", title: "Active Links with NavLink & Query Params" },
  { day: "Day 142", title: "Dynamic URL Parameters with useParams" },
  { day: "Day 143", title: "Nested Layouts & Outlet Composition" },
  { day: "Day 144", title: "Programmatic Navigation (useNavigate) & 404 Catch-All" },
];

function ModulesPage() {
  return (
    <>
      <h1>React Router Syllabus</h1>

      <div className="card">
        <h2>Days 140–144 Roadmap</h2>
        <p>
          Each lesson builds one core routing pattern before moving into the
          final Capstone project on Day 145.
        </p>

        <ul className="topic-list">
          {ROUTER_LESSONS.map((lesson) => (
            <li key={lesson.day} className="topic-item">
              <span>
                <strong>{lesson.day}:</strong> {lesson.title}
              </span>
            </li>
          ))}
        </ul>

        <div className="button-group">
          <Link className="btn-link secondary" to="/">
            Back to Home
          </Link>
          <Link className="btn-link" to="/about">
            Go to About
          </Link>
        </div>
      </div>
    </>
  );
}

export default ModulesPage;
```

File: `src/pages/AboutPage.jsx`

```jsx
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
          <Link className="btn-link" to="/">
            Return Home
          </Link>
          <Link className="btn-link secondary" to="/modules">
            View Modules
          </Link>
        </div>
      </div>
    </>
  );
}

export default AboutPage;
```

## How It Works

1. `src/main.jsx` wraps `<App />` inside `<BrowserRouter>` to provide routing context across the entire component tree.
2. `src/App.jsx` renders `<Navbar />` above `<main className="container">`, keeping the navigation header mounted while `<Routes>` switches between `HomePage`, `ModulesPage`, and `AboutPage`.
3. Clicking any `<Link to="...">` updates the browser URL via the History API and renders the matching `<Route>` without reloading the page.

## Key Takeaways

- Always wrap your root component in `<BrowserRouter>` once at the top level (`main.jsx`).
- Place shared layout UI (`<Navbar />`) outside `<Routes>` so it persists smoothly across route transitions.
- Use `<Link to="...">` for internal SPA navigation and reserve standard `<a>` tags for external websites.

## Technologies Used

- React 19
- React Router DOM
- Vite
- JavaScript (ES6+)
- CSS3

## Status

Completed - Day 140