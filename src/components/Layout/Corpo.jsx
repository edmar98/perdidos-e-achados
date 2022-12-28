import Boxes from "./Boxes";

import styles from './Corpo.module.css'
import Perguntas from "./Perguntas";


function Corpo(){
    return(
        <div>
           <h1 className={styles.nossaCategoria}>NOSSAS CATEGORIAS</h1> 
           <Boxes/>
           <Perguntas/>
        </div>
    );
}
export default Corpo;