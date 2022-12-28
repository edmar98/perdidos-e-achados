import styles from './Perguntas.module.css'

function Perguntas(){
    return(
        <div className={styles.Perguntas}>
            <div className={styles.box2}>
                <h1 className={styles.cabecalho}>Perguntas e Respostas</h1>
            </div>
            <div className={styles.tabela}>
                <div className={styles.pergunta}>
                    <h2>O que fazer após constatar furto, roubo, extravio ou perda de documentos ?</h2>
                </div>
                <div className={styles.resposta}>
                    <p>Registro no portal atraves do menu documento, submenu registar documento perdido.</p>
                    <p>Comunicar os órgãos de proteção como a policia nacional, e pesquesar regularmente no portal, na colocque o seu numero de documento, e o tipo.</p>
                </div>
                <div className={styles.pergunta}>
                    <h2>O que fazer após encontrar um documento na via pública ?</h2>
                </div>
                <div className={styles.resposta}>
                    <p>Entregue as autoridades, centro comerciais, Igrejas, agencias bancarias ou instituicoes mais proximas.</p>
                    <p>Estes deveram cadastrar no portal para que possa ser encontrado pelo proprietario.</p>
                </div>
                <div className={styles.pergunta}>
                    <h2>O que acontece depois de registrar um documento encontrado ?</h2>
                </div>
                <div className={styles.resposta}>
                    <p>Ele estara disponivel no sistema para que possa ser localizado pelo proprietario.</p>
                </div>
            </div>
        </div>
    )
}
export default Perguntas;