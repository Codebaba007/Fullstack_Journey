# Day 137 - React `useMemo` (Caching Expensive Calculations)

## Overview

This project introduces React's **`useMemo`** hook for performance optimization by caching the result of an expensive filtering and aggregation calculation across a 5,000-product catalog. It demonstrates how unrelated state updates (such as incrementing a separate counter) can re-render a component without forcing React to recompute heavy array operations when their dependencies have not changed.

The application allows users to:

- Generate a deterministic 5,000-item product dataset once outside the component lifecycle (`generateProducts.js`).
- Filter products in real time by search query and category (`All`, `Laptops`, `Monitors`, `Keyboards`, `Audio`).
- Cache matched counts, total inventory value, average price, and a 6-item preview list inside `useMemo`.
- Increment an unrelated counter in `App.jsx` to trigger re-renders without re-running the memoized filter and `.reduce()` calculations.

## Concepts Learned

- Caching expensive derived calculations with `useMemo(() => compute(), [dependencies])`
- Declaring static datasets outside the component function so base array references remain stable across renders
- Controlling when memoized values recompute using accurate dependency arrays (`[searchQuery, selectedCategory]`)
- Guarding against zero-division (`NaN`) when computing averages on empty filter results
- Slicing large filtered arrays (`.slice(0, 6)`) to keep DOM rendering lightweight while computing analytics on the full matched dataset

## Project Structure

```text
Day-137-React-useMemo/
├── src/
│   ├── components/
│   │   ├── AnalyticsSummaryCard.jsx
│   │   └── ProductFilterCard.jsx
│   ├── data/
│   │   └── generateProducts.js
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   └── main.jsx
├── public/
├── index.html
└── package.json
```

## Implementation

### 1. Product Dataset Generator

File: `src/data/generateProducts.js`

```javascript
const CATEGORIES = ["Laptops", "Monitors", "Keyboards", "Audio"];
const BRANDS = ["ASUS", "HP", "Dell", "Lenovo", "Logitech", "Sony"];

export function generateProducts(count = 5000) {
  const items = [];

  for (let i = 1; i <= count; i++) {
    const category = CATEGORIES[i % CATEGORIES.length];
    const brand = BRANDS[i % BRANDS.length];
    const price = 50 + ((i * 37) % 1450);

    items.push({
      id: i,
      name: `${brand} ${category.slice(0, -1)} Model-${i}`,
      category,
      price,
    });
  }

  return items;
}
```

### 2. Root Component & `useMemo` Caching

File: `src/App.jsx`

```jsx
import { useMemo, useState } from "react";
import "./App.css";
import { generateProducts } from "./data/generateProducts";
import ProductFilterCard from "./components/ProductFilterCard";
import AnalyticsSummaryCard from "./components/AnalyticsSummaryCard";

const ALL_PRODUCTS = generateProducts(5000);

function App() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [unrelatedCount, setUnrelatedCount] = useState(0);

  function resetFilters() {
    setSearchQuery("");
    setSelectedCategory("All");
  }

  const analytics = useMemo(() => {
    const normalizedQuery = searchQuery.trim().toLowerCase();

    const matchedItems = ALL_PRODUCTS.filter((product) => {
      const matchesCategory =
        selectedCategory === "All" || product.category === selectedCategory;
      const matchesName = product.name
        .toLowerCase()
        .includes(normalizedQuery);
      return matchesCategory && matchesName;
    });

    const totalValue = matchedItems.reduce(
      (sum, item) => sum + item.price,
      0
    );

    const averagePrice =
      matchedItems.length > 0 ? Math.round(totalValue / matchedItems.length) : 0;

    return {
      matchedCount: matchedItems.length,
      totalValue,
      averagePrice,
      previewItems: matchedItems.slice(0, 6),
    };
  }, [searchQuery, selectedCategory]);

  return (
    <div className="container">
      <h1>Caching Calculations (useMemo)</h1>

      <div className="card">
        <h2>App Level Status (Unrelated State)</h2>
        <p>
          Catalog Size: <strong>{ALL_PRODUCTS.length} products</strong>
        </p>
        <p>
          Unrelated Counter: <strong>{unrelatedCount}</strong>
        </p>

        <div className="button-group">
          <button
            className="secondary"
            onClick={() => setUnrelatedCount((prev) => prev + 1)}
          >
            Increment Unrelated Counter (+1)
          </button>
        </div>
      </div>

      <ProductFilterCard onCategoryChange="{setSelectedCategory}" onResetFilters="{resetFilters}" onSearchChange="{setSearchQuery}" searchQuery="{searchQuery}" selectedCategory="{selectedCategory}"/>

      <AnalyticsSummaryCard analytics="{analytics}" selectedCategory="{selectedCategory}"/>
    </div>
  );
}

export default App;
```

