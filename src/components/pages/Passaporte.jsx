import img from '../../img/passaporte.jpg'
import Banner from "../Layout/Banner";
import Detalhes from "../Layout/Detalhes";
import Perguntas from "../Layout/Perguntas";
import Footer from "../Layout/Footer";

function Passaporte(){
    return(
        <>
            <Banner titulo="Passaporte"/>

            <Detalhes 
                title="Passaporte"
                imagem={img}
                p1="O documento de eleição para uso internacional é o Passaporte."

                p2="Todas as relações que os cidadãos de um País estabelecem com outras Nações, são, regra geral, concretizadas através da exibição dos passaportes."
                
                p3="A AJ-2025, disponibiliza esse meio para ninguém ver-se privado do seu passaporte, e que os planos com o exterior se realizem em conformidade com a agenda de cada sem constrangimentos. Basta dar um click para encontrar o seu passaporte que se encontra em parte incerta."
            />

            <Perguntas/>
            <Footer/>
        </>
    )
}
export default Passaporte;