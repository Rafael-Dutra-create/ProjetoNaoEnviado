import './Styles/App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import React, { useState } from 'react'
import Navbar from './Components/Navbar';
import Home from './Pages/Home';
import Arquivo from './Pages/Arquivo';
import Sobre from './Pages/Sobre';
import Termos from './Pages/Termos';
import Enviar from './Pages/Enviar';
import MenuMobile from './Components/MenuMobile';


function App() {

  const [menuIsVisible, setMenuIsVisible] = useState(false)


  return (
    <React.Fragment>
      <Router>
      <MenuMobile
      menuIsVisible={menuIsVisible}
      setMenuIsVisible={setMenuIsVisible}
      />
      <Navbar setMenuIsVisible={setMenuIsVisible}/>
            
      <Routes>
        <Route exact path='/' element={<Home/>}/>
        <Route path='/Arquivo' element={<Arquivo/>}/>
        <Route path='/Sobre' element={<Sobre/>}/>
        <Route path='/Termos' element={<Termos/>}/>
        <Route path='/Enviar' element={<Enviar/>}/>
      </Routes>
      </Router>
    </React.Fragment>
    
  );
}

export default App;
