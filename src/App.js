import React from "react";
import {
  HashRouter,
  Routes,
  Route,} 
  from "react-router-dom";
import './App.css';
import Header from "./pages/Header";
import Footer from "./pages/Footer";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import AboutMe from "./pages/AboutMe"





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