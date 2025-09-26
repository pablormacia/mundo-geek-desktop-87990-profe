import CartWidget from "./CartWidget"
import styles from './NavBar.module.css'
import logo from '../assets/logo.png'

const NavBar = () => {
    return (
        <div className={styles.container}>
            <div className={styles.imgContainer}>
                <img src={logo} />
            </div>
            <ul className={styles.navBarItemsContainer}>
                <li>Home</li>
                <li>Categorías</li>
                <li>Contacto</li>
            </ul>
            <CartWidget />
        </div>
    )
}

export default NavBar