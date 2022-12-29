import Banner from "../Layout/Banner";
import Footer from "../Layout/Footer";
import FormularioAchei from "../Layout/FormularioAchei";

function Acheiumdocumento(){
    return(
        <>
            <Banner titulo="Achei um documento" />
            <FormularioAchei/>
            <br/>
            <br/>
            <Footer/>
        </>
    )
}
export default Acheiumdocumento;