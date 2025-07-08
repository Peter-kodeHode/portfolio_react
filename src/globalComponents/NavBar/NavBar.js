import React from "react";
import { StyledNavBar } from "./NavBar.styles";
import { NavBarLinks } from "./NavBarLinks";


function NavBar() {
  return (
    <StyledNavBar>
      <NavBarLinks />
    </StyledNavBar>
  );
}

export default NavBar;