### 3. Controlled Filter Component

File: `src/components/ProductFilterCard.jsx`

```jsx
function ProductFilterCard({
  searchQuery,
  selectedCategory,
  onSearchChange,
  onCategoryChange,
  onResetFilters,
}) {
  return (
    <div className="card">
      <h2>1. Filter 5,000 Products</h2>

      <div className="form-group">
        <label htmlFor="product-search">Search Brand or Model</label>
        <input
          id="product-search"
          type="text"
          value={searchQuery}
          onChange={(event) => onSearchChange(event.target.value)}
          placeholder="e.g. ASUS, Sony, Model-42..."
        />
      </div>

      <div className="form-group">
        <label htmlFor="product-category">Category</label>
        <select
          id="product-category"
          value={selectedCategory}
          onChange={(event) => onCategoryChange(event.target.value)}
        >
          <option value="All">All Categories</option>
          <option value="Laptops">Laptops</option>
          <option value="Monitors">Monitors</option>
          <option value="Keyboards">Keyboards</option>
          <option value="Audio">Audio</option>
        </select>
      </div>

      <div className="button-group">
        <button type="button" className="secondary" onClick={onResetFilters}>
          Reset Filters
        </button>
      </div>
    </div>
  );
}

export default ProductFilterCard;
```

### 4. Memoized Analytics Display Component

File: `src/components/AnalyticsSummaryCard.jsx`

```jsx
function AnalyticsSummaryCard({ analytics, selectedCategory }) {
  const { matchedCount, totalValue, averagePrice, previewItems } = analytics;

  return (
    <div className="card">
      <h2>2. Cached Analytics Summary</h2>

      <div className="stats-grid">
        <div className="stat-box">
          <span className="stat-label">Matches</span>
          <span className="stat-value">{matchedCount}</span>
        </div>

        <div className="stat-box">
          <span className="stat-label">Total Value</span>
          <span className="stat-value">${totalValue.toLocaleString()}</span>
        </div>

        <div className="stat-box">
          <span className="stat-label">Avg Price</span>
          <span className="stat-value">${averagePrice}</span>
        </div>
      </div>

      <div className="status-banner">
        <strong>Memoized Output:</strong> Showing top {previewItems.length} of{" "}
        {matchedCount} matching items in <strong>{selectedCategory}</strong>.
      </div>

      {previewItems.length > 0 && (
        <ul className="product-list">
          {previewItems.map((item) => (
            <li key={item.id} className="product-item">
              <span>
                {item.name} ({item.category})
              </span>
              <span className="product-price">${item.price}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default AnalyticsSummaryCard;
```

## How It Works

1. `ALL_PRODUCTS` is created once at module load time outside `App`, generating 5,000 products without regenerating on subsequent renders.
2. `App.jsx` stores `searchQuery`, `selectedCategory`, and `unrelatedCount` in `useState`.
3. `useMemo` filters `ALL_PRODUCTS`, aggregates `totalValue` and `averagePrice`, and slices the top 6 matches into `analytics`—re-running only when `searchQuery` or `selectedCategory` changes.
4. Clicking **Increment Unrelated Counter (+1)** triggers a re-render of `App.jsx`, but React skips the 5,000-item computation and returns the cached `analytics` object immediately.
5. `ProductFilterCard` updates filter state via controlled props, while `AnalyticsSummaryCard` renders the cached statistics and preview list.

## Key Takeaways

- `useMemo` caches the **return value** of a calculation and only recomputes it when one of its listed dependencies changes.
- Always include every reactive state or prop value used inside `useMemo` in its dependency array to avoid stale calculations.
- Reserve `useMemo` for genuinely expensive computations (large array filtering/sorting, heavy math) or referential stability—simple string or arithmetic operations are faster without memoization overhead.

## Technologies Used

- React 19
- Vite
- JavaScript (ES6+)
- CSS3
- React `useMemo` & `useState` Hooks

## Status

Completed - Day 137