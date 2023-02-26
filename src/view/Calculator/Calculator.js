import React, { useState, useEffect, useCallback } from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";

import InputRangeSlider from "../../features/InputRangeSlider/InputRangeSlider";
import Button from "../../features/Button/Button";
import color from "../../styles/color-constants";
import {
  setCost,
  setPercent,
  setTerm,
  setMonthPay,
  setSumLeasing,
  selectSlider,
  selectSliderCurrents,
  setInitialFee,
  setCostOut,
  setPercentOut,
  setTermOut,
  setAllOut,
} from "../../app/sliderSlice";
import { formatNum } from "../../utils/formatNum";
import { sendData } from "../../app/sliderSlice";

function Calculator() {
  const { defaults, min, max, out, isLoading } = useSelector(selectSlider);
  const { cost, percent, term, initialFee, sumLeasing, monthPay } =
    useSelector(selectSliderCurrents);
  const dispatch = useDispatch();
  const [disabled, setDisabled] = useState(false);
  const [isDisabledBtn, setIsDisabledBtn] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setDisabled(isLoading);
    setIsDisabledBtn(isLoading);
    setLoading(isLoading);
  }, [isLoading]);

  useEffect(() => {
    setIsDisabledBtn(out.all);
  }, [out.all]);

  useEffect(() => {
    dispatch(setMonthPay());
  }, [dispatch, cost, term, initialFee]);

  useEffect(() => {
    dispatch(setSumLeasing());
  }, [dispatch, monthPay, term, initialFee]);

  useEffect(() => {
    dispatch(setInitialFee());
  }, [dispatch, cost, percent]);

  useEffect(() => {
    dispatch(setAllOut());
  }, [dispatch, out.cost, out.percent, out.term]);

  const handleChangeCost = useCallback(
    ({ target }) => {
      let { value, min, max } = target;
      min = Number(min);
      max = Number(max);
      value = value.replace(/\D/g, "");
      value = Number(value);
      if (value < min || value > max) {
        setIsDisabledBtn(true);
        dispatch(setCostOut(true));
        dispatch(setCost(value));
      } else {
        dispatch(setCostOut(false));
        dispatch(setCost(value));
      }
    },
    [dispatch]
  );

  const handleChangePercent = useCallback(
    ({ target }) => {
      let { value, min, max } = target;
      min = Number(min);
      max = Number(max);
      value = value.replace(/\D/g, "");
      value = Number(value);
      if (value < min || value > max) {
        setIsDisabledBtn(true);
        dispatch(setPercentOut(true));
        dispatch(setPercent(value));
      } else {
        dispatch(setPercentOut(false));
        dispatch(setPercent(value));
      }
    },
    [dispatch]
  );

  const handleChangeTerm = useCallback(
    ({ target }) => {
      let { value, min, max } = target;
      min = Number(min);
      max = Number(max);
      value = value.replace(/\D/g, "");
      value = Number(value);
      if (value < min || value > max) {
        setIsDisabledBtn(true);
        dispatch(setTermOut(true));
        dispatch(setTerm(value));
      } else {
        dispatch(setTermOut(false));
        dispatch(setTerm(value));
      }
    },
    [dispatch]
  );

  const sendRequest = (e) => {
    e.preventDefault();
    const data = defaults;
    dispatch(sendData(data));
  };

  return (
    <Wrapper onSubmit={sendRequest}>
      <SliderGroup>
        <WrapperSlider>
          <Label lineHeight="1.25rem">Стоимость автомобиля</Label>
          <InputRangeSlider
            type={"cost"}
            min={min.cost}
            max={max.cost}
            value={cost}
            setValue={handleChangeCost}
            typeValue={"₽"}
            disabled={disabled}
          />
        </WrapperSlider>
        <WrapperSlider>
          <Label lineHeight="1.25rem">Первоначальный взнос</Label>
          <InputRangeSlider
            type={"percent"}
            min={min.percent}
            max={max.percent}
            value={percent}
            setValue={handleChangePercent}
            disabled={disabled}
          />
        </WrapperSlider>
        <WrapperSlider>
          <Label lineHeight="1.25rem">Срок лизинга</Label>
          <InputRangeSlider
            type={"cost"}
            min={min.term}
            max={max.term}
            value={term}
            setValue={handleChangeTerm}
            typeValue={"мес."}
            disabled={disabled}
          />
        </WrapperSlider>
      </SliderGroup>
      <LabelGroup>
        <WrapperCost>
          <Label lineHeight="1.5rem">Сумма договора лизинга</Label>
          <OutputCost typeValue="₽">{formatNum(sumLeasing)}</OutputCost>
        </WrapperCost>
        <WrapperCost>
          <Label lineHeight="1.5rem">Ежемесячный платеж от</Label>
          <OutputCost typeValue="₽">{formatNum(monthPay)}</OutputCost>
        </WrapperCost>
        <WrapperButton>
          <Button
            loading={loading}
            text="Оставить заявку"
            isDisabledBtn={isDisabledBtn}
          />
        </WrapperButton>
      </LabelGroup>
    </Wrapper>
  );
}

const Flex = styled.div`
  display: flex;
  box-sizing: border-box;
`;
const Wrapper = styled.form.attrs({
  action: "#",
})`
  display: flex;
  box-sizing: border-box;
  justify-content: space-between;
  flex-direction: column;
  gap: 3.25rem;
  width: 100%;
  @media screen and (max-width: 768px) {
    gap: 1.25rem;
  }
`;
const OutputCost = styled.span`
  font-family: "Nekst";
  font-weight: 900;
  font-size: 3.375rem;
  color: #333333;
  margin-bottom: -0.5rem;
  @media screen and (max-width: 768px) {
    font-size: 1.375rem;
    line-height: 90%;
  }

  &:after {
    content: "${(props) => props.typeValue || ""}";
    position: relative;
    top: -0.35rem;
    left: 0.9375rem;
    @media (max-width: 768px) {
      top: -0.15rem;
      left: 0.4rem;
    }
  }
`;
const Label = styled.span`
  font-family: "Gilroy";
  font-weight: 400;
  font-size: 1rem;
  line-height: ${(props) => props.lineHeight || "normal"};
  color: ${color.lightGray};
  @media screen and (max-width: 768px) {
    font-size: 0.875rem;
  }
`;

const SliderGroup = styled(Flex)`
  justify-content: space-between;
  flex: 0 0 33.333%;
  gap: 2rem;
  @media screen and (max-width: 1120px) {
    flex-direction: column;
  }
  @media (max-width: 768px) {
    gap: 1.5625rem;
  }
`;
const LabelGroup = styled(Flex)`
  justify-content: space-between;
  flex: 1;
  gap: 2rem;
  @media screen and (max-width: 1120px) {
    flex-direction: column;
  }
  @media (max-width: 768px) {
    gap: 2rem;
  }
`;
const WrapperColumn = styled(Flex)`
  flex-direction: column;
  justify-content: flex-start;
`;
const WrapperSlider = styled(WrapperColumn)`
  flex-grow: 1;
  gap: 1.5rem;
  @media (max-width: 768px) {
    gap: 0.5rem;
  }
`;
const WrapperCost = styled(WrapperColumn)`
  width: 100%;
  gap: 0.5rem;
  @media (max-width: 768px) {
    gap: 0.125rem;
  }
`;
const WrapperButton = styled(Flex)`
  width: 100%;
  flex-direction: column;
  justify-content: flex-end;
`;

export default Calculator;
