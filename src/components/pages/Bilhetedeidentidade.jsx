import Banner from "../Layout/Banner";
import Detalhes from "../Layout/Detalhes";
import imge from '../../img/bi.jpg'
import Perguntas from "../Layout/Perguntas";
import Footer from "../Layout/Footer";

function Bilhetedeidentidade(){
    return(
        <>
            <Banner titulo="Bilhete de identidade"/>

            <Detalhes 
                title="Bilhete de identidade"
                imagem={imge}
                p1="O B.I, é o principal documento do cidadão. É o documento que permite o exercício pleno dos direitos sociais, políticos, económicos e jurídicos. É ainda o documento que permite o acesso à todos os outros documentos e aos bens e serviços."

                p2="Pela sua importância e valor transversal, o B.I., deve estar sempre ao alcance do cidadão."
                
                p3="aplicativo vai permitir que em caso de perda ou extravio do seu B.I, a sua recuperação seja feita por um click."
            />

            <Perguntas/>
            <Footer/>
        </>
    )
}
export default Bilhetedeidentidade;