import { createGlobalStyle } from "styled-components";
/* istanbul ignore next */
export const GlobalStyle = createGlobalStyle`
  @font-face {
  font-family: Nekst;
  src: url("../fonts/Nekst-Black.woff2") format(woff2);
  font-weight: 900;
  font-display: swap;
}
@font-face {
  font-family: Gilroy;
  src: url("../fonts/Gilroy-Regular.woff2") format(woff2);
  font-weight: 400;
  font-display: swap;
}
@font-face {
  font-family: Gilroy;
  src: url("../fonts/Gilroy-Bold.woff2") format(woff2);
  font-weight: 700;
  font-display: swap;
}

body {
  margin: 0 auto;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans',
    'Droid Sans', 'Helvetica Neue', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New', monospace;
}

input {
  all: unset;
}

#root {
  display: flex;
  justify-content: center;
  height: 100%;
}

//reset

html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
	display: block;
}
body {
	line-height: 1;
}
ol, ul {
	list-style: none;
}
`;
