import React from 'react';
import { TextInput, T } from '@admiral-ds/react-ui';
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

const TextInputs = (props) => {
  const [localValue, setValue] = React.useState(props.value);
  const handleChange = (e) => {
    const inputValue = e.target.value;
    setValue(inputValue);
    props.onChange?.(e);
  };
  return (
    <>
      <TextInput {...props} value={localValue} onChange={handleChange} />
      <TextInput {...props} placeholder="Placeholder" />
      <TextInput {...props} value="тест" />
      <TextInput {...props} value="disableCopying" disableCopying />
      <TextInput {...props} value="readOnly" readOnly />
    </>
  );
};

const TextInputTest = () => {
  return propsData.map((prop, key) => {
    return (
      <>
        <Wrapper>
          <T font="Additional/L" as="div">
            {propsData[key].dimension}, {propsData[key].status}
          </T>
          <TextInputs {...prop} />
        </Wrapper>
      </>
    );
  });
};

export default TextInputTest;
