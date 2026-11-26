// src/App.jsx

import { useCallback, useMemo, useState } from "react";
import "./App.css";
import MemoStatsCard from "./components/MemoStatsCard";
import MemoActionCard from "./components/MemoActionCard";

const initialItems = [
  { id: 1, label: "useMemo caches values" },
  { id: 2, label: "useCallback stabilizes functions" },
];

function App() {
  const [items, setItems] = useState(initialItems);
  const [unrelatedClicks, setUnrelatedClicks] = useState(0);

  // Memoized summary object: only recomputes when `items` changes
  const statsSummary = useMemo(() => {
    const totalCount = items.length;
    const totalCharacters = items.reduce(
      (sum, item) => sum + item.label.length,
      0
    );
    const avgLength =
      totalCount > 0 ? Math.round(totalCharacters / totalCount) : 0;

    return {
      totalCount,
      totalCharacters,
      avgLength,
    };
  }, [items]);

  // Stable callback reference across all renders
  const handleAddItem = useCallback((rawLabel) => {
    const cleanLabel = rawLabel.trim();
    if (!cleanLabel) return;

    setItems((prev) => [
      { id: Date.now(), label: cleanLabel },
      ...prev,
    ]);
  }, []);

  // Stable reset callback reference
  const handleResetItems = useCallback(() => {
    setItems(initialItems);
  }, []);

  return (
    <div className="container">
      <h1>Preventing Child Re-Renders (React.memo)</h1>

      <div className="card">
        <h2>App Level Status</h2>
        <p>
          Active Items: <strong>{items.length}</strong> | Unrelated Counter:{" "}
          <strong>{unrelatedClicks}</strong>
        </p>

        <div className="button-group">
          <button
            className="secondary"
            onClick={() => setUnrelatedClicks((prev) => prev + 1)}
          >
            Click Unrelated State (+1)
          </button>
        </div>
      </div>

      {/* Wrapped in React.memo: skips re-render when `statsSummary` reference is unchanged */}
      <MemoStatsCard statsSummary={statsSummary} />

      {/* Wrapped in React.memo: skips re-render when `items`, `onAddItem`, and `onResetItems` are unchanged */}
      <MemoActionCard
        items={items}
        onAddItem={handleAddItem}
        onResetItems={handleResetItems}
      />
    </div>
  );
}

export default App;