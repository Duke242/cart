import Link from 'next/link'
import styles from '../styles/NavBar.module.css'
import { NavBarContext } from '../NavBarContext'

export const NavBar = () => (
    <NavBarContext.Consumer>
        {({cart}) => (
            <nav id={styles.nav}>
                <ul>
                    <li><Link href="/">Shop</Link></li>
                    <li><Link href="/cart">Cart</Link></li>
                </ul>
                <div id='total'>🛒: {cart.length}</div>
            </nav>
        )}
    </NavBarContext.Consumer>
)

export default NavBar