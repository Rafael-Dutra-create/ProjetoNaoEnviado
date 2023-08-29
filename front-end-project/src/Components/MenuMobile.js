import { Container } from './styles';
import { IoClose } from 'react-icons/io5'
import '../Styles/Navbar.css'
import { Link } from "react-router-dom"


function MenuMobile({ menuIsVisible, setMenuIsVisible }){
    return(
        <Container isVisible={menuIsVisible}>
            <IoClose size={45} onClick={() => setMenuIsVisible(false)}/>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/Arquivo">Arquivo</Link>
                <Link to="/Sobre">Sobre</Link>
                <Link to="/Termos">Termos</Link>  
                <Link to='/Enviar'className='Enviar'>Enviar</Link>             
            </nav>
            
        </Container>
    );
};

export default MenuMobile