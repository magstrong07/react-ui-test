import React from 'react';
import { TextField, T } from '@admiral-ds/react-ui';
import styled from 'styled-components';

//TODO доделать
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

const TextFields = (props) => {
  const [localValue, setValue] = React.useState('');
  const fieldRef = React.useRef(null);
  const handleChange = (e) => {
    const inputValue = e.target.value;
    setValue(inputValue);
  };
  return (
    <>
      <TextField {...props} value={localValue} onChange={handleChange} />
      <TextField {...props} required label="Поле необходимо заполнить" />
      <TextField {...props} ref={fieldRef} label="Напишите сочинение на заданную тему" />
    </>
  );
};

const TextFieldTest = () => {
  return propsData.map((prop, key) => {
    return (
      <>
        <Wrapper>
          <T font="Additional/L" as="div">
            {propsData[key].dimension}, {propsData[key].status}
          </T>
          <TextFields {...prop} />
        </Wrapper>
      </>
    );
  });
};

export default TextFieldTest;
