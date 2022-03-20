import React, {useState} from 'react';

import './App.css';

import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import {
  
  Routes,
  Route,
} from "react-router-dom";
function App() {
  const[mode, setMode]= useState('light')

  const toggleMode =() =>{
    if ( mode === 'light'){
      setMode('dark')
      document.body.style.backgroundColor="#042743"
      document.title="TextUtils-Dark Mode"
     
    }
    else{
      setMode('light')
      document.body.style.backgroundColor="white"
      document.title="TextUtils-Light Mode"
      
    }
  }

  return (
    
    <>   
    <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
    <div className="container my-3">
      <Routes>
          <Route path="/" element ={<TextForm heading="Enter your text here" mode={mode}/>} />
          <Route path="/about" element={<About />} />
         
      </Routes>
      
        
    </div>
    
     
   
    </>
    
  );
}

export default App;
