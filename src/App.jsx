
import React from 'react';
import NavBar from './components/navBar/navbar';
import Home from './components/pages/home';
import { Routes,Route } from 'react-router-dom';
import "./style.css"



const App = () => {
  return(
      <div className="App">
          <NavBar />
          
          <Routes>
            <Route path="/" element={<Home/>} />
          </Routes>
        
      </div>
  );
};

export default App;

