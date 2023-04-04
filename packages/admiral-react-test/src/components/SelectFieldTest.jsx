import React, { useState } from 'react';
import { SelectField, Option, T } from '@admiral-ds/react-ui';
import styled, { css } from 'styled-components';

const Wrapper = styled.div`
  display: block;
  width: 600px;
  > * {
    margin: 20px;
  }
  text-align: center;
`;
const Red = styled.span`
  color: red;
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

const SelectFields = (props) => {
  const [selectValue, setSelectValue] = useState('');

  const options = [
    {
      label: 'Option one very long very long very long very long very long very long very long very long',
      value: '1',
    },
    {
      label: (
        <T as="span" font="Caption/XS">
          <Red>*</Red> опция другим шрифтом
        </T>
      ),
      value: '2',
    },
    { label: 'Option three', value: '3' },
    { label: 'Option four', value: '4' },
    { label: 'Option five', value: '5' },
    { label: 'Option six', value: '6' },
    { label: 'Option seven', value: '7' },
  ];
  const onChange = (e) => {
    setSelectValue(e.target.value);
  };

  const valueToModelMap = options.reduce((acc, model) => {
    acc[model.value] = model;
    return acc;
  }, {});

  const simpleRender = (value) => (value ? valueToModelMap[value].label : value);

  return (
    <SelectField
      {...props}
      label="Опции"
      value={selectValue}
      renderInputValue={simpleRender}
      onChange={onChange}
      required
    >
      {options.map((item, index) => (
        <Option role="option" value={item.value} key={index}>
          {item.label}
        </Option>
      ))}
    </SelectField>
  );
};

const SelectFieldTest = () => {
  return propsData.map((prop, key) => {
    return (
      <>
        <Wrapper>
          <T font="Additional/L" as="div">
            {propsData[key].dimension}, {propsData[key].status}
          </T>
          <SelectFields {...prop} />
        </Wrapper>
      </>
    );
  });
};

export default SelectFieldTest;
