import styles from './Upload.module.css'

function Upload({text, name,  handleOnchange, value}){
    return(
        <div className={styles.form_control}>
            <label htmlFor={name}>{text}:</label>
            <input
                type="file"
                name={name}
                id={name}
                onChange={handleOnchange}
                value={value}
            />
        </div>
    )
}
export default Upload;