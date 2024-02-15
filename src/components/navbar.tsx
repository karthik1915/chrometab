import React from "react";
import styled from "styled-components";

import TopBar from "./nav";

function Navbar() {
  return (
    <NavbarStyle>
      <TopBar />
    </NavbarStyle>
  );
}

const NavbarStyle = styled.div`
  grid-row: 1 / span 1;
  background-color: var(--bgmain);
  grid-column: 1 / span 5;
`;

export default Navbar;
