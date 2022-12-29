import Input from "../form/Input";
import Select from "../form/Select";
import Submit from "../form/Submit";
import Upload from "../form/Upload";
import styles from './FormularioAchei.module.css'

function FormularioAchei(){
    return(
        <form className={styles.forma}>
            <h1>Cadastrar documento achado</h1>
            <div className={styles.dois}>
                <Input
                    type="text"
                    text="Nome de quem encontrou"
                    name="name"
                    placeholder=" Insira o nome de quem encontrou"
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
                    text="Sitio onde foi encontrado"
                    name="name"
                    placeholder=" Insira o sitio onde foi encontrado"
                />
            </div>
            <div className={styles.dois}>
                <Input
                    type="text"
                    text="Data em que foi encontrado"
                    name="name"
                    placeholder=" dd/mm/YY"
                />
                <Upload 
                    text="Anexa o documento(Foto no formato png ou jpg)"
                    name="name"
                />
            </div>
            <h1>Seus Dados</h1>

            <div className={styles.dois}>
                <Input
                    type="text"
                    text="Seu nome"
                    name="name"
                    placeholder=" Insira o seu nome"
                />
                <Input
                    type="text"
                    text="Seu contacto telefónico"
                    name="name"
                    placeholder=" Insira o seu contacto telefónico"
                />
            </div>
            <div className={styles.dois}>
                <Input
                        type="text"
                        text="Seu E-mail"
                        name="name"
                        placeholder=" Insira o seu E-mail"
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
export default FormularioAchei;