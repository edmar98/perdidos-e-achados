import styles from './Detalhes.module.css'

function Detalhes({title, imagem, p1, p2, p3, p4, p5}){
    return(
        <div className={styles.detalhes}>
            <div className={styles.esqDetalhes}>
                <h1>{title}</h1>
                <div className={styles.fotografia}>
                    <img src={imagem} alt="" style={{width: 400, height: 250}}/>
                </div>
            </div>
            <div className={styles.dirDetalhes}>
                <p>{p1}</p>
                <p>{p2}</p>
                <p>{p3}</p>
                <p>{p4}</p>
                <p>{p5}</p>
            </div>
        </div>
    )
}
export default Detalhes;