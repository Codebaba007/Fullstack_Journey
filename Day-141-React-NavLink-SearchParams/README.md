# Day 141 - React Router `NavLink` & `useSearchParams`

## Overview

This project builds on Day 140 by replacing basic navigation links with **`<NavLink>`** for automatic active-route styling and using **`useSearchParams`** to store search and category filter state directly in the browser's URL query string (`?category=...&q=...`). Keeping filter parameters in the URL makes filtered views shareable, bookmarkable, and resilient across browser refreshes.

The application allows users to:

- Highlight the currently active navigation link automatically using `<NavLink>` and the `isActive` callback prop.
- Use the `end` prop on `<NavLink end to="/">` so the Home route only highlights on an exact `/` match.
- Navigate directly to pre-filtered topic lists from `HomePage` via query string links (`/topics?category=Performance`).
- Filter lessons by title and category on `TopicsPage` while keeping `?category=...&q=...` synchronized with the browser address bar via `useSearchParams`.

## Concepts Learned

- Styling active navigation routes dynamically using `<NavLink className={({ isActive }) => ...}>`
- Preventing partial prefix matching on the root route with `<NavLink end to="/">`
- Reading query parameters via `searchParams.get("category")` and `searchParams.get("q")`
- Updating URL query strings cleanly with `URLSearchParams` and `setSearchParams(...)`
- Preserving UI filter state across page reloads using URL-backed state

## Project Structure

```text
Day-141-React-NavLink-SearchParams/
├── src/
│   ├── components/
│   │   └── Navbar.jsx
│   ├── data/
│   │   └── topicsData.js
│   ├── pages/
│   │   ├── HomePage.jsx
│   │   └── TopicsPage.jsx
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   └── main.jsx
├── public/
├── index.html
└── package.json
```

## Implementation

### 1. Topics Dataset

File: `src/data/topicsData.js`

```javascript
export const TOPICS = [
  {
    id: 1,
    title: "useReducer + useContext Global Wallet",
    category: "State",
    day: "Day 134",
  },
  {
    id: 2,
    title: "useRef DOM Focus & Scroll Anchors",
    category: "Refs",
    day: "Day 136",
  },
  {
    id: 3,
    title: "useMemo Heavy Array Caching",
    category: "Performance",
    day: "Day 137",
  },
  {
    id: 4,
    title: "useCallback Stable Event Handlers",
    category: "Performance",
    day: "Day 138",
  },
  {
    id: 5,
    title: "React.memo Child Render Skipping",
    category: "Performance",
    day: "Day 139",
  },
  {
    id: 6,
    title: "BrowserRouter, Routes & Link Basics",
    category: "Routing",
    day: "Day 140",
  },
  {
    id: 7,
    title: "NavLink Active Styling & useSearchParams",
    category: "Routing",
    day: "Day 141",
  },
];

export const CATEGORIES = ["All", "State", "Refs", "Performance", "Routing"];
```

### 2. Navigation Bar with `NavLink`

File: `src/components/Navbar.jsx`

```jsx
import { Link, NavLink } from "react-router-dom";

function Navbar() {
  return (
    <header className="navbar">
      <div className="navbar-inner">
        <Link className="brand" to="/">
          React Router (Day 141)
        </Link>

        <nav className="nav-links" aria-label="Primary Navigation">
          <NavLink className="{({" end isActive to="/">
              isActive ? "nav-link active" : "nav-link"
            }
          >
            Home
          </NavLink>

          <NavLink className="{({" isActive to="/topics">
              isActive ? "nav-link active" : "nav-link"
            }
          >
            Topics
          </NavLink>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
```

### 3. Home Page with Pre-Filtered Route Links

File: `src/pages/HomePage.jsx`

```jsx
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
          <Link className="btn-link" to="/topics">
            All Topics
          </Link>
          <Link className="btn-link secondary" to="/topics?category=Performance">
            Performance Topics
          </Link>
          <Link className="btn-link secondary" to="/topics?category=Routing">
            Routing Topics
          </Link>
        </div>
      </div>
    </>
  );
}

export default HomePage;
```

### 4. Filterable Topics Page with `useSearchParams`

File: `src/pages/TopicsPage.jsx`

