import styles from './Banner.module.css'


function Banner({titulo}){
    return(
        <div className={styles.banner}>
            <h1 className={styles.tituloBanner}>{titulo}</h1>
        </div>
    )
}
export default Banner;