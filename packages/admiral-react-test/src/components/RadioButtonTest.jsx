import React from 'react';
import { RadioButton } from '@admiral-ds/react-ui';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  > * {
    margin: 8px;
  }
  justify-content: center;
  align-items: center;
`;

const dimensions = ['s', 'm'];
const disableds = [false, true];
const checkeds = [false, true];

let propsData = [];

function func1(dimension) {
  disableds.forEach((a) => func2(dimension, a));
}
function func2(dimension, disabled) {
  checkeds.forEach((checked) => {
    propsData.push({
      dimension,
      disabled,
      checked,
    });
  });
}
dimensions.forEach((d) => func1(d));

const RadioButtons = (props) => {
  return (
    <div>
      <Wrapper>
        <RadioButton
          {...props}
          extraText={`size: ${props.dimension}, checked: ${props.checked}, disabled: ${props.disabled}`}
        ></RadioButton>
      </Wrapper>
    </div>
  );
};
const RadioButtonTest = () => {
  return propsData.map((prop) => {
    return (
      <>
        <Wrapper>
          <RadioButtons {...prop} />
        </Wrapper>
      </>
    );
  });
};

export default RadioButtonTest;
