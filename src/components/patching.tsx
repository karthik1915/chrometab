import React from "react";
import styled from "styled-components";

function Patching() {
  return (
    <>
      <Selector gridColumn="1" gridRow="4 / span 1">
        <TopLeft></TopLeft>
      </Selector>
    </>
  );
}
const TopLeft = styled.div`
  width: 100%;
  height: 100%;
  background-color: var(--colormain);
  border-top-left-radius: var(--borderint);
`;

interface NextBelowProps {
  gridColumn: string;
  gridRow: string;
}

const Selector = styled.div<NextBelowProps>`
  grid-column: ${(props) => props.gridColumn};
  grid-row: ${(props) => props.gridRow};
  background-color: var(--bgmain);
`;

const TopRight = styled.div`
  width: 100%;
  height: 100%;
  background-color: var(--colormain);
  border-top-right-radius: var(--borderint);
`;

export default Patching;
