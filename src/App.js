import React from 'react';
import {Routes,Route} from 'react-router-dom'
import './App.css';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Home from './components/content/Home';
import Aboutus from './components/content/Aboutus';
import Temp1 from './components/content/Templete/Templete1/Temp1'
import developing from './Underdeveloping/Developing';

function App() {
  return (
    // <Developing/>
  <>
    
   
    <Navbar/>
    
    <Routes>
      <Route path='home' element={<Home/>}/>
      <Route path='about' element={<Aboutus/>}/>
      <Route path ='home/temp1' element={<Temp1/>}/>
    </Routes>
    </>
  );
}

export default App;

