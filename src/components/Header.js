import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Routes,
    Route,
    Link
  } from "react-router-dom";

import AboutMe from "./components/";
import Projects from "./components/";
import Home from "./components/";
import Footer from "./components/";

function Header(){
    return(
        <Router>
          <div class="navbar">
    <Link to="/aboutme"> <img class="logo" src="images/Pd v2.png"/></Link>
    <Link to="/"><img class="home" src="images/home.png" /></Link>
    <Link to="/projects"><img class="checklist" src="images/checklist.png" /></Link>
  </div>
  <Routes>
      <Route path="/aboutme"> <AboutMe.js/></Route>
      <Route path="/"> <Home.js/></Route>
      <Route path="/projects"> <Projects.js/></Route>

  </Routes>
        </Router>
    );
}

export default Header;