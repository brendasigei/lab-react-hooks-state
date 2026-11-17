function ProductCard({ product, onAddToCart }) {
  return (
    <li className="flex flex-col gap-2 rounded-lg border border-gray-300 p-4">
      <h3 className="text-lg font-semibold">{product.name}</h3>
      <p className="text-sm opacity-70">{product.category}</p>
      <button
        onClick={() => onAddToCart(product)}
        className="rounded bg-green-600 px-3 py-1 text-white hover:bg-green-700"
      >
        Add to Cart
      </button>
    </li>
  );
}

export default ProductCard;