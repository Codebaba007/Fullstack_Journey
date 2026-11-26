# Day 139 - React `React.memo` (Preventing Unnecessary Child Re-Renders)

## Overview

This project completes the **Performance Optimization** module (Days 137–139) by combining **`React.memo`**, **`useMemo`**, and **`useCallback`** so child components skip unnecessary re-renders when their props remain unchanged. When `App.jsx` updates unrelated state (`unrelatedClicks`), memoized child cards (`MemoStatsCard` and `MemoActionCard`) receive identical prop references and avoid redundant render work.

The application allows users to:

- Wrap child components in `memo(...)` so React compares incoming props against previous props before re-rendering.
- Stabilize a derived summary object (`statsSummary`) in `App.jsx` using `useMemo` so `MemoStatsCard` keeps the same object reference across unrelated parent re-renders.
- Stabilize callback handlers (`handleAddItem` and `handleResetItems`) with `useCallback` so `MemoActionCard` receives identical function references.
- Add new items or reset the item list while updating statistics and list items cleanly.

## Concepts Learned

- Wrapping components with `React.memo(Component)` for shallow prop comparison (`Object.is`)
- Combining `React.memo` + `useMemo` + `useCallback` to preserve object, array, and function reference equality
- Why inline functions or un-memoized derived objects defeat `React.memo` on parent re-renders
- Observing render commits safely via `useEffect` in React 19

## Project Structure

```text
Day-139-React-memo/
├── src/
│   ├── components/
│   │   ├── MemoActionCard.jsx
│   │   └── MemoStatsCard.jsx
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   └── main.jsx
├── public/
├── index.html
└── package.json
```

## Implementation

### 1. Root Component (`useMemo` + `useCallback` + Unrelated State)

File: `src/App.jsx`

```jsx
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

  const handleAddItem = useCallback((rawLabel) => {
    const cleanLabel = rawLabel.trim();
    if (!cleanLabel) return;

    setItems((prev) => [
      { id: Date.now(), label: cleanLabel },
      ...prev,
    ]);
  }, []);

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

      <MemoStatsCard statsSummary="{statsSummary}"/>

      <MemoActionCard items="{items}" onAddItem="{handleAddItem}" onResetItems="{handleResetItems}"/>
    </div>
  );
}

export default App;
```

### 2. Memoized Statistics Card

File: `src/components/MemoStatsCard.jsx`

```jsx
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
```

### 3. Memoized Action Card

File: `src/components/MemoActionCard.jsx`

```jsx
import { memo, useEffect, useState } from "react";

function MemoActionCard({ items, onAddItem, onResetItems }) {
  const [label, setLabel] = useState("");

  useEffect(() => {
    console.log("MemoActionCard committed with items:", items.length);
  }, [items]);

  function handleSubmit(event) {
    event.preventDefault();
    if (!label.trim()) return;

    onAddItem(label);
    setLabel("");
  }

  return (
    <div className="card">
      <h2>2. Memoized Action Card (React.memo + useCallback)</h2>

      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="memo-item-input">New Item Label</label>
          <input
            id="memo-item-input"
            type="text"
            value={label}
            onChange={(event) => setLabel(event.target.value)}
            placeholder="e.g. React Router starts Day 140..."
          />
        </div>

        <div className="button-group">
          <button type="submit" className="success">
            Add Item
          </button>
          <button
            type="button"
            className="danger"
            onClick={onResetItems}
          >
            Reset Items
          </button>
        </div>
      </form>

      <ul className="item-list">
        {items.map((item) => (
          <li key={item.id} className="item-row">
            <span>{item.label}</span>
            <span>{item.label.length} chars</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default memo(MemoActionCard);
```

## How It Works

1. `App.jsx` manages `items` and `unrelatedClicks` in `useState`.
2. `statsSummary` is derived and memoized via `useMemo(..., [items])`, keeping the same object reference whenever `items` has not changed.
3. `handleAddItem` and `handleResetItems` are memoized via `useCallback(..., [])`, keeping identical function references across renders.
4. `MemoStatsCard` and `MemoActionCard` are exported wrapped in `memo(...)`, allowing React to skip re-rendering them when `unrelatedClicks` increments in `App.jsx`.

## Key Takeaways

- `React.memo` avoids unnecessary child re-renders when props pass shallow equality checks.
- Objects, arrays, and functions created inline on every parent render produce new references each time—pair `React.memo` with `useMemo` and `useCallback` to preserve reference stability.
- Measure first and apply `React.memo` selectively where child re-renders are frequent or heavy rather than wrapping every tiny component blindly.

## Technologies Used

- React 19
- Vite
- JavaScript (ES6+)
- CSS3
- React `memo`, `useMemo`, `useCallback`, `useEffect`, & `useState`

## Status

Completed - Day 139