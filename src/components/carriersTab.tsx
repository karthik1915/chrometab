import React from "react";
import styled from "styled-components";
import Avatars from "./avatars";
import ButtonWithIcon from "./buttonwithicon";

function CarrierTab() {
  return (
    <Selector>
      <Parent>
        <Heading>
          Carriers
          <Avatars />
        </Heading>
        <Texts>
          Empowering Visions,Igniting Digital Spirits,Tomarrow and Beyond
        </Texts>
        <div style={{}}>
          <Button>Join Us</Button>
        </div>
      </Parent>
    </Selector>
  );
}

const Heading = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 1.2em;
  @media screen and (max-width: 496px) {
    font-size: 1.6em;
  }
`;

const Texts = styled.div`
  font-size: 1.4em;

  @media screen and (max-width: 1224px) {
    font-size: 1.2em;
  }

  @media screen and (max-width: 608px) {
    font-size: 0.9em;
  }
  @media screen and (max-width: 496px) {
    font-size: 1.6em;
  }
`;

export const Button = styled.div`
  background-color: var(--colormain);
  text-align: center;
  border: 2px solid var(--bgmain);
  border-radius: 16px;
  font-size: 18px;
  padding: 5px 20px;
  color: var(--bgmain);
  transition: background-color 0.3s ease;
  &:hover {
    background-color: var(--bgmain);
    color: var(--colormain);
  }
  @media screen and (max-width: 608px) {
    font-size: 14px;
    padding: 2px 10px;
  }
  @media screen and (max-width: 496px) {
    font-size: 1.6em;
    padding: 5px 20px;
  }
`;

const Selector = styled.div`
  grid-column: -2;
  grid-row: -3 / span1;
  background-color: var(--bgmain);
  padding: var(--padding) 0px 0px var(--padding);
  border-top-left-radius: var(--borderext);

  @media screen and (max-width: 496px) {
    padding: var(--padding) 0px 0px 0px;
    border-radius: 0px;
    grid-column: 1 / span 5;
    grid-row: -3 / span 2;
  }
`;

const Parent = styled.div`
  width: 100%;
  height: 100%;
  padding: 10px;
  color: var(--bgmain);
  background-position: center;
  background-image: url("/background_dark_2.jpg");
  background-size: cover;
  border-radius: var(--borderint);

  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

export default CarrierTab;

{
  /* <div className="Carriers-parent">
<div className="Carriers-child">
  <section className="Carrier-heading">
    Carriers <Avatars />
  </section>
  <section className="Carrier-text">
    Empowering Visions, Igniting Digital Spirits, Tomarrow and Beyond!
  </section>
  <button className="Carrier-Button">Join Us</button>
</div>
</div> */
}
