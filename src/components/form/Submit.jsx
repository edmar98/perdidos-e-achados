import styles from './Submit.module.css'

function Submit({titulo}){
    return(
        <div className={styles.botao}>
            <button>{titulo}</button>
        </div>
    )
}
export default Submit;