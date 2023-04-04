import React from 'react';
import { TextArea, T } from '@admiral-ds/react-ui';
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

const TextAreas = (props) => {
  const [localValue, setValue] = React.useState(props.value);
  const handleChange = (e) => {
    const inputValue = e.target.value;
    setValue(inputValue);
    props.onChange?.(e);
  };
  return (
    <>
      <TextArea {...props} value={localValue} onChange={handleChange} />
      <TextArea {...props} placeholder="Placeholder" />
      <TextArea {...props} value="тест" />
      <TextArea {...props} value="disableCopying" disableCopying />
      <TextArea {...props} value="readOnly" readOnly />
    </>
  );
};

const TextAreaTest = () => {
  return propsData.map((prop, key) => {
    return (
      <>
        <Wrapper>
          <T font="Additional/L" as="div">
            {propsData[key].dimension}, {propsData[key].status}
          </T>
          <TextAreas {...prop} />
        </Wrapper>
      </>
    );
  });
};

export default TextAreaTest;
