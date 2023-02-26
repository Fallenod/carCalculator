/* eslint-disable import/prefer-default-export */
import styled from "styled-components";
import color from "../../styles/color-constants";

const theme = {
  primary: `${color.orange}`,
  hover: `${color.black}`,
  active: `${color.lightGray}`,
  disabled: `${color.orange}`,
  text: `${color.white}`,
};

export const ButtonBase = styled.button.attrs({
  type: "submit",
})`
  position: relative;
  -webkit-tap-highlight-color: rgba(255, 255, 255, 0);
  -webkit-tap-highlight-color: transparent;
  background-color: ${theme.primary};
  border: none;
  border-radius: 2.5rem;
  color: ${theme.text};
  height: 4.25rem;
  text-align: center;
  font-family: "Gilroy";
  font-weight: 900;
  font-size: 1.875rem;
  line-height: 2.25rem;
  width: 100%;
  text-decoration: none;
  display: inline-block;
  cursor: pointer;
  user-select: none;
  @media screen and (max-width: 1120px) {
    width: 50%;
  }
  @media screen and (max-width: 768px) {
    font-size: 1.375rem;
    line-height: 1.25rem;
    width: 100%;
    height: 3.75rem;
  }
  &:hover {
    background-color: ${theme.hover};
    transition: 0.2s;
  }
  &:active {
    background-color: ${theme.active};
    transition: 0.2s;
  }
  &:disabled {
    background-color: ${theme.disabled};
    opacity: 0.4;
    transition: 0.2s;
  }
`;
