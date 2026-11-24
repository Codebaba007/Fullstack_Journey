

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