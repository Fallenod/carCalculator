import React from "react";
import styled from "styled-components";
import Calculator from "./view/Calculator/Calculator";
import { GlobalStyle } from "./styles/global-styles";
import FontStyles from "./styles/font-styles";

export default function App() {
  return (
    <Main>
      <Header>Рассчитайте стоимость автомобиля в&nbsp;лизинг</Header>
      <Calculator />
      <GlobalStyle />
      <FontStyles />
    </Main>
  );
}

const Header = styled.h1`
  font-family: "Nekst";
  font-weight: 900;
  font-size: 3.38rem;
  line-height: 90%;
  align-self: flex-start;
  max-width: 47.06rem;
  margin: 0;
  @media screen and (max-width: 768px) {
    font-size: 2.125rem;
  }
`;
const Main = styled.main`
  display: flex;
  gap: 31px;
  max-width: 1440px;
  padding: 0 45px;
  height: 100vh;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  @media screen and (max-width: 1120px) {
    padding: 0 36px;
    margin-top: 3.5625rem;
    margin-bottom: 9.75rem;
    height: 100%;
    min-height: 100%;
  }
  @media screen and (max-width: 768px) {
    padding: 0 20px;
    margin-top: 2.75rem;
    margin-bottom: 4rem;
    height: 100%;
    min-height: 100%;
  }
`;
