import React from "react";
import Styles from './CardAchado.module.css'




function CardAchado(props){
   
    const url="http://localhost:3001/files/";
    return(
        
        <div className={Styles.cardContainer}>
            <div className={Styles.img}>
                <img className={Styles.ft} src={url+props.imagem} alt=""/>
            </div>
            <div>
                
                <p className={Styles.card}><span>Nome:</span> {props.NomeDoc}</p>
                <p className={Styles.card}><span>Número do documento:</span> {props.NumeroDoc}</p>
                <p className={Styles.card}><span>Tipo:</span> {props.Tipo}</p>
                <p className={Styles.card}><span>Sitio onde foi encontrado:</span> {props.Sitio}</p>
                <p className={Styles.card}><span>Data em que foi encontrado:</span> {props.Data}</p>
                <h3>Dados da pessoa que encontrou</h3>
                <p className={Styles.card}><span>Nome:</span> {props.nome}</p>
                <p className={Styles.card}><span>Telefone:</span> {props.Telefone}</p>
                <p className={Styles.card}><span>Email:</span> {props.Email}</p>
            </div>
    
        </div>  
    )
}
export default CardAchado;