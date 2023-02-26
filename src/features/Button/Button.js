import React from "react";
import styled, { keyframes } from "styled-components";
import PropTypes from 'prop-types'; 
import { ButtonBase } from "./Button.styled";
import LoaderSrc from "./Loader.svg";

export default function Button({ loading, text, isDisabledBtn }) {
  return (
    <ButtonBase type="button" disabled={isDisabledBtn}>
      {loading ? <Loader src={LoaderSrc} /> : text}
    </ButtonBase>
  );
}

Button.propTypes = {
  loading: PropTypes.bool,
  text: PropTypes.string,
  isDisabledBtn: PropTypes.bool,
}

Button.defaultProps = {
  loading: false,
  text: "button",
  isDisabledBtn: false,
}

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

export const Loader = styled.img`
  width: 2.125rem;
  height: 2.125rem;
  vertical-align: middle;

  animation: ${rotate} 2s linear infinite;
`;
