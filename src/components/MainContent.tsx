import React from "react";
import styled from "styled-components";
import Services from "./services";
import Line from "./arrow";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

function MainContent() {
  return (
    <>
      <WhatWeDo />
      <ListServices>
        <Services />
      </ListServices>
      <HeroText>
        <Child>We are the solution for the future Innovation</Child>
      </HeroText>
    </>
  );
}

function WhatWeDo() {
  useGSAP(() => {
    gsap.fromTo(
      ".LineContainer",
      {
        paddingLeft: "45%",
        paddingRight: "45%",
      },
      {
        paddingLeft: "10%",
        paddingRight: "10%",
        duration: 1,
        ease: "elastic",
      }
    );
  });
  return (
    <WeDo>
      <div>What We Do</div>
      <Count>8 services</Count>
      <div className="LineContainer">
        <Line />
      </div>
    </WeDo>
  );
}

const Count = styled.p`
  font-size: 21px;
`;

const WeDo = styled.div`
  text-align: center;
  grid-column: 3;
  grid-row: 2 / span 1;
  color: var(--bgmain);

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  font-size: 32px;
  padding: 14px;

  @media screen and (max-width: 924px) {
    grid-row: 3 / span 1;
    grid-column: 2 / span 1;
  }

  @media screen and (max-width: 798px) {
    font-size: 26px;
  }
  @media screen and (max-width: 694px) {
    grid-row: 2 / span 1;
    grid-column: 3 / span 1;
  }
  @media screen and (max-width: 496px) {
    grid-row: 3 / span 1;
    grid-column: 2 / span 1;
  }
`;

const ListServices = styled.div`
  grid-column: 4 / span 2;
  grid-row: 2 / span 3;
  padding: 14px;

  @media screen and (max-width: 924px) {
    grid-column: 3 / span 1;
  }
  @media screen and (max-width: 694px) {
    grid-row: -6 / span 3;
    grid-column: 2 / span 3;
    display: flex;
    align-items: center;
  }
  @media screen and (max-width: 496px) {
    grid-row: -5 / span 1;
    grid-column: 1 / span 2;
    display: flex;
    align-items: center;
  }
`;

const HeroText = styled.div`
  grid-row: -3 / span 2;
  grid-column: 1 / span 3;
  color: var(--bgmain);

  @media screen and (max-width: 924px) {
    grid-row: -3 / span 2;
    grid-column: 1 / span 2;
  }

  @media screen and (max-width: 496px) {
    grid-row: -4 / span 1;
    grid-column: 1 / span 2;
  }

  font-size: 32px;

  @media screen and (min-width: 762px) {
    font-size: 48px;
  }

  @media screen and (min-width: 1440px) {
    font-size: 58px;
  }
`;

const Child = styled.div`
  width: 100%;
  height: 100%;
  padding: 20px;
  border-bottom-left-radius: 20px;
  display: flex;
  align-items: center;

  @media screen and (max-width: 496px) {
    border-bottom-left-radius: 32px;
    border-bottom-right-radius: 32px;
  }

  @media screen and (max-width: 924px) {
    border-bottom-left-radius: 32px;
    border-bottom-right-radius: 32px;
  }
`;

export default MainContent;
