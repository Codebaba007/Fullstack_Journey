// src/App.jsx

import { useMemo, useState } from "react";
import "./App.css";
import { generateProducts } from "./data/generateProducts";
import ProductFilterCard from "./components/ProductFilterCard";
import AnalyticsSummaryCard from "./components/AnalyticsSummaryCard";

// Generated once outside the component so the base array reference never changes
const ALL_PRODUCTS = generateProducts(5000);

function App() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [unrelatedCount, setUnrelatedCount] = useState(0);

  function resetFilters() {
    setSearchQuery("");
    setSelectedCategory("All");
  }

  // Expensive filtering + aggregation cached by useMemo
  // Re-runs ONLY when searchQuery or selectedCategory changes
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

      <ProductFilterCard
        searchQuery={searchQuery}
        selectedCategory={selectedCategory}
        onSearchChange={setSearchQuery}
        onCategoryChange={setSelectedCategory}
        onResetFilters={resetFilters}
      />

      <AnalyticsSummaryCard
        analytics={analytics}
        selectedCategory={selectedCategory}
      />
    </div>
  );
}

export default App;