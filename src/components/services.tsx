import React from "react";
import styled from "styled-components";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const services: string[] = [
  "web development",
  "3D design",
  "Product Design",
  "Marketing",
  "Digital Marketing",
  "SEO",
  "Cloud",
  "NLP",
  "Cyber Security",
];

function Services() {
  useGSAP(() => {
    gsap.from(".serviceButton", {
      scale: 0,
      stagger: 0.1,
      duration: 1,
      ease: "bounce.out",
      delay: 0.2,
    });
  });

  return (
    <FlexBox>
      {services.map((ele, ind) => (
        <div className="serviceButton" key={ind}>
          {ele}
        </div>
      ))}
    </FlexBox>
  );
}

const FlexBox = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-end;
  gap: 10px;

  @media screen and (max-width: 1054px) {
    gap: 5px;
  }

  @media screen and (max-width: 694px) {
    justify-content: unset;
  }
`;

export default Services;
