import React from "react";
import { StyledNavBar } from "./NavBar.styles";
import { NavBarLinks } from "./NavBarLinks";
import ThemeToggle from "../../components/ThemeToggle";

function NavBar() {
  return (
    <StyledNavBar>
      <NavBarLinks />
    </StyledNavBar>
  );
}

export default NavBar;
