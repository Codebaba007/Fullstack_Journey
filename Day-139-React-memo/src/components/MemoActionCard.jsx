// src/components/MemoActionCard.jsx

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