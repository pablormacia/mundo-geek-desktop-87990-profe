import { useCart } from "../../context/CartContext";

const Cart = () => {
  const { cart, removeFromCart, clearCart, totalPrice } = useCart();

  if (cart.length === 0) return <p>Tu carrito está vacío</p>;

  return (
    <div>
      <h2>Carrito de compras</h2>
      {cart.map(item => (
        <div key={item.id}>
          <h4>{item.name}</h4>
          <p>Cantidad: {item.quantity}</p>
          <p>Subtotal: ${item.price * item.quantity}</p>
          <button onClick={() => removeFromCart(item.id)}>Eliminar</button>
        </div>
      ))}
      <h3>Total: ${totalPrice}</h3>
      <button onClick={clearCart}>Vaciar carrito</button>
    </div>
  );
};

export default Cart;