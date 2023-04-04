import React from 'react';
import { DateInput, T } from '@admiral-ds/react-ui';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: block;
  width: 400px;
  > * {
    margin: 20px;
  }
  text-align: center;
`;
const dimensions = ['s', 'm', 'xl'];

const types = ['date', 'date-range'];

const disableds = [false, true];

let propsData = [];

function func1(dimension) {
  types.forEach((a) => func2(dimension, a));
}
function func2(dimension, type) {
  disableds.forEach((disabled) => {
    propsData.push({
      dimension,
      type,
      disabled,
    });
  });
}
dimensions.forEach((d) => func1(d));

const DateInputs = (props) => {
  return (
    <>
      <Wrapper>
        <DateInput {...props} label="Label" onChange={function noRefCheck() {}} />
        <DateInput {...props} label="success" onChange={function noRefCheck() {}} status="success" />
        <DateInput {...props} label="error" onChange={function noRefCheck() {}} status="error" />
        <DateInput {...props} label="value" value="20.01.2021 - 22.01.2021" onChange={function noRefCheck() {}} />
      </Wrapper>
    </>
  );
};

const DateInputTest = () => {
  return propsData.map((prop, key) => {
    return (
      <>
        <Wrapper>
          <T font="Additional/L" as="div">
            {propsData[key].dimension}, {propsData[key].type}
          </T>
          <DateInputs {...prop} />
        </Wrapper>
      </>
    );
  });
};

export default DateInputTest;
