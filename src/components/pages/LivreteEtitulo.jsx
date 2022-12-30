import Banner from "../Layout/Banner";
import Detalhes from "../Layout/Detalhes";
import Perguntas from "../Layout/Perguntas";
import Footer from "../Layout/Footer";
import img from '../../img/Livrete-de-carro.jpg'


function LivreteEtitulo(){
    return(
        <>
            <Banner titulo="Livrete e titulo"/>
            <Detalhes 
                title="Livrete e Título"
                imagem={img}
                p1="São documentos de identificação dos bens automóveis e outros equipamentos de grande valor."

                p2="A falta de um destes documentos condiciona o seu uso normal."
                
                p3="Em caso de perda ou extravio do Livrete ou Título, aqui tem a ferramenta informática ideal para localizar e recuperar os documentos de identificação dos seus valiosos meios."
            />

            <Perguntas/>
            <Footer/>
        </>
    )
}
export default LivreteEtitulo;