import styles from './Box.module.css'

function Box({foto, titulo, descricao}){
    return(
        <div className={styles.caixa}>
            <div className={styles.foto}>
                <img className={styles.ft} src={foto} alt=""/>
            </div>
            <div className={styles.info}>
                <h2 className={styles.titulo}>{titulo}</h2>
                <p className={styles.paragrafoBox}>{descricao}</p>
                <button className={styles.btnVerMais}>Ver mais</button>
            </div>   
        </div>
    )
}
export default Box;