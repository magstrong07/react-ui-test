import React from 'react';
import { SliderInput, T } from '@admiral-ds/react-ui';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: block;
  width: 600px;
  > * {
    margin: 20px;
  }
  text-align: center;
`;

const dimensions = ['s', 'm', 'xl'];

const statuses = ['undefined', 'success', 'error'];

const disableds = [false, true];

let propsData = [];

function func1(dimension) {
  statuses.forEach((a) => func2(dimension, a));
}
function func2(dimension, status) {
  disableds.forEach((disabled) => {
    propsData.push({
      dimension,
      status,
      disabled,
    });
  });
}
dimensions.forEach((d) => func1(d));

const SliderInputs = (props) => {
  return (
    <>
      <SliderInput {...props} minValue={0} maxValue={1000} />
      <SliderInput {...props} minValue={200} maxValue={5000} precision={3} placeholder="200 $" />
    </>
  );
};

const SliderInputTest = () => {
  return propsData.map((prop, key) => {
    return (
      <>
        <Wrapper>
          <T font="Additional/L" as="div">
            {propsData[key].dimension}, {propsData[key].status}
          </T>
          <SliderInputs {...prop} />
        </Wrapper>
      </>
    );
  });
};

export default SliderInputTest;
