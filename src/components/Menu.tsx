import React from "react";
import styled from "styled-components";
import { RxCross2 } from "react-icons/rx";
interface Props {
  onClick: React.MouseEventHandler<HTMLButtonElement> | undefined;
}

function Menu({ onClick }: Props) {
  return (
    <MenuScreen>
      <CancelButton onClick={onClick}>
        <RxCross2 />
      </CancelButton>
      <FlexBox>
        <LinkHrefs>About</LinkHrefs>
        <LinkHrefs>Our Teams</LinkHrefs>
        <LinkHrefs>News</LinkHrefs>
      </FlexBox>
    </MenuScreen>
  );
}

const FlexBox = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`;

const CancelButton = styled.button`
  float: right;
  background-color: transparent;
  border: 1px solid black;
  padding: 5px 10px;
  border-radius: 16px;
  &:hover {
    background-color: var(--colormain);
    color: var(--bgmain);
  }
`;

const LinkHrefs = styled.a`
  font-size: 1.5em;
  font-family: "Kanit";
`;

const MenuScreen = styled.div`
  position: fixed;
  padding: 30px 30px;
  width: 50vw;
  max-width: 250px;
  background-color: #ffffff77;
  border-radius: var(--borderint);
  height: 50vh;
  backdrop-filter: blur(5px);
  min-height: 350px;
  max-height: 450px;
  min-width: 250px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 100;
`;

export default Menu;
