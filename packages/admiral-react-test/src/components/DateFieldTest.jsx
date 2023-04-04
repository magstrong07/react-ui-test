import React from 'react';
import { DateField, T } from '@admiral-ds/react-ui';
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

const DateFields = (props) => {
  return (
    <>
      <Wrapper>
        <DateField {...props} label="Label" onChange={function noRefCheck() {}} />
        <DateField {...props} label="success" onChange={function noRefCheck() {}} status="success" />
        <DateField {...props} label="error" onChange={function noRefCheck() {}} status="error" />
        <DateField {...props} label="value" value="20.01.2021 - 22.01.2021" onChange={function noRefCheck() {}} />
      </Wrapper>
    </>
  );
};

const DateFieldTest = () => {
  return propsData.map((prop, key) => {
    return (
      <>
        <Wrapper>
          <T font="Additional/L" as="div">
            {propsData[key].dimension}, {propsData[key].type}
          </T>
          <DateFields {...prop} />
        </Wrapper>
      </>
    );
  });
};

export default DateFieldTest;
