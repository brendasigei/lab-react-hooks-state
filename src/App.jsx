import { useState } from "react";
import DarkModeToggle from "./components/DarkModeToggle";
import ProductList from "./components/ProductList";
import Cart from "./components/Cart";

// Sample data: replace with your starter data if it already exists
const products = [
  { id: 1, name: "Milk", category: "Dairy" },
  { id: 2, name: "Cheese", category: "Dairy" },
  { id: 3, name: "Apple", category: "Produce" },
  { id: 4, name: "Carrot", category: "Produce" },
  { id: 5, name: "Chicken", category: "Meat" },
];

function App() {
  const [darkMode, setDarkMode] = useState(false); // light/dark theme
  const [cart, setCart] = useState([]); // items added to the cart
  const [category, setCategory] = useState("All"); // selected filter

  // Flip between light and dark mode
  function handleToggleDarkMode() {
    setDarkMode((prev) => !prev);
  }

  // Add an item to the cart, skipping items already in it
  function handleAddToCart(product) {
    if (!cart.some((item) => item.id === product.id)) {
      setCart((prev) => [...prev, product]);
    }
  }

  return (
    <div
      data-theme={darkMode ? "dark" : "light"}
      className={`min-h-screen p-6 ${
        darkMode ? "bg-gray-900 text-white" : "bg-white text-gray-900"
      }`}
    >
      <DarkModeToggle darkMode={darkMode} onToggle={handleToggleDarkMode} />
      <ProductList
        products={products}
        category={category}
        onCategoryChange={setCategory}
        onAddToCart={handleAddToCart}
      />
      <Cart cart={cart} />
    </div>
  );
}

export default App;