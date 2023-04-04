import React, { useEffect, useState } from 'react';
import { TimeInput, T } from '@admiral-ds/react-ui';
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

const TimeInputs = (props) => {
  const cleanProps = Object.keys(props).reduce((acc, key) => {
    if (props[key] !== undefined) acc[key] = props[key];

    return acc;
  }, {});

  const [localValue, setValue] = useState(props.value);
  const [localValue2, setValue2] = useState(props.value);
  const [localValue3, setValue3] = useState(props.value);
  const [localValue4, setValue4] = useState(props.value);

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
  const handleChange4 = (e) => {
    const inputValue = e.currentTarget.value;
    setValue4(inputValue);
    props.onChange?.(e);
  };

  return (
    <>
      <TimeInput {...cleanProps} startTime="09:00" endTime="18:00" value={localValue} onChange={handleChange} />
      <TimeInput
        {...cleanProps}
        startTime="09:00"
        endTime="18:00"
        value={localValue2}
        onChange={handleChange2}
        disabledSlots="11:00"
      />

      <TimeInput
        {...cleanProps}
        startTime="09:00"
        endTime="18:00"
        value={localValue3}
        onChange={handleChange3}
        displayStatusIcon
      />
      <TimeInput {...cleanProps} startTime="09:00" endTime="18:00" displayClearIcon value="12:30" />
      <TimeInput
        {...cleanProps}
        value={localValue4}
        startTime="09:00"
        endTime="18:00"
        onChange={handleChange4}
        displayClearIcon
      />
    </>
  );
};

const TimeInputTest = () => {
  return propsData.map((prop, key) => {
    return (
      <>
        <Wrapper>
          <T font="Additional/L" as="div">
            {propsData[key].dimension}, {propsData[key].status}
          </T>
          <TimeInputs {...prop} />
        </Wrapper>
      </>
    );
  });
};

export default TimeInputTest;
