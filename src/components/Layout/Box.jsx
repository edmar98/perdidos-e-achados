import styles from './Box.module.css'


function Box(){
    return(
        <div className={styles.box}>
            <h1>PERDIDOS E ACHADOS</h1>
            <p>Esta plataforma é uma acção de responsabilidade social do grupo empresarial miango enterprise, visando auxiliar os cidadãos
                que tiveram documentos perdidos, roubados ou extraviados. Nesta página o cidadão pode registrar seus documentos perdidos, 
                roubados ou extraviados, facilitando a quem os encontrar a localizar seu titular. Por outro lado, o cidadão que 
                achou algum documento poderá pesquisar se os documentos encontrados foram registrados nessa plataforma; 
                e caso não encontre registro poderá cadastrar o documento achado, contribuindo 
                para que a pessoa que o perdeu encontre a pessoa que achou.
            </p>
            <div className={styles.pesquisa}>
                <input type="text"/>
                <button>Pesquisar</button>
            </div>
            

        </div>
    )
}
export default Box;