import { createGlobalStyle } from "styled-components";
import NekstWoff2 from '../fonts/Nekst-Black.woff2'
import GilroyRegularWoff2 from '../fonts/Gilroy-Regular.woff2'
import GilroyBoldWoff2 from '../fonts/Gilroy-Bold.woff2'
 
const GlobalStyle = createGlobalStyle`
  @font-face {
  font-family: Nekst;
  src: url(${NekstWoff2}) format(woff2);
  font-weight: 900;
  font-display: swap;
}
@font-face {
  font-family: Gilroy;
  src: url(${GilroyRegularWoff2}) format(woff2);
  font-weight: 400;
  font-display: swap;
}
@font-face {
  font-family: Gilroy;
  src: url(${GilroyBoldWoff2}) format(woff2);
  font-weight: 700;
  font-display: swap;
}
`;

export default GlobalStyle