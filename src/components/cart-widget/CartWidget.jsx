import { useCart } from "../../context/CartContext";

const CartWidget = () => {
    const { totalItems } = useCart();
    return (
        <div>
            <span className="material-icons">shopping_cart</span>{totalItems > 0 && <span>{totalItems}</span>}
        </div>

    )
}

export default CartWidget