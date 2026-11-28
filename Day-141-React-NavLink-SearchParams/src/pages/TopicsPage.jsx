
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