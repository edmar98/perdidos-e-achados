import React, {useState} from "react";
import Axios from "axios"
import { useEffect } from "react";
import CardAchado from "./CardAchado";

function DocAchado(){

    const [listdocAchados, setListdocAchados] = useState();
   

    console.log(listdocAchados);

    useEffect(() => {
        Axios.get("http://localhost:3001/getDocAchado").then((response) => {
            setListdocAchados(response.data);
        });
    }, []);


    return(
        <div className="corpoDocAchado">
                 {typeof listdocAchados !== "undefined" && listdocAchados.map((value) => {
                        return(

                            <CardAchado 
                                key={value.iddocumentoAchado}
                                listCard={listdocAchados}
                                setListCard={setListdocAchados}
                                id={value.iddocumentoAchado}
                                NomeDoc={value.nomeDoc}
                                NumeroDoc={value.numeroDoc}
                                Tipo={value.tipo}
                                Sitio={value.sitio}
                                Data={value.data}
                                imagem={value.foto}
                                nome={value.nome}
                                Telefone={value.telefone}
                                Email={value.email}

                            ></CardAchado>
                        );
                    })}
        </div>
    )
}
export default DocAchado;