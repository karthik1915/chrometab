import * as React from "react";
import styled from "styled-components";

interface ChildProps {
  children: React.ReactNode | JSX.Element;
}

function Main({ children }: ChildProps) {
  return (
    <Wrapper>
      <Content>{children}</Content>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  padding: 10px 12px;
  width: 100vw;
  height: 100vh;
  min-height: 100vh;

  @media screen and (max-width: 496px) {
    height: 140vh;
  }
`;

const Content = styled.div`
  width: 100%;
  max-width: 1440px;
  height: 100%;
  margin: auto;
  border-radius: 20px;
  background-color: var(--colormain);
  background-position: center;
  background-image: url("/darkbackground.jpg");
  background-size: cover;
`;

export default Main;
