import {Link} from 'react-router-dom'
import styles from './NavBar.modules.css'

function NavBar(){
    return(
        <nav class={styles.NavBar}>
            <Link to="/">
                <h1><span>Perdidos</span>&Achados</h1>
            </Link>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/Acheiumdocumento">Achei um documento</Link>
                </li>
                <li>
                    <Link to="/Perdiumdocumento">Perdi um documento</Link>
                </li>
                <li>
                    <Link to="/Quemsomos">Quem somos</Link>
                </li>
            </ul>
        </nav>
    )
}
export default NavBar;