import Letras from '../img/MsgNEnviada.gif'
import '../Styles/Home.css'


function Home(){
    return(
        <div>
            <div>
                <img alt="Mensagem Não Enviada" src={Letras} decoding="async" className='Letras'/>
            </div>

            <div>
                Campo de busca
            </div>

            <section className='container mx-auto.mt-8'>
                <ul>
                    
                </ul>
            </section>

        </div>      
    )
}

export default Home