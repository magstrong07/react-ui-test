import React from 'react';
import { PhoneNumberInput, T } from '@admiral-ds/react-ui';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: block;
  width: 400px;
  > * {
    margin: 20px;
  }
  text-align: center;
  box-sizing: border-box;
`;
const dimensions = ['s', 'm', 'xl'];

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

const PhoneNumberInputs = (props) => {
  const cleanProps = Object.keys(props).reduce((acc, key) => {
    if (props[key] !== undefined) acc[key] = props[key];

    return acc;
  }, {});

  const [localValue, setValue] = React.useState(props.value ?? '');
  React.useEffect(() => {
    if (props.value !== undefined) {
      setValue(props.value);
    }
  }, [props.value]);

  const handleChange = (e) => {
    const inputValue = e.currentTarget.value;
    setValue(inputValue);
    props.onChange?.(e);
  };
  console.log(props);

  return (
    <>
      <Wrapper>
        <PhoneNumberInput {...props} {...cleanProps} onChange={handleChange} value={localValue} />
      </Wrapper>
    </>
  );
};

const PhoneNumberInputTest = () => {
  return propsData.map((prop, key) => {
    return (
      <>
        <Wrapper>
          <T font="Additional/L" as="div">
            {propsData[key].dimension}, {propsData[key].disabled ? 'disabled true' : 'disabled false'}
          </T>
          <PhoneNumberInputs {...prop} />
        </Wrapper>
      </>
    );
  });
};

export default PhoneNumberInputTest;
