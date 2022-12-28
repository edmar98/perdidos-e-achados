import styles from './Footer.module.css'
import playstore from '../../img/disponivel-google-play.png'
import Applestore from '../../img/disponivel-na-app-store.png'

function Footer(){
    return(
        <div className={styles.footer}>
            <div className={styles.esquerda}>
                <h1>Sobre nós</h1>
                <p>Perdidos e Achados é uma plataforma para os cidadãos encontrarem seus documentos que são perdidos,
                    ou extraviados na via pública
                </p>
                <p>ENDEREÇO</p>
                <p>ANGOLA - LUANDA</p>
                <p>TALATONA - BELAS BUSINESS PARK</p>
                <p>TEL: 900 000 000, 910 000 000</p>
                <p>EMAIL: perdidoseachados@gmail.com</p>
            </div>
            <div className={styles.direita}>
                <h1>Faça já o Download</h1>
                <p>Perdeu ou encontrou algo? Partilhe ou Procure aqui! 
                    Mais de 2.000 documentos foram achados e estão 
                    disponíveis para serem recuperados no aplicativo. 
                    Baixe já o aplicativo para iOS ou Android.
                </p>
                <div>
                    <img src={playstore} alt=""/>
                </div>
                <div>
                    <img src={Applestore} alt=""/>
                </div>
            </div>
        </div>
    )
}
export default Footer;