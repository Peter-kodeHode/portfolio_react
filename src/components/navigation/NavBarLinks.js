import React from "react";
import { Link } from "react-router-dom";
import LogoImg from "../../images/NavBar/image2vector.svg";
import HomeImg from "../../images/NavBar/home.svg";
import FolderImg from "../../images/NavBar/folder.svg";
import { ALT_TEXT } from "../../language_and_strings/no";

export const NavBarLinks = () => {
  return (
    <>
      <Link to="/aboutme">
        <img
          src={LogoImg}
          alt={ALT_TEXT.ABOUT_BUTTON}
          className="navbar-icon logo-icon"
        />
      </Link>
      <Link to="/">
        <img
          src={HomeImg}
          alt={ALT_TEXT.HOME_BUTTON}
          className="navbar-icon home-icon"
        />
      </Link>
      <Link to="/projects">
        <img
          src={FolderImg}
          alt={ALT_TEXT.PROJECTS_BUTTON}
          className="navbar-icon projects-icon"
        />
      </Link>
    </>
  );
};