import { useCart } from "../../context/CartContext";

const ProductDetail = ({product}) => {
  const { addToCart } = useCart();
  return (
    <div>
        <p>{product.title}</p>
        <p>{product.price}</p>
        <button onClick={() => addToCart(product, 1)}>
        Agregar al carrito
      </button>
    </div>
  )
}

export default ProductDetail