```jsx
import { useSearchParams } from "react-router-dom";
import { CATEGORIES, TOPICS } from "../data/topicsData";

function TopicsPage() {
  const [searchParams, setSearchParams] = useSearchParams();

  const selectedCategory = searchParams.get("category") || "All";
  const searchQuery = searchParams.get("q") || "";

  function updateParams(nextCategory, nextQuery) {
    const params = new URLSearchParams();

    if (nextCategory && nextCategory !== "All") {
      params.set("category", nextCategory);
    }

    if (nextQuery && nextQuery.trim() !== "") {
      params.set("q", nextQuery);
    }

    setSearchParams(params);
  }

  function handleCategoryChange(event) {
    updateParams(event.target.value, searchQuery);
  }

  function handleSearchChange(event) {
    updateParams(selectedCategory, event.target.value);
  }

  function handleClearFilters() {
    setSearchParams({});
  }

  const filteredTopics = TOPICS.filter((item) => {
    const matchesCategory =
      selectedCategory === "All" || item.category === selectedCategory;
    const matchesSearch = item.title
      .toLowerCase()
      .includes(searchQuery.trim().toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <>
      <h1>Filterable Topics</h1>

      <div className="card">
        <h2>Search & Category (Synced to URL)</h2>

        <div className="form-group">
          <label htmlFor="topic-filter-input">Search Title</label>
          <input
            id="topic-filter-input"
            type="text"
            value={searchQuery}
            onChange={handleSearchChange}
            placeholder="Search e.g. memo, NavLink, useRef..."
          />
        </div>

        <div className="form-group">
          <label htmlFor="topic-category-select">Category</label>
          <select
            id="topic-category-select"
            value={selectedCategory}
            onChange={handleCategoryChange}
          >
            {CATEGORIES.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>

        <div className="stats-grid">
          <div className="stat-box">
            <span className="stat-label">Category</span>
            <span className="stat-value">{selectedCategory}</span>
          </div>

          <div className="stat-box">
            <span className="stat-label">Matches</span>
            <span className="stat-value">{filteredTopics.length}</span>
          </div>

          <div className="stat-box">
            <span className="stat-label">Total</span>
            <span className="stat-value">{TOPICS.length}</span>
          </div>
        </div>

        <div className="status-banner">
          <strong>Current Query String:</strong>{" "}
          <code>
            {searchParams.toString() ? `?${searchParams.toString()}` : "(none)"}
          </code>
        </div>

        <div className="button-group">
          <button
            type="button"
            className="secondary"
            onClick={handleClearFilters}
          >
            Clear Query Params
          </button>
        </div>
      </div>

      <div className="card">
        <h3>Matching Lessons ({filteredTopics.length})</h3>

        {filteredTopics.length === 0 ? (
          <p>No topics match your current filter.</p>
        ) : (
          <ul className="topic-list">
            {filteredTopics.map((item) => (
              <li key={item.id} className="topic-item">
                <span>
                  <strong>{item.day}:</strong> {item.title}
                </span>
                <span className="badge">{item.category}</span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </>
  );
}

export default TopicsPage;
```

### 5. Root Route Configuration

File: `src/App.jsx`

```jsx
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import TopicsPage from "./pages/TopicsPage";

function App() {
  return (
    <>
      <Navbar/>

      <main className="container">
        <Routes>
          <Route path="/" element={<HomePage/>} />
          <Route path="/topics" element={<TopicsPage/>} />
        </Routes>
      </main>
    </>
  );
}

export default App;
```

## How It Works

1. `Navbar.jsx` uses `<NavLink>` so React Router automatically passes `{ isActive }` to `className`, applying the `.active` pill style to whichever route matches the current URL.
2. `HomePage.jsx` links directly to `/topics`, `/topics?category=Performance`, and `/topics?category=Routing`.
3. `TopicsPage.jsx` calls `useSearchParams()` to read `category` and `q` directly from the URL rather than local `useState`, updating the address bar whenever the user types or changes the dropdown.
4. Omitting default values (`category === "All"` or empty `q`) keeps URLs clean (`/topics` instead of `/topics?category=All&q=`).

## Key Takeaways

- Use **`<NavLink>`** for navigation menus where the active page needs visual highlighting, and include `end` on `"/"` so it doesn't stay active on sub-routes.
- Store shareable UI state (search queries, filters, pagination, tabs) in **`useSearchParams`** so users can bookmark, share, or refresh the page without losing context.

## Technologies Used

- React 19
- React Router DOM
- Vite
- JavaScript (ES6+)
- CSS3

## Status

Completed - Day 141