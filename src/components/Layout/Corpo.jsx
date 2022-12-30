import Categorias from "./Categorias";
import styles from './Corpo.module.css'
import Perguntas from "./Perguntas";


function Corpo(){
    return(
        <div>
           <h1 className={styles.nossaCategoria}>NOSSAS CATEGORIAS</h1> 
           <Categorias/>
           <Perguntas/>
        </div>
    );
}
export default Corpo;