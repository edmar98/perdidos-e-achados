import Banner from "../Layout/Banner";
import Footer from "../Layout/Footer";
import FormularioAchei from "../Layout/FormularioPerdi";


function Perdiumdocumento(){
    return(
        <>
            <Banner titulo="Perdi um documento" />
            <FormularioAchei/>
            <br/>
            <br/>
            <Footer/>
        </>
    )
}
export default Perdiumdocumento;