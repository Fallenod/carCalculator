/* eslint-disable import/prefer-default-export */
import styled from "styled-components";
import color from "../../styles/color-constants";

export const theme = {
  thumbSize: "1.25rem",
  trackSize: "0.0625rem",
  progressbarSize: "0.125rem",
  text: `${color.lightGray}`,
  textBg: "#F3F3F4",
  thumbBg: `${color.orange}`,
  trackBg: "#E1E1E1",
  progressBg: `${color.orange}`,
  sliderWidth: "100%",
  textPadding: "1.5rem",
  percentTextPadding: "1rem",
  percentBg: "rgb(229,229,229, 0.4)",
  webkitProgressPercent: "0%",
};

export const Item = styled.div`
  position: relative;
  font-family: "Nekst";
  font-weight: 900;
  font-size: 1.875rem;
  line-height: 4.25rem;
  color: ${theme.text};
  width: ${theme.sliderWidth};
`;
export const Output = styled.input.attrs({
  type: "text",
})`
  background-color: ${theme.textBg};
  height: 4.25rem;
  width: 100%;
  vertical-align: middle;
  text-align: left;
  border-radius: 1rem;
  padding: 0 ${theme.textPadding};
  box-sizing: border-box;
  border: 2px solid ${theme.textBg};
  &:focus {
    outline: none;
    background-color: ${props => props.unfocus ? "none" : "white"};
  }
  &:disabled {
    opacity: 0.4;
  }
  @media screen and (max-width: 768px) {
    height: 3.75rem;
    font-size: 1.375rem;
    line-height: 1.25rem;
  }
`;

export const Percent = styled.input.attrs({
  type: "text",
})`
  position: absolute;
  top: 53%;
  right: -1.4rem;
  transform: translate(-50%, -50%);
  background-color: ${theme.percentBg};
  height: 3.38rem;
  width: 4.38rem;
  vertical-align: middle;
  text-align: center;
  font-size: 1.25rem;
  line-height: 120%;
  border-radius: 1rem;
  padding: 0 ${theme.percentTextPadding};
  box-sizing: border-box;
  &:disabled {
    opacity: 0.4;
    background-color: ${theme.percentBg};
  }
  @media screen and (max-width: 768px) {
    width: 4.1875rem;
    height: 3rem;
    font-size: 1.375rem;
    line-height: 1.25rem;
  }
`;
export const PercentWrapper = styled.div`
  box-sizing: border-box;
  font-size: 1.25rem;
  line-height: 120%;
  &::after {
    content: "%";
    position: absolute;
    top: 70%;
    right: 0.3rem;
    transform: translate(-100%, -100%);
    color: ${props => props.disabled ? '#bcbcbc' : "inherit" };
    @media screen and (max-width: 768px) {
      top: 67%;
      right: 0.1rem;
      line-height: 1.25rem;
    }
  }
`;
export const Type = styled.span`
  position: absolute;
  top: 100%;
  left: 100%;
  transform: translate(-100%, -100%);
  background-color: transparent;
  border: none;
  border-radius: 16px;
  padding-right: ${theme.textPadding};
  opacity: ${(props) => (props.disabled ? 0.4 : 1)};
`;

export const RangeInput = styled.input.attrs({
  type: "range",
})`
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  height: ${theme.thumbSize};
  width: calc(${theme.sliderWidth} - 3rem);
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  position: absolute;
  top: 98.5%;
  left: 50%;
  transform: translate(-50%, -50%);
  @media (-webkit-min-device-pixel-ratio: 2.5) {
    top: 95%;
  }
  &:focus {
    outline: none;
  }
  &:disabled {
    opacity: 0.4;
  }
  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: ${theme.thumbSize};
    height: ${theme.thumbSize};
    background: ${theme.thumbBg};
    border-radius: calc(${theme.thumbSize} / 2);
    border: none;
    margin-top: calc(((${theme.thumbSize} - ${theme.trackSize}) / 2) * -1);
    cursor: pointer;
  }
  &::-moz-range-thumb {
    -moz-appearance: none;
    appearance: none;
    width: ${theme.thumbSize};
    height: ${theme.thumbSize};
    background-color: ${theme.thumbBg};
    border-radius: calc(${theme.thumbSize} / 2);
    border: none;
    margin-top: calc(((${theme.thumbSize} - ${theme.trackSize}) / 2) * -1);
    cursor: pointer;
  }
  &::-ms-thumb {
    -ms-appearance: none;
    appearance: none;
    width: ${theme.thumbSize};
    height: ${theme.thumbSize};
    background-color: ${theme.thumbBg};
    border-radius: calc(${theme.thumbSize} / 2);
    border: none;
    margin-top: calc(((${theme.thumbSize} - ${theme.trackSize}) / 2) * -1);
    cursor: pointer;
  }
  &::-webkit-slider-runnable-track {
    height: ${theme.trackSize};
    background-color: ${theme.trackBg};
    border-radius: calc(${theme.trackSize} / 2);
  }
  &::-moz-range-track {
    height: ${theme.trackSize};
    background-color: ${theme.trackBg};
    border-radius: calc(${theme.trackSize} / 2);
  }
  &::-ms-track {
    height: ${theme.trackSize};
    background-color: ${theme.trackBg};
    border-radius: calc(${theme.trackSize} / 2);
  }
  &::-moz-range-progress {
    height: ${theme.progressbarSize};
    background-color: ${theme.progressBg};
    border-radius: calc(${theme.trackSize} / 2) 0 0 calc(${theme.trackSize} / 2);
  }
  &::-ms-fill-lower {
    height: ${theme.progressbarSize};
    background-color: ${theme.progressBg};
    border-radius: calc(${theme.trackSize} / 2) 0 0 calc(${theme.trackSize} / 2);
  }
`;
export const ProgressLine = styled.div`
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
export const ProgressLineWrapper = styled.div`
  position: absolute;
  width: calc(${theme.sliderWidth} - 3rem);
  bottom: 0.15rem;
  left: 1.5rem;
  right: 1.5rem;
`;
