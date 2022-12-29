import styles from './ConteudoQuemsomos.module.css'
import img from '../../img/grupo.png'


function ConteudoQuemsomos(){
    return(
        <div className={styles.conteudo}>
            <div className={styles.esq}>
                <div className={styles.imagem}>
                    <img src={img} alt="" style={{width:300, height:300}}/>
                </div>
                
                <h1>Missão</h1>
                <p>Promover a necessidade de Preservar o Bem Comum.</p>
                <h1>Visão</h1>
                <p>Alcançar um clima social de satisfação colectiva, onde cada um sinta a necessidade
                    de ajudar o próximo - o bem-estar individual depende do bem-estar colectivo.
                </p>
  
            </div>
            <div className={styles.dir}>
                <h1>Quem Somos</h1>
                <p>Somos uma Organização Não Governamental, comprometida com PRESERAÇAO DO BEM COMUM
                em Angola.
                </p>
                <br/>
                <p>Acreditamos que a resolução das necessidades colectivas é a via para a
                    satisfação individual, para o alcance do BEM ESTAR social.
                </p>
                <br/>
                <p>Movidos pelos valores elementares da humanidade “amar e ajudar o próximo”, 
                    juntamo-nos aos Organismos do Estado na tarefa de “resolver os problemas do povo”.
                </p>
                <br/>
                <p>
                    Abraçando o apelo do Chefe de Estado, que “.... todas essas forças vivas de Angola 
                    têm de ser chamadas a contribuir para a concepção e execução das políticas públicas
                    que os Órgãos de Soberania venham a aprovar” Discurso de tomada de posse do 
                    PR João Lourenço.
                </p>
                <br/>
                <p>Sendo parte das forças vivas da nação angolana, tocados pela chamada 
                    do Presidente da República, estamos a adicionar nossa contribuição 
                    para resolver nossos problemas e promover o nosso Bem-Estar Comum.
                </p>
                <br/>
                <p>"quem sabe que deve fazer o bem e não o faz comete....... "</p>
                <br/>
            </div>
           
    </div>
    )
}
export default ConteudoQuemsomos;