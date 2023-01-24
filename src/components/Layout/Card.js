import React from "react";
import Styles from './Card.module.css'

function Card(props){
    return(
        <div className={Styles.cardContainer}>
                <p className={Styles.card}><span>Nome:</span> {props.NomeDoc}</p>
                <p className={Styles.card}><span>Número:</span> {props.NumeroDoc}</p>
                <p className={Styles.card}><span>Tipo:</span> {props.Tipo}</p>
                <p className={Styles.card}><span>Sitio:</span> {props.Sitio}</p>
                <p className={Styles.card}><span>Data:</span> {props.Data}</p>
                <p className={Styles.card}><span>Nacionalidade:</span> {props.Nacionalidade}</p>
                <p className={Styles.card}><span>Telefone:</span> {props.Telefone}</p>
                <p className={Styles.card}><span>Email:</span> {props.Email}</p>
        </div>  
    )
}
export default Card;