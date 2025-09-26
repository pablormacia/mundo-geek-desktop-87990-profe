import styles from './CartWidget.module.css'

const CartWidget = () => {
    return(
        <span className={`material-icons ${styles.shoppingCart}`}>shopping_cart</span>
    )
}

export default CartWidget