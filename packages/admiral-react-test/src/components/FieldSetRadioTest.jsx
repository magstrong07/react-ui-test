import React, { useState } from 'react';
import { FieldSet, RadioButton, T } from '@admiral-ds/react-ui';
import styled from 'styled-components';

const Wrapper = styled.div`
  > * {
    margin: 20px;
  }
`;

const dimensions = ['s', 'm'];

const disableds = [false, true];

let propsData = [];

function func1(dimension) {
  disableds.forEach((disabled) => {
    propsData.push({
      dimension,
      disabled,
    });
  });
}
dimensions.forEach((d) => func1(d));

const FieldsSets = (props) => {
  const values = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15'];
  const [selected, setSelected] = useState('');
  return (
    <>
      <Wrapper>
        <FieldSet
          {...props}
          onChange={(e) => {
            setSelected(e.target.value);
          }}
          legend="Управляемая группа радиокнопок"
        >
          <RadioButton value={values[0]} name="test1" checked={values[0] === selected} readOnly>
            First option
          </RadioButton>
          <RadioButton value={values[1]} name="test1" checked={values[1] === selected} readOnly>
            Second option
          </RadioButton>
          <RadioButton value={values[2]} name="test1" checked={values[2] === selected} readOnly>
            Third option
          </RadioButton>
        </FieldSet>
        <FieldSet {...props} legend="Неуправляемая группа радиокнопок">
          <RadioButton value={values[3]} name="test2">
            First option
          </RadioButton>
          <RadioButton value={values[4]} name="test2">
            Second option
          </RadioButton>
          <RadioButton value={values[5]} name="test2" extraText="some extra text">
            Third option
          </RadioButton>
        </FieldSet>

        <FieldSet dimension="s" legend="Группа радиокнопок с одной задизейбленной кнопкой">
          <RadioButton value={values[6]} name="test3">
            First option
          </RadioButton>
          <RadioButton value={values[7]} disabled name="test3">
            Second option
          </RadioButton>
          <RadioButton value={values[8]} name="test3">
            Third option
          </RadioButton>
        </FieldSet>

        <FieldSet {...props} legend="Горизонтальная группа радиокнопок" flexDirection="row">
          <RadioButton value={values[9]} name="test4">
            First option
          </RadioButton>
          <RadioButton value={values[10]} name="test4">
            Second option
          </RadioButton>
          <RadioButton value={values[11]} name="test4">
            Third option
          </RadioButton>
        </FieldSet>
      </Wrapper>
    </>
  );
};

const FieldSetRadioTest = () => {
  return propsData.map((prop, key) => {
    return (
      <>
        <Wrapper key={key}>
          <T font="Additional/L" as="div">
            {propsData[key].dimension}
          </T>
          <FieldsSets {...prop} key={key} />
        </Wrapper>
      </>
    );
  });
};

export default FieldSetRadioTest;
