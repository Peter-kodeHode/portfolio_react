import React from "react";
import { StyledNavBar } from "./NavBar.styles";
import { NavBarLinks } from "./NavBarLinks";
import ThemeToggle from "./ThemeToggle"; // Updated import path



function NavBar() {
  return (
    <StyledNavBar>
      <NavBarLinks />
       <ThemeToggle />
    </StyledNavBar>
  );
}

export default NavBar;
