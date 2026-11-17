function Cart({ cart }) {
  return (
    <div>
      <h2 className="mb-2 text-xl font-bold">Cart</h2>
      <ul className="space-y-1">
        {cart.map((item) => (
          <li key={item.id}>{item.name} is in your cart.</li>
        ))}
      </ul>
    </div>
  );
}

export default Cart;