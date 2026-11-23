// src/components/DebounceSearchCard.jsx

import { useEffect, useRef, useState } from "react";

const TOPICS = [
  "React Context API",
  "React useReducer Hook",
  "React useRef DOM Access",
  "React useEffect Lifecycle",
  "JavaScript Closures",
  "Vite Project Setup",
  "CSS Grid Layout",
];

function DebounceSearchCard() {
  const [rawInput, setRawInput] = useState("");
  const [debouncedTerm, setDebouncedTerm] = useState("");
  const [previousTerm, setPreviousTerm] = useState("None yet");
  const [searchExecutions, setSearchExecutions] = useState(0);

  // Ref #1: Holds the active setTimeout ID so we can cancel it on fast typing
  const timeoutRef = useRef(null);

  // Ref #2: Remembers the last completed search term across renders
  const lastCommittedRef = useRef("None yet");

  // Clean up any pending timeout if the component unmounts
  useEffect(() => {
    return () => clearTimeout(timeoutRef.current);
  }, []);

  function handleSearchChange(event) {
    const nextValue = event.target.value;
    setRawInput(nextValue);

    // Cancel the previous timer before starting a new 600ms countdown
    clearTimeout(timeoutRef.current);

    timeoutRef.current = setTimeout(() => {
      setPreviousTerm(lastCommittedRef.current);
      setDebouncedTerm(nextValue);
      lastCommittedRef.current = nextValue.trim() || "Empty query";
      setSearchExecutions((count) => count + 1);
    }, 600);
  }

  function handleClearSearch() {
    clearTimeout(timeoutRef.current);
    setRawInput("");
    setDebouncedTerm("");
  }

  const filteredTopics = TOPICS.filter((topic) =>
    topic.toLowerCase().includes(debouncedTerm.trim().toLowerCase())
  );

  return (
    <div className="card">
      <h2>2. Debounced Search & Previous Term</h2>

      <div className="form-group">
        <label htmlFor="topic-search">Search Topics (600ms Debounce)</label>
        <input
          id="topic-search"
          type="text"
          value={rawInput}
          onChange={handleSearchChange}
          placeholder="Type 'React' quickly..."
        />
      </div>

      <div className="stats-grid">
        <div className="stat-box">
          <span className="stat-label">Searches Fired</span>
          <span className="stat-value">{searchExecutions}</span>
        </div>

        <div className="stat-box">
          <span className="stat-label">Previous Search</span>
          <span className="stat-value">{previousTerm}</span>
        </div>
      </div>

      <div className="status-banner" style={{ marginBottom: "12px" }}>
        <strong>Active Filter:</strong>{" "}
        {debouncedTerm ? `"${debouncedTerm}"` : "Showing all topics"} (
        {filteredTopics.length} match{filteredTopics.length === 1 ? "" : "es"})
      </div>

      <ul>
        {filteredTopics.map((topic) => (
          <li key={topic} style={{ marginBottom: "6px" }}>
            {topic}
          </li>
        ))}
      </ul>

      <div className="button-group">
        <button
          type="button"
          className="secondary"
          onClick={handleClearSearch}
        >
          Clear Search
        </button>
      </div>
    </div>
  );
}

export default DebounceSearchCard;