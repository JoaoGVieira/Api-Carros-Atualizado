import { Link } from  "react-router-dom"
import styles from './home.module.css'
import Popular from './imagens/popular.png'
import Luxo from './imagens/luxo.png'
import Esportivo from './imagens/esportivo.png'
import Offroad from './imagens/offroad.png'

function Home() {
    return (
        <body>
            
            <Link to="/register">
    <button className={styles.LoginButton}>Logar</button>
    </Link>

    <Link to="/login">
    <button className={styles.Cadbutton}>Cadastro</button>
    </Link>
    <div className={styles.DivPai}>
    <Link to="/popular">
        <div className={styles.popularmargin}>
            <img className={styles.Popular} src={Popular} />
            <p className={styles.CarroPopular}>Carro Popular</p>
        </div>
    </Link>
 
    <Link to="/esportivo">
        <div className={styles.esportivomargin}>
            <img className={styles.Esportivo} src={Esportivo} />
            <p className={styles.CarroEsportivo}>Carro Esportivo</p>
        </div>
    </Link>

    <Link to="/luxo">
        <div className={styles.luxomargin}>
            <img className={styles.Luxo} src={Luxo} />
            <p className={styles.CarroDeLuxo}>Carro de luxo</p>
        </div>
    </Link>
        
    <Link to="/offroad">
        <div  className={styles.offroadmargin}>
            <img className={styles.Offroad} src={Offroad} />
            <p className={styles.CarroOffroad}>Carro Offroad</p>
        </div>
    </Link>

        

    </div>
    </body>
    )
}

export default Home