// src/components/MemoStatsCard.jsx

import { memo, useEffect } from "react";

function MemoStatsCard({ statsSummary }) {
  const { totalCount, totalCharacters, avgLength } = statsSummary;

  useEffect(() => {
    console.log("MemoStatsCard committed with count:", totalCount);
  }, [totalCount]);

  return (
    <div className="card">
      <h2>1. Memoized Stats Card (React.memo)</h2>

      <div className="stats-grid">
        <div className="stat-box">
          <span className="stat-label">Items</span>
          <span className="stat-value">{totalCount}</span>
        </div>

        <div className="stat-box">
          <span className="stat-label">Total Chars</span>
          <span className="stat-value">{totalCharacters}</span>
        </div>

        <div className="stat-box">
          <span className="stat-label">Avg Length</span>
          <span className="stat-value">{avgLength}</span>
        </div>
      </div>

      <div className="status-banner">
        <strong>Optimization Check:</strong> Clicking <em>Click Unrelated State (+1)</em>{" "}
        re-renders <code>App</code>, while <code>statsSummary</code> keeps the
        same reference via <code>useMemo</code> so this card stays memoized.
      </div>
    </div>
  );
}

export default memo(MemoStatsCard);