import Input from "../form/Input";
import Select from "../form/Select";

import styles from './FormularioPerdi.module.css'

import Axios from "axios"
import React, {useState} from "react";



function FormularioPerdi(){

    const [values, setValues] = useState();

const handleChangeValues = (value) => {
    setValues((prevValue) => ({
        ...prevValue,
        [value.target.name]: value.target.value,
    }));
   
};


const handleClickButton = () =>{
    Axios.post("http://localhost:3001/registerDocPerdido", {
        NomeDoc: values.NomeDoc,
        NumeroDoc: values.NumeroDoc,
        Tipo: values.Tipo,
        Sitio: values.Sitio,
        Data: values.Data,
        Nacionalidade: values.Nacionalidade,
        Telefone: values.Telefone,
        Email: values.Email,
    }).then((response) => {
        console.log(response);
    });
};



    return(
        <form className={styles.forma}>
            <h1>Cadastrar documento perdido</h1>
            <div className={styles.dois}>
                <Input
                    type="text"
                    text="Nome de quem perdeu"
                    name="NomeDoc"
                    placeholder=" Insira o nome de quem perdeu"
                    handleOnchange = {handleChangeValues}
                />
                <Input
                    type="text"
                    text="Número do documento"
                    name="NumeroDoc"
                    placeholder=" Insira o número do documento"
                    handleOnchange = {handleChangeValues}
                />
            </div>
            <div className={styles.dois}>
                <Select name="Tipo" text="Selecione o tipo de documento"
                handleOnchange = {handleChangeValues}
                />
                
                
                <Input
                    type="text"
                    text="Sitio onde perdeu"
                    name="Sitio"
                    placeholder=" Insira o sitio onde foi encontrado"
                    handleOnchange = {handleChangeValues}
                />
            </div>
            <div className={styles.dois}>
                <Input
                    type="text"
                    text="Data em que foi perdido"
                    name="Data"
                    placeholder=" dd/mm/YY"
                    handleOnchange = {handleChangeValues}
                />
                <Input
                    type="text"
                    text="Nacionalidade"
                    name="Nacionalidade"
                    placeholder=" Insira a nacionalidade do proprietário do documento"
                    handleOnchange = {handleChangeValues}
                />
                
            </div>
            <div className={styles.dois}>
                
                <Input
                    type="text"
                    text="Telefone para contacto"
                    name="Telefone"
                    placeholder=" Insira o seu contacto telefónico para possível contacto"
                    handleOnchange = {handleChangeValues}
                />
                <Input
                        type="text"
                        text="E-mail para contacto"
                        name="Email"
                        placeholder=" Insira o seu E-mail para possível contacto"
                        handleOnchange = {handleChangeValues}
                    />
            </div>
            <br/>
            <div className={styles.btnForm}>
                    <button onClick={() =>
                    handleClickButton()}
                    >Cadastrar</button>
                </div>
            <br/>
            <br/>
            
            
        </form>
    )
}
export default FormularioPerdi;