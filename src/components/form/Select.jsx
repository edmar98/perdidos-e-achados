import styles from './Select.module.css'

function Select({text, name, options, handleOnchange, value}){
    return(
        <div className={styles.form_control}>
            <label htmlFor={name}>{text}:</label>
            <select name={name} id={name}>
                <option value="Bilhete de identidade">Bilhete de identidade</option>
                <option value="Passaporte">Passaporte</option>
                <option value="Livrete">Livrete</option>
                <option value="Título de propriedade">Título de propriedade</option>
                <option value="Carta de condução">Carta de condução</option>
                <option value="Outro">Outro</option>
            </select>
        </div>
    )
}
export default Select;