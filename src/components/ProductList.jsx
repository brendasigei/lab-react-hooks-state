import ProductCard from "./ProductCard";

function ProductList({ products, category, onCategoryChange, onAddToCart }) {
  // Show everything for "All", otherwise only matching products
  const visibleProducts =
    category === "All"
      ? products
      : products.filter((product) => product.category === category);

  return (
    <div className="mb-6">
      <select
        value={category}
        onChange={(e) => onCategoryChange(e.target.value)}
        className="mb-4 rounded border border-gray-300 p-2"
      >
        <option value="All">All</option>
        <option value="Produce">Produce</option>
        <option value="Dairy">Dairy</option>
        <option value="Meat">Meat</option>
      </select>

      <ul className="grid grid-cols-1 gap-4 sm:grid-cols-3">
        {visibleProducts.length === 0 ? (
          <li>No products available</li>
        ) : (
          visibleProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onAddToCart={onAddToCart}
            />
          ))
        )}
      </ul>
    </div>
  );
}

export default ProductList;