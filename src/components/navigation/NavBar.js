import React from "react";
import { NavBarLinks } from "./NavBarLinks";
import ThemeToggle from "../ui/ThemeToggle";
import "./NavBar.css";

function NavBar() {
  return (
    <nav className="navbar">
      <NavBarLinks />
      <ThemeToggle />
    </nav>
  );
}

export default NavBar;
