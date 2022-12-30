import BannerHome from "../Layout/BannerHome";
import Footer from "../Layout/Footer";
import ResultadoPesquisa from "../Layout/ResultadoPesquisa";

function PaginaPesquisa(){
    return(
        <>
            <BannerHome/>
            <ResultadoPesquisa/>
            <br/>
            <br/>
            <Footer/>
        </>
    )
}
export default PaginaPesquisa;