import '../Styles/Navbar.css'
import { Link } from "react-router-dom"

function Navbar() {
    

    return(
        <header className='menu'>
            <h3>Logo</h3>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/Arquivo">Arquivo</Link>
                <Link to="/Sobre">Sobre</Link>
                <Link to="/Termos">Termos</Link>                    
            </nav>
            <button className='nav-btn'>
                ENVIAR
                </button>
        </header>
    );
}

export default Navbar