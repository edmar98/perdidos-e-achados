import styles from './InputPesquisa.module.css'

function InputPesquisa({type, text, name, placeholder, handleOnchange, value}){
    return(
        <div className={styles.form_control}>
            <input
                type={type}
                name={name}
                id={name}
                placeholder={placeholder}
                onChange={handleOnchange}
                value={value}
            />
        </div>
    )
}
export default InputPesquisa;