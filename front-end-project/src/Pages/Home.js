import Letras from '../img/MsgNEnviada.gif'
import '../Styles/Home.css'

function Home(){
    return(
        <div>
            <img alt="Mensagem Não Enviada" src={Letras} decoding="async" className='Letras'/>
        </div>
        
    )
}

export default Home