import React, {useState} from "react";
import Card from "./Card";
import Axios from "axios"
import { useEffect } from "react";

function DocPerdido(){

    const [listdocPerdido, setListdocPerdido] = useState();

    console.log(listdocPerdido);

    useEffect(() => {
        Axios.get("http://localhost:3001/getDocPerdidos").then((response) => {
            setListdocPerdido(response.data);
        });
    }, []);


    return(
        <div className="corpoDocPerdido">
                 {typeof listdocPerdido !== "undefined" && listdocPerdido.map((value) => {
                        return(

                            <Card 
                                key={value.iddocumentoPerdido}
                                listCard={listdocPerdido}
                                setListCard={setListdocPerdido}
                                id={value.iddocumentoPerdido}
                                NomeDoc={value.nomeDoc}
                                NumeroDoc={value.numDoc}
                                Tipo={value.Tipo}
                                Sitio={value.Sitio}
                                Data={value.Data}
                                Nacionalidade={value.Nacionalidade}
                                Telefone={value.Telefone}
                                Email={value.Email}

                            ></Card>
                        );
                    })}
        </div>
    )
}
export default DocPerdido;