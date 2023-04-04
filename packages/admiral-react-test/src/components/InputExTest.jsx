import React, { useState } from 'react';
import { InputEx, T } from '@admiral-ds/react-ui';
import styled from 'styled-components';
import { ReactComponent as StarSolid } from '@admiral-ds/icons/build/system/StarSolid.svg';

const Wrapper = styled.div`
  width: 350px;
  > * {
    margin: 20px;
  }
`;

const dimensions = ['s', 'm', 'xl'];
const disableds = [false, true];
const statused = [undefined, 'success', 'error'];

let propsData = [];

function func1(dimension) {
  disableds.forEach((a) => func2(dimension, a));
}
function func2(dimension, disabled) {
  statused.forEach((status) => {
    propsData.push({
      dimension,
      disabled,
      status,
    });
  });
}
dimensions.forEach((d) => func1(d));

const InputExTests = (props) => {
  const [localValue, setValue] = useState('Работает!');
  const [localValue1, setValue1] = useState('Тоже работает! много текста много текста');
  const [localValue2, setValue2] = useState('Тоже работает! много текста много текста');
  const [localValue3, setValue3] = useState('Тоже работает! много текста много текста');
  const [localValue4, setValue4] = useState('Тоже работает! много текста много текста');

  const [prefixValue, setPrefixValue] = useState('prefix');
  const [prefixValue1, setPrefixValue1] = useState('prefix');
  const [prefixValue2, setPrefixValue2] = useState('prefix');

  const [suffixValue, setSuffixValue] = useState('suffix');
  const [suffixValue1, setSuffixValue1] = useState('suffix');
  const [suffixValue2, setSuffixValue2] = useState('suffix');

  const cleanProps = Object.keys(props).reduce((acc, key) => {
    if (props[key] !== undefined) acc[key] = props[key];

    return acc;
  }, {});
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
  const handleChange4 = (e) => {
    const inputValue = e.currentTarget.value;
    setValue4(inputValue);
    props.onChange?.(e);
  };
  const PREFIX_OPTIONS = ['one', 'two', 'three'];
  const SUFFIX_OPTIONS = ['four', 'five', 'six'];

  return (
    <>
      <Wrapper>
        <InputEx {...cleanProps} value={localValue} onChange={handleChange}></InputEx>
        <InputEx
          {...cleanProps}
          value={localValue1}
          onChange={handleChange1}
          prefixValue={prefixValue}
          prefixValueList={PREFIX_OPTIONS}
          onPrefixValueChange={setPrefixValue}
          displayClearIcon
          placeholder="placeholder"
        ></InputEx>
        <InputEx
          {...cleanProps}
          value={localValue2}
          onChange={handleChange2}
          suffixValue={suffixValue}
          suffixValueList={SUFFIX_OPTIONS}
          onSuffixValueChange={setSuffixValue}
          displayClearIcon
          placeholder="placeholder"
        />
        <InputEx
          {...cleanProps}
          value={localValue3}
          onChange={handleChange3}
          prefixValue={prefixValue1}
          suffixValue={suffixValue1}
          prefixValueList={PREFIX_OPTIONS}
          suffixValueList={SUFFIX_OPTIONS}
          onPrefixValueChange={setPrefixValue1}
          onSuffixValueChange={setSuffixValue1}
          displayClearIcon
          placeholder="placeholder"
        ></InputEx>
        <InputEx
          {...cleanProps}
          value={localValue4}
          onChange={handleChange4}
          prefixValue={prefixValue2}
          suffixValue={suffixValue2}
          prefixValueList={PREFIX_OPTIONS}
          suffixValueList={SUFFIX_OPTIONS}
          onPrefixValueChange={setPrefixValue2}
          onSuffixValueChange={setSuffixValue2}
          displayClearIcon
          placeholder="placeholder"
          readOnly
        ></InputEx>
      </Wrapper>
    </>
  );
};

const InputExTest = () => {
  return propsData.map((prop) => {
    return (
      <>
        <Wrapper>
          <T>
            {prop.disabled ? 'disabled' : 'active'}, {prop.dimension}
          </T>
          <InputExTests {...prop} />
        </Wrapper>
      </>
    );
  });
};

export default InputExTest;
