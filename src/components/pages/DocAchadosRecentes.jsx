import React from "react";
import Banner from "../Layout/Banner";
import DocAchado from "../Layout/DocAchado";
import DocPerdido from "../Layout/DocPerdido";

function DocAchadoRecente(){
    return(
        <div>
            <Banner titulo="Documentos achados recentes" />
         
            <div className="primeiro">
                <h1 className="titulo">Documentos Achados recentes</h1>
                <DocAchado/>
            </div>
            <div className="segundo">
                <h1 className="titulo">Documentos Perdidos Recentes</h1>
                <DocPerdido/>
            </div>
     
            
           
            
           
        </div>
    )
}
export default DocAchadoRecente;