import React from "react";
import { CssBaseline } from "@material-ui/core";
import styled, { createGlobalStyle } from "styled-components/macro";
import { GlobalStyleProps } from "../types/styles";
import bg from "../assets/images/bg/working-on-laptop-1940x900_36206.png";

const GlobalStyle = createGlobalStyle<GlobalStyleProps>`
  html,
  body,
  #root {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  body {
    background-image: url(${bg});
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    border-bottom:14px solid #0C765F ;
    width: 100%;
  }
`;

const Root = styled.div`
  border-radius: 40px;
  background: rgba(12, 118, 95, 0.57);
  max-width: 420px;
  margin: 0 auto;
  justify-content: center;
  align-items: center;
  display: flex;
  min-height: 35%;
`;

const Auth: React.FC = ({ children }) => {
  return (
    <Root>
      <CssBaseline />
      <GlobalStyle />
      <div>{children}</div>
    </Root>
  );
};

export default Auth;
