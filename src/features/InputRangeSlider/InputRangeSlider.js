import React from "react";
import { useSelector } from "react-redux";
import PropTypes from 'prop-types'; 
import {
  RangeInput,
  Item,
  Output,
  Type,
  Percent,
  PercentWrapper,
} from "./InputRangeSlider.styled";
import WebkitProgressbar from "../WebkitProgressbar/WebkitProgressbar";
import { selectSliderCurrents } from "../../app/sliderSlice";
import { formatNum } from "../../utils/formatNum";

function InputRangeSlider({
  type,
  min,
  max,
  value,
  setValue,
  typeValue,
  disabled,
}) {
  const { initialFee } = useSelector(selectSliderCurrents);

  return (
    <Item>
      {
        {
          cost: (
            <>
              <Output
                min={min}
                max={max}
                value={formatNum(value)}
                onInput={setValue}
                disabled={disabled}
              />
              <Type disabled={disabled}>{typeValue}</Type>
              <RangeInput
                min={min}
                max={max}
                value={value}
                onChange={setValue}
                disabled={disabled}
              />
              <WebkitProgressbar
                min={min}
                max={max}
                value={value}
                disabled={disabled}
              />
            </>
          ),
          percent: (
            <>
              <Output
                value={formatNum(initialFee)}
                disabled={disabled}
                readOnly
                unfocus
              />
              <PercentWrapper disabled={disabled}>
                <Percent
                  min={min}
                  max={max}
                  value={value}
                  onChange={setValue}
                  disabled={disabled}
                />
              </PercentWrapper>

              <RangeInput
                min={min}
                max={max}
                value={value}
                onChange={setValue}
                disabled={disabled}
              />
              <WebkitProgressbar
                min={min}
                max={max}
                value={value}
                disabled={disabled}
              />
            </>
          ),
        }[type]
      }
    </Item>
  );
}

export default React.memo(InputRangeSlider)

InputRangeSlider.defaultProps = {
  type: PropTypes.string.isRequired,
  min: PropTypes.number.isRequired,
  max: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
  setValue: PropTypes.func.isRequired,
  typeValue: PropTypes.string,
  disabled: PropTypes.bool.isRequired,
}

InputRangeSlider.defaultProps = {
  type: "cost",
  min: 0,
  max: 100,
  value: 0,
  setValue: () => {},
  typeValue: "",
  disabled: false,
}