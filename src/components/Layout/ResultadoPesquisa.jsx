import styles from './ResultadoPesquisa.module.css'


function ResultadoPesquisa(props){


    return(
        <div className={styles.forma}>
            <h1>Resultado da pesquisa</h1>
            <div className={styles.cimaEsq}>
                <p>Nome: {props.nomePesquisa}</p>
                <p>Tipo de documento: {props.TipoPesquisa}</p>
                <p>Numero do documento: {props.NumeroDoc}</p>
                <p>Sitio onde foi encontrado: {props.Sitio}</p>
                <p>Data que foi encontrado: {props.Data}</p>
            </div>
            <div className={styles.cimaDir}>
                <img src={props.imagem} alt="" style={{width: 300, height: 200}}/>
            </div>
            <div className={styles.baixo}>
                <h1>Dados da pessoa que encontrou</h1>
                <p>nome: {props.nome}</p>
                <p>email: {props.Telefone}</p>
                <p>contacto telefónico: {props.Email}</p>
            </div>
        </div>
    )
}
export default ResultadoPesquisa;