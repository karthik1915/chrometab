import React, { useState } from "react";
import styled from "styled-components";
import LinkButton from "./Link";
import ButtonWithIcon from "./buttonwithicon";
import { CgMail } from "react-icons/cg";
import { BsArrowBarDown } from "react-icons/bs";
import Menu from "./Menu";

function TopBar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Sizing>
      <Heading>Tomarrow.</Heading>
      <Navigation>
        <LinkButton isactive={true} text="About" link="" />
        <LinkButton isactive={false} text="Our Teams" link="" />
        <LinkButton isactive={false} text="News" link="" />
      </Navigation>

      <Button onClick={toggleMenu}>
        <BsArrowBarDown size={20} />
      </Button>

      {isOpen && <Menu onClick={toggleMenu} />}

      <ButtonWithIcon text="Contact Us" onClick={() => {}} icon={CgMail} />
    </Sizing>
  );
}

const Sizing = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 100%;
  justify-content: space-between;
  padding: 0px 12px;
`;

const Heading = styled.div`
  font-size: 1.6em;
  font-weight: 600;
  @media screen and (max-width: 572px) {
    font-size: 1.3em;
  }
`;

const Navigation = styled.div`
  display: flex;
  gap: 3vw;
  @media screen and (max-width: 572px) {
    display: none;
  }
`;

const Button = styled.button`
  display: none;
  @media screen and (max-width: 572px) {
    display: unset;
    background-color: transparent;
    border: 1px solid black;
    padding: 5px 10px;
    border-radius: 16px;
  }

  &:hover {
    background-color: var(--colormain);
    color: var(--bgmain);
  }
`;

export default TopBar;
