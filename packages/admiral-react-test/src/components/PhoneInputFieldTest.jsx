import React from 'react';
import { PhoneInputField, T } from '@admiral-ds/react-ui';
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

const PhoneInputFieldFields = (props) => {
  const cleanProps = Object.keys(props).reduce((acc, key) => {
    if (props[key] !== undefined) acc[key] = props[key];

    return acc;
  }, {});

  const [localValue, setValue] = React.useState(props.value ?? '');

  const handleChange = (e) => {
    const inputValue = e.currentTarget.value;
    setValue(inputValue);
    props.onChange?.(e);
  };

  return (
    <PhoneInputField
      {...props}
      {...cleanProps}
      onChange={handleChange}
      value={localValue}
      label="Введите номер телефона"
    />
  );
};

const PhoneInputFieldTest = () => {
  return propsData.map((prop, key) => {
    return (
      <>
        <Wrapper>
          <T font="Additional/L" as="div">
            {propsData[key].dimension}, {propsData[key].status}
          </T>
          <PhoneInputFieldFields {...prop} />
        </Wrapper>
      </>
    );
  });
};

export default PhoneInputFieldTest;
