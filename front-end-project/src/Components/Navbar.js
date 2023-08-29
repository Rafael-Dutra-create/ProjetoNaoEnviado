import '../Styles/Navbar.css'
import { Link } from "react-router-dom"

import Logo from '../img/Postit.png'
import { RiMenu3Fill } from 'react-icons/ri'


function Navbar({ setMenuIsVisible }) {
    

    return(
        <header className='menu'>
            <img src={Logo} alt='Logo' title='Post It'/>
            
            <nav className='nav-menu'> 
                <Link to="/">Home</Link>
                <Link to="/Arquivo">Arquivo</Link>
                <Link to="/Sobre">Sobre</Link>
                <Link to="/Termos">Termos</Link>                    
            </nav>
            <button className='nav-btn'>
                <Link to='/Enviar' className='Enviar'>Enviar</Link>
            </button>
            <RiMenu3Fill onClick={() => setMenuIsVisible(true)} className='mobile'/>
           
        </header>        
    );
}

export default Navbar