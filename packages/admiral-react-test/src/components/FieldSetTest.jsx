import React from 'react';
import { FieldSet, CheckboxField, T } from '@admiral-ds/react-ui';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  > * {
    margin: 20px;
  }
  text-align: center;
`;
const dimensions = ['s', 'm'];

const statuses = ['succes', 'error'];

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

const FieldsSets = (props) => {
  return (
    <>
      <Wrapper>
        <FieldSet {...props} legend={'Группа чекбоксов:'}>
          <CheckboxField name="check1">Text 1</CheckboxField>
          <CheckboxField name="check2">Text 2</CheckboxField>
          <CheckboxField name="check3">Text 3</CheckboxField>
        </FieldSet>
        <FieldSet {...props} legend={'Горизонтальная группа чекбоксов:'} flexDirection="row">
          <CheckboxField name="check1">Text 1</CheckboxField>
          <CheckboxField name="check2">Text 2</CheckboxField>
          <CheckboxField name="check3">Text 3</CheckboxField>
        </FieldSet>
      </Wrapper>
    </>
  );
};

const FieldSetTest = () => {
  return propsData.map((prop, key) => {
    return (
      <>
        <Wrapper key={key}>
          <T font="Additional/L" as="div">
            {propsData[key].dimension}, {propsData[key].status}
          </T>
          <FieldsSets {...prop} />
        </Wrapper>
      </>
    );
  });
};

export default FieldSetTest;
