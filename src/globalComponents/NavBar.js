import React from "react";
import { StyledNavBar } from "./NavBar/navBarStyles";
import { NavBarLinks } from "./NavBar/navBarConsts";

function NavBar() {
  return (
    <StyledNavBar>
      <NavBarLinks />
    </StyledNavBar>
  );
}

export default NavBar;
