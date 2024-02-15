import React from "react";
import styled from "styled-components";

interface ChildProps {
  children: React.ReactNode | JSX.Element;
}

function GridContainer({ children }: ChildProps) {
  return <Grids>{children}</Grids>;
}

const Grids = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 0.7fr 0.6fr 1fr 1fr 1fr;
  grid-template-rows: 75px 110px 120px 1fr 1fr 1fr 100px;

  @media screen and (max-width: 1024px) {
    grid-template-columns: 0.6fr 0.5fr 1fr 1fr;
    grid-template-rows: 75px 110px 120px 1fr 1fr 1fr 100px;
  }

  @media screen and (max-width: 924px) {
    grid-template-columns: 0.7fr 0.7fr 1fr;
    grid-template-rows: 75px 110px 120px 1fr 1fr 1fr 100px;
  }

  @media screen and (max-width: 496px) {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 75px 110px 120px 1fr 1fr 1fr 100px;
  }
`;

export default GridContainer;
