import '../Styles/Navbar.css'
import { Link } from "react-router-dom"

import Logo from '../img/Postit.png'
import { RiMenu3Fill } from 'react-icons/ri'


function Navbar({ setMenuIsVisible }) {
    

    return(
        <header className='menu'>
            <img src={Logo} alt='Logo' title='Post It'/>
            
            <nav className='nav-menu'> 
                <Link to="/">HOME</Link>
                <Link to="/Apoie">APOIE</Link>
                <Link to="/Sobre">SOBRE</Link>
                <Link to="/Termos">TERMOS</Link>                    
            </nav>
            <Link to='/Enviar' className='Enviar'>
                <button className='nav-btn'>
                    ENVIAR
                </button>
            </Link>
            <RiMenu3Fill onClick={() => setMenuIsVisible(true)} className='mobile'/>
           
        </header>        
    );
}

export default Navbar