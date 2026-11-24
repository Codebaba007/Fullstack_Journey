// src/components/AnalyticsSummaryCard.jsx

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