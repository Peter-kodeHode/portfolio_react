import React from "react";
import { Link } from "react-router-dom";
import LogoImg from "../images/NavBar/Pd v2.png";
import HomeImg from "../images/NavBar/home.png";
import CheckListImg from "../images/NavBar/checklist.png";
import { StyledNavBar, Logo, Home, CheckList } from "./navBar/navBarStyles";

function NavBar() {
  return (
    <StyledNavBar>
      <Link to="/aboutme">
        <Logo src={LogoImg} alt="Button to about me page" />
      </Link>
      <Link to="/">
        <Home src={HomeImg} alt="Home button" />
      </Link>
      <Link to="/projects">
        <CheckList src={CheckListImg} alt="Button to projects page" />
      </Link>
    </StyledNavBar>
  );
}

export default NavBar;
