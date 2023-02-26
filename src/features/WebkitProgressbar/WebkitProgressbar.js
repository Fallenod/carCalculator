import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { useWebkitProgressBar } from "../../hook/useWebkitProgressBar";
import { theme } from "../InputRangeSlider/InputRangeSlider.styled";

function WebkitProgressbar({ min, max, value, disabled }) {
  const progress = useWebkitProgressBar(min, max, value);
  return (
    <ProgressLineWrapper>
      <ProgressLine style={{ width: `${progress}%` }} disabled={disabled} />
    </ProgressLineWrapper>
  );
}

WebkitProgressbar.propTypes = {
  min: PropTypes.number.isRequired,
  max: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
  disabled: PropTypes.bool.isRequired,
};

WebkitProgressbar.defaultProps = {
  min: 0,
  max: 100,
  value: 0,
  disabled: false,
};

const ProgressLineWrapper = styled.div`
  position: absolute;
  width: calc(${theme.sliderWidth} - 3rem);
  bottom: 0.155rem;
  left: 1.5rem;
  right: 1.5rem;
  @media (-webkit-min-device-pixel-ratio: 2.5) {
    bottom: 0.3rem;
  }
`;

const ProgressLine = styled.div`
  height: ${theme.progressbarSize};
  background-color: ${theme.progressBg};
  border-radius: calc(${theme.trackSize} / 2) 0 0 calc(${theme.trackSize} / 2);
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  position: absolute;
  top: 100%;
  opacity: ${(props) => (props.disabled ? 0.4 : 1)};
  user-select: none;
`;

export default React.memo(WebkitProgressbar);