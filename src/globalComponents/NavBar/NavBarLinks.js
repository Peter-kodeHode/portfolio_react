import React from "react";
import { Link } from "react-router-dom";
import { CheckList, Home, Logo } from "./NavBar.styles";
import LogoImg from "../../images/NavBar/Pd v2.png";
import HomeImg from "../../images/NavBar/home.png";
import CheckListImg from "../../images/NavBar/checklist.png";

export const NavBarLinks = () => {
  return (
    <>
      <Link to="/aboutme">
        <Logo src={LogoImg} alt="Button to about me page" />
      </Link>
      <Link to="/">
        <Home src={HomeImg} alt="Home button" />
      </Link>
      <Link to="/projects">
        <CheckList src={CheckListImg} alt="Button to projects page" />
      </Link>
    </>
  );
};
