import React from "react";
import {
  BrowserRouter,
  Outlet,
  Routes,
  Route,
  Link} 
  from "react-router-dom";

import AboutMe from "./AboutMe";
import Projects from "./Projects";
import Home from "./Home";

const PdLogo = process.env.PUBLIC_URL + "/images/Pd v2.png"
const HomeNav = process.env.PUBLIC_URL + "/images/home.png"
const CheckList = process.env.PUBLIC_URL + "/images/checklist.png"

function Header(){
    return(
        
          <div className="navbar">
   

    <Link to="/aboutme"> <img className="logo" src={PdLogo} alt=""/></Link>
    <Link to="/"><img className="home" src={HomeNav} alt="" /></Link>
    <Link to="/projects"><img className="checklist" src={CheckList} alt="" /></Link>
    

     </div>
    );
}

export default Header;