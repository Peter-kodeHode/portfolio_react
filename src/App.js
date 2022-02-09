import React from "react";
import {
  BrowserRouter, 
  Outlet,
  Routes,
  Route,
  Link} 
  from "react-router-dom";
import './App.css';
import Header from "./components/Header"
import Footer from "./components/Footer"
import Home from "./components/Home"
import AboutMe from "./components/AboutMe";
import Projects from "./components/Projects";





function App() {
  return (
    
   
    <div className="App">
         <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="aboutme" element={<AboutMe/>}/>
      <Route path="projects" element={<Projects/>}/>
    </Routes> 
    </BrowserRouter>
   
          
          
    </div>
    
    
  );
}

export default App;
