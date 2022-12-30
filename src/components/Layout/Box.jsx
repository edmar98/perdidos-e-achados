import { Link } from 'react-router-dom';
import styles from './Box.module.css'

function Box({foto, titulo, descricao, caminho}){
    return(
        <div className={styles.caixa}>
            <div className={styles.foto}>
                <img className={styles.ft} src={foto} alt=""/>
            </div>
            <div className={styles.info}>
                <h2 className={styles.titulo}>{titulo}</h2>
                <p className={styles.paragrafoBox}>{descricao}</p>
                <div>
                    <Link to={caminho}>
                        <button>Ver mais</button>
                   </Link>
                    
                </div>
                
            </div>   
        </div>
    )
}
export default Box;