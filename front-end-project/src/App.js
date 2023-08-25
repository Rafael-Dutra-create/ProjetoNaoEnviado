import './Styles/App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import React from 'react'
import Navbar from './Components/Navbar';
import Home from './Pages/Home';
import Arquivo from './Pages/Arquivo';
import Sobre from './Pages/Sobre';
import Termos from './Pages/Termos';


function App() {
  return (
    <React.Fragment>
      <Router>
      <Navbar/>
      
      <Routes>
        <Route exact path='/' element={<Home/>}/>
        <Route path='/Arquivo' element={<Arquivo/>}/>
        <Route path='/Sobre' element={<Sobre/>}/>
        <Route path='/Termos' element={<Termos/>}/>
      </Routes>
      </Router>
    </React.Fragment>
    
  );
}

export default App;
