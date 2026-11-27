// src/pages/ModulesPage.jsx

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
          <Link to="/" className="btn-link secondary">
            Back to Home
          </Link>
          <Link to="/about" className="btn-link">
            Go to About
          </Link>
        </div>
      </div>
    </>
  );
}

export default ModulesPage;