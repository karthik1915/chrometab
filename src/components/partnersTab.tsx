import React from "react";
import styled from "styled-components";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

function PartnersTab() {
  useGSAP(() => {
    gsap.from(".PartnersTab-Parent", {
      paddingBottom: "0px",
      paddingRight: "0px",
      duration: 2,
      ease: "power4.out",
    });
    gsap.from(".PartnersTab-Child", {
      borderRadius: "0px",
      duration: 2,
      ease: "circ",
    });
  });
  return (
    <div className="PartnersTab-Parent">
      <div className="PartnersTab-Child">
        <Number>40+</Number>
        <Text>Partners</Text>
        <Button>Discover More</Button>
      </div>
    </div>
  );
}

const Number = styled.p`
  font-size: 54px;
`;

const Text = styled.p`
  font-size: 32px;
`;

export default PartnersTab;

export const Button = styled.div`
  background-color: var(--colormain);
  text-align: center;
  border: 2px solid var(--bgmain);
  border-radius: 16px;
  font-size: 14px;
  padding: 5px 14px;
  color: var(--bgmain);
  transition: background-color 0.3s ease;
  &:hover {
    background-color: var(--bgmain);
    color: var(--colormain);
  }
  @media screen and (max-width: 608px) {
    font-size: 12px;
    padding: 5px 8px;
  }
  /* @media screen and (max-width: 496px) {
    font-size: 1.6em;
    padding: 5px 20px;
  } */
`;
