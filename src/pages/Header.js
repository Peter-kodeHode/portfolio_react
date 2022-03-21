import React from "react";
import {
  Link} 
  from "react-router-dom";
import PdLogo from "../images/Header/Pd v2.png";
import HomeNav from "../images/Header/home.png";
import CheckList from "../images/Header/checklist.png"


function Header(){
    return(

      <div className="navbar">
        <Link to="/aboutme">
           <img className="logo" src={PdLogo}
            alt="Button to about me page"/>
        </Link>
        <Link to="/">
          <img className="home" src={HomeNav}
           alt="Home button" />
        </Link>
        <Link to="/projects">
          <img className="checklist" src={CheckList}
           alt="Button to projects page" />
        </Link>
  
      </div>
    );
}

export default Header;