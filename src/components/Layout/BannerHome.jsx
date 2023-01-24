import { Link } from 'react-router-dom';
import styles from './BannerHome.module.css'
import SelectTipo from '../form/SelectTipo';
import InputPesquisa from '../form/InputPesquisa';
import React from "react";




function BannerHome(){

    


     
    return(
        <div className={styles.banner}>
            <h1 className={styles.tituloBanner}>PERDIDOS E ACHADOS</h1>
            <p>Esta plataforma é uma acção de responsabilidade social do grupo empresarial miango enterprise, visando auxiliar os cidadãos
                que tiveram documentos perdidos, roubados ou extraviados. Nesta página o cidadão pode registrar seus documentos perdidos, 
                roubados ou extraviados, facilitando a quem os encontrar a localizar seu titular. Por outro lado, o cidadão que 
                achou algum documento poderá pesquisar se os documentos encontrados foram registrados nessa plataforma; 
                e caso não encontre registro poderá cadastrar o documento achado, contribuindo 
                para que a pessoa que o perdeu encontre a pessoa que achou.
            </p>
            <div className={styles.barraPesquisa}>
                <h1>Encontre seu Documento!</h1>
                <p>Encontre seu documento perdido, use o campo de pesquisa para procurar seu documento.</p>
                <div className={styles.pesquisa} >

                    <InputPesquisa 
                        type="text"
                        name="nomePesquisa"
                        placeholder=" Digite o seu nome completo"
                  
                    />
                    <SelectTipo name="TipoPesquisa" text="Selecione o tipo de documento" 
                  
                    />
                    <Link to="/PaginaPesquisa">
                        <div className={styles.btnForm}>
                            <button 
                            >Pesquisar</button>
                        </div>
                    </Link>
  

   
                    
                </div>
            </div>
            
            

        </div>
    )
}
export default BannerHome;