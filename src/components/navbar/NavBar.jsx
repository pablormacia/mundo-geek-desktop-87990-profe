import CartWidget from "../cart-widget/CartWidget"
import styles from './NavBar.module.css'
import logo from '../../assets/logo.png'
import { NavLink } from "react-router-dom"

const NavBar = () => {
    console.log("Componente Navbar montado")
    return(
        <div className={styles.container}>
            <div className={styles.logoContainer}> 
                <img src={logo} alt="Logo Mundo Geek" />
            </div>
            
            <ul className={styles.navBarItemsContainer}>
                <NavLink to="/"><li>Home</li></NavLink>    
                <NavLink to="/categorias"><li>Categorías</li></NavLink>
                <li>Contacto</li>
            </ul>
            <CartWidget />
        </div>
    )
}

export default NavBar