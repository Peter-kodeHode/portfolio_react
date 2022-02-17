import React from "react";
import {
  HashRouter,
  Routes,
  Route,} 
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
      
    <HashRouter>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="aboutme" element={<AboutMe/>}/>
        <Route path="projects" element={<Projects/>}/>
      </Routes>  
      <Footer/>
    </HashRouter>

    </div>
  );
}

export default App;