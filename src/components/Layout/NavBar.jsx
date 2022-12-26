import {Link} from 'react-router-dom'
import styles from './NavBar.module.css'

import logo from '../../img/Logo.png'

function NavBar(){
    return(
        <nav className={styles.navbar}>
            <Link to="/">
                <img style={{width: 100, height: 100}} src={logo} alt="" />
            </Link>
            <ul className={styles.menu}>
                <li className={styles.item}>
                    <Link to="/">Home</Link>
                </li>
                <li className={styles.item}>
                    <Link to="/Acheiumdocumento">Achei um documento</Link>
                </li>
                <li className={styles.item}>
                    <Link to="/Perdiumdocumento">Perdi um documento</Link>
                </li>
                <li className={styles.item}>
                    <Link to="/Quemsomos">Quem somos</Link>
                </li>
            </ul>
        </nav>
    )
}
export default NavBar;