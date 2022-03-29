import React from "react";
import { Link } from "react-router-dom";
import PdLogo from "../images/StyledNavBar/Pd v2.png";
import HomeNav from "../images/StyledNavBar/home.png";
import CheckList from "../images/StyledNavBar/checklist.png";

function StyledNavBar() {
  return (
    <nav className="navbar">
      <Link to="/aboutme">
        <img className="logo" src={PdLogo} alt="Button to about me page" />
      </Link>
      <Link to="/">
        <img className="home" src={HomeNav} alt="Home button" />
      </Link>
      <Link to="/projects">
        <img
          className="checklist"
          src={CheckList}
          alt="Button to projects page"
        />
      </Link>
    </nav>
  );
}

export default StyledNavBar;