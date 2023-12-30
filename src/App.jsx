
import React from 'react';
import NavBar from './components/navBar/navbar';
import Home from './components/pages/home';
import Skills from './components/sections/skills';
import Experience from './components/sections/experience';
import Hero from './components/sections/hero';
import Projects from './components/sections/projects';
import Contact from './components/sections/contact';
import { Routes,Route } from 'react-router-dom';
import "./style.css"


const App = () => {
  return(
      <div className="App">
          <NavBar />

          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/hero" element={<Hero/>} />
            <Route path="/skills" element={<Skills/>} />
            <Route path="/experience" element={<Experience/>} />
            <Route path="/projects" element={<Projects/>} />
            <Route path="/contact" element={<Contact/>} />
          </Routes>
      
      </div>
  );
};

export default App;

