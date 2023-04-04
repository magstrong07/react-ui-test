import React, { useEffect, useState } from 'react';
import { InputField, T } from '@admiral-ds/react-ui';
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

const InputFields = (props) => {
  const cleanProps = Object.keys(props).reduce((acc, key) => {
    if (props[key] !== undefined) acc[key] = props[key];

    return acc;
  }, {});

  const [localValue, setValue] = useState(props.value);

  const [localValue1, setValue1] = useState(props.value);

  const [localValue2, setValue2] = useState(props.value);

  const [localValue3, setValue3] = useState(props.value);

  useEffect(() => {
    if (props.value !== undefined) {
      setValue(props.value);
    }
  }, [props.value]);

  const handleChange = (e) => {
    const inputValue = e.currentTarget.value;
    setValue(inputValue);
    props.onChange?.(e);
  };
  const handleChange1 = (e) => {
    const inputValue = e.currentTarget.value;
    setValue1(inputValue);
    props.onChange?.(e);
  };
  const handleChange2 = (e) => {
    const inputValue = e.currentTarget.value;
    setValue2(inputValue);
    props.onChange?.(e);
  };
  const handleChange3 = (e) => {
    const inputValue = e.currentTarget.value;
    setValue3(inputValue);
    props.onChange?.(e);
  };

  return (
    <>
      <InputField
        label="label"
        {...cleanProps}
        style={{ maxWidth: '500px' }}
        value={localValue}
        onChange={handleChange}
      />
      <InputField
        label="label"
        {...cleanProps}
        style={{ maxWidth: '500px' }}
        value={localValue1}
        onChange={handleChange1}
        displayClearIcon
      />
      <InputField
        {...cleanProps}
        label="type password"
        style={{ maxWidth: '500px' }}
        value={localValue2}
        onChange={handleChange2}
        type="password"
      />
      <InputField
        label="readOnly"
        {...cleanProps}
        style={{ maxWidth: '500px' }}
        value={localValue3}
        onChange={handleChange3}
        type="password"
        readOnly
      />
    </>
  );
};

const InputFieldTest = () => {
  return propsData.map((prop, key) => {
    return (
      <>
        <Wrapper>
          <T font="Additional/L" as="div">
            {propsData[key].dimension}, {propsData[key].status}
          </T>
          <InputFields {...prop} />
        </Wrapper>
      </>
    );
  });
};

export default InputFieldTest;
