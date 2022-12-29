import Input from "../form/Input";
import Select from "../form/Select";
import Submit from "../form/Submit";
import styles from './FormularioPerdi.module.css'

function FormularioPerdi(){
    return(
        <form className={styles.forma}>
            <h1>Cadastrar documento perdido</h1>
            <div className={styles.dois}>
                <Input
                    type="text"
                    text="Nome de quem perdeu"
                    name="name"
                    placeholder=" Insira o nome de quem perdeu"
                />
                <Input
                    type="text"
                    text="Número do documento"
                    name="name"
                    placeholder=" Insira o número do documento"
                />
            </div>
            <div className={styles.dois}>
                <Select name="Tipo de documento" text="Selecione o tipo de documento"/>
                
                <Input
                    type="text"
                    text="Sitio onde perdeu"
                    name="name"
                    placeholder=" Insira o sitio onde foi encontrado"
                />
            </div>
            <div className={styles.dois}>
                <Input
                    type="text"
                    text="Data em que foi perdido"
                    name="name"
                    placeholder=" dd/mm/YY"
                />
                <Input
                    type="text"
                    text="Nacionalidade"
                    name="name"
                    placeholder=" Insira a nacionalidade do proprietário do documento"
                />
                
            </div>
            <div className={styles.dois}>
                
                <Input
                    type="text"
                    text="Telefone para contacto"
                    name="name"
                    placeholder=" Insira o seu contacto telefónico para possível contacto"
                />
                <Input
                        type="text"
                        text="E-mail para contacto"
                        name="name"
                        placeholder=" Insira o seu E-mail para possível contacto"
                    />
            </div>
            <br/>
            <div className={styles.btnForm}>
                <Submit titulo="Cadastrar"/>
            </div>
            <br/>
            <br/>
            
            
        </form>
    )
}
export default FormularioPerdi;