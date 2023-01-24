import Input from "../form/Input";
import Select from "../form/Select";
import Upload from "../form/Upload";
import styles from './FormularioAchei.module.css'

import Axios from "axios"
import api from "../../config/configApi";

import React, {useState} from "react";


function FormularioAchei(){
    const [values, setValues] = useState();


    const [image, setImage] = useState('');
    const [imageName, setImageName] = useState('');

    const saveFile = (e) => {
        setImage(e.target.files[0]);
        setImageName(e.target.files[0].name);
      };

    const handleChangeValues = (value) => {
        setValues((prevValue) => ({
            ...prevValue,
            [value.target.name]: value.target.value,
        }));
       
    };


    const handleClickButton = () =>{
        Axios.post("http://localhost:3001/register", {
            NomeDoc: values.NomeDoc,
            NumeroDoc: values.NumeroDoc,
            Tipo: values.Tipo,
            Sitio: values.Sitio,
            Data: values.Data,
            imagem: values.imagem,
            nome: values.nome,
            telefone: values.telefone,
            email: values.email,
        }).then((response) => {
            console.log(response);
        });
    };

 
    const [status, setStatus] = useState({
        type: '',
        mensagem: ''
    });
    
    const uploadImage = async e => {
        e.preventDefault();
      
        const formData = new FormData();
        formData.append('imagem', image);
        formData.append("imageName", imageName);

        const headers = {
            'headers': {
                'Content-Type': 'text/plain'
            }
        }

        await api.post("/upload-image", formData, headers)
        .then((response) => {
            setStatus({
                type: 'sucess',
                mensagem: response.data.mensagem
            })
        }).catch((err) => {
            if(err.response){
                setStatus({
                    type: 'error',
                    mensagem: err.response.data.mensagem
                });
            }else{
                setStatus({
                    type: 'error',
                    mensagem: "Erro: Tente mais tarde!"
                });
            }
        });
    }


   

  


    return(
        <div>
            {status.type === 'sucess'? <p style={{color: "green"}}>{status.mensagem}</p> : ""}
            {status.type === 'error'? <p style={{color: "red"}}>{status.mensagem}</p> : ""}

            <form className={styles.forma} method="post" encType="multipart/form-data" onSubmit={uploadImage}>
                <h1>Cadastrar documento achado</h1>
                <div className={styles.dois}>
                    <Input
                        type="text"
                        text="Nome de quem encontrou"
                        name="NomeDoc"
                        placeholder=" Insira o nome de quem encontrou"
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
                        text="Sitio onde foi encontrado"
                        name="Sitio"
                        placeholder=" Insira o sitio onde foi encontrado"
                        handleOnchange = {handleChangeValues}
                    />
                </div>
                <div className={styles.dois}>
                    <Input
                        type="text"
                        text="Data em que foi encontrado"
                        name="Data"
                        placeholder=" dd/mm/YY"
                        handleOnchange = {handleChangeValues}
                    />
                    <Upload 
                        text="Anexa o documento(Foto no formato png ou jpg)"
                        name="imagem"
                        handleOnchange ={saveFile}
                    />
                </div>
                <h1>Seus Dados</h1>

                <div className={styles.dois}>
                    <Input
                        type="text"
                        text="Seu nome"
                        name="nome"
                        placeholder=" Insira o seu nome"
                        handleOnchange = {handleChangeValues}
                    />
                    <Input
                        type="text"
                        text="Seu contacto telefónico"
                        name="telefone"
                        placeholder=" Insira o seu contacto telefónico"
                        handleOnchange = {handleChangeValues}
                    />
                </div>
                <div className={styles.dois}>
                    <Input
                            type="text"
                            text="Seu E-mail"
                            name="email"
                            placeholder=" Insira o seu E-mail"
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
            </div>
       
    )
}
export default FormularioAchei;