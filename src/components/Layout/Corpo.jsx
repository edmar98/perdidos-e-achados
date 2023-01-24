import Categorias from "./Categorias";
import styles from './Corpo.module.css'
import Perguntas from "./Perguntas";
import { Link } from 'react-router-dom';

function Corpo(){
    return(
        <div>
           <h1 className={styles.nossaCategoria}>NOSSAS CATEGORIAS</h1> 
           <Categorias/>
           <div className={styles.btnDocRecentes}>
                    <Link to="/DocAchadosRecentes">
                        <button>Ver Documentos Achados recentes</button>
                   </Link>
                    
            </div>
           <Perguntas/>
        </div>
    );
}
export default Corpo;