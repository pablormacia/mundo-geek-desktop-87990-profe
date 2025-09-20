import CartWidget from "./CartWidget"

const NavBar = () => {
    return(
        <div>
            <ul>
                <li>Home</li>
                <li>Categorías</li>
                <li>Contacto</li>
            </ul>
            <CartWidget />
        </div>
    )
}

export default NavBar