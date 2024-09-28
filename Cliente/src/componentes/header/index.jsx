import { Link } from "react-router-dom"
import styles from './Header.module.css'
import Logo from './images/logo.png'

function Header() {
    return (
        <header className={styles.header}>
            <Link to="/">
            <img src={Logo} alt="" className={styles.logo}/>
            <p className={styles.name}>HighClassAuto</p> 
            </Link>
        </header>

    )    
}

export default Header