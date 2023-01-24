import Box from './Box';

import styles from './Categorias.module.css'
import fotoBi from '../../img/bi.jpg'
import fotoPassaPorte from '../../img/passaporte.jpg'
import fotoLivrete from '../../img/Livrete-de-carro.jpg'
import fotoCarta from '../../img/carta-de-conducao.jpg'


function Categorias(){
    return(
        <div className={styles.Container}>
            <Box foto={fotoBi} 
                titulo="Bilhete de identidade" 
                descricao="O B.I, é o principal documento do cidadão. É o documento que permite o exercício 
                            pleno dos direitos sociais, políticos, económicos e jurídicos..."
                caminho="/Bilhetedeidentidade"
            />
            <Box foto={fotoPassaPorte} 
                titulo="Passaporte" 
                descricao="O documento de eleição para uso internacional é o Passaporte..."
                caminho="/Passaporte"
            />

            <Box foto={fotoLivrete} 
                titulo="Livretes e Títulos" 
                descricao="São documentos de identificação dos bens automóveis e outros equipamentos de grande valor..."
                caminho="/LivreteEtitulo"
            />
            <Box foto={fotoCarta} 
                titulo="Carta de condução" 
                descricao="A Carta de Condução ou Licença para conduzir, é um valioso instrumento que permite a mobilidade de pessoas e bens, por meio de automóveis..."
                caminho="/Cartadeconducao"
            />

        </div>
    )
}
export default Categorias;