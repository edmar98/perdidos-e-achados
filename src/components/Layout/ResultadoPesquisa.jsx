import styles from './ResultadoPesquisa.module.css'
import foto from '../../img/a.jpg'

function ResultadoPesquisa({nome, tipo, numero, sitio, data, nomeE, emailE, telE}){
    return(
        <div className={styles.forma}>
            <h1>Resultado da pesquisa</h1>
            <div className={styles.cimaEsq}>
                <p>Nome: {nome}</p>
                <p>Tipo de documento: {tipo}</p>
                <p>Numero do documento: {numero}</p>
                <p>Sitio onde foi encontrado: {sitio}</p>
                <p>Data que foi encontrado: {data}</p>
            </div>
            <div className={styles.cimaDir}>
                <img src={foto} alt="" style={{width: 300, height: 200}}/>
            </div>
            <div className={styles.baixo}>
                <h1>Dados da pessoa que encontrou</h1>
                <p>nome: {nomeE}</p>
                <p>email: {emailE}</p>
                <p>contacto telefónico: {telE}</p>
            </div>
        </div>
    )
}
export default ResultadoPesquisa;