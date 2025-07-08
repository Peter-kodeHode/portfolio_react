import React from "react";
import { Link } from "react-router-dom";
import { CheckList, Home, Logo } from "./NavBar.styles";
import LogoImg from "../../images/NavBar/image2vector.svg";
import HomeImg from "../../images/NavBar/home.svg";
import FolderImg from "../../images/NavBar/folder.svg";


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
        <CheckList src={FolderImg} alt="Button to projects page" />
      </Link>
     
    </>
  );
};