import '../Styles/Navbar.css'

function Navbar() {
    

    return(
        <header className='menu'>
            <h3>Logo</h3>
            <nav>
                <a href="#">Home</a>
                <a href="#">Arquivo</a>
                <a href="#">Sobre</a>
                <a href="#">Termos</a>                    
            </nav>
            <button className='nav-btn'>
                ENVIAR
                </button>
        </header>
    );
}

export default Navbar