import Banner from "../Layout/Banner";
import Detalhes from "../Layout/Detalhes";
import img from '../../img/carta-de-conducao.jpg'
import Perguntas from "../Layout/Perguntas";
import Footer from "../Layout/Footer";

function Cartadeconducao(){
    return(
        <>
            <Banner titulo="Carta de condução"/>

            <Detalhes 
                title="Carta de condução"
                imagem={img}
                p1="A Carta de Condução ou Licença para conduzir, é um valioso instrumento que permite a mobilidade de pessoas e bens, por meio de automóveis."

                p2="Salvo erro, mais de 90% de pessoas de todos os extractos sociais, usam carros como principais meios de transporte. O recurso ao uso desse bem exige porte/posse da Carta de Condução ao condutor."
                
                p3="Muitos cidadãos, motoristas ou condutores têm a Carta de Condução requisito sine qua non para conseguir emprego."

                p4="A perda ou extravio deste documento condiciona a vida de muitas pessoas, famílias e empresas."

                p5="O presente aplicativo facilita uma rápida recuperação em caso de perda ou extravio da Carta de condução."
            />

            <Perguntas/>
            <Footer/>
        </>
    )
}
export default Cartadeconducao;