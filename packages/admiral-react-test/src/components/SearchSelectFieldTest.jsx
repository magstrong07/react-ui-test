import React, { useState } from 'react';
import { SelectField, T, Option, Highlight } from '@admiral-ds/react-ui';
import styled, { css, keyframes } from 'styled-components';

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

const jump = keyframes`
  50% {
    transform: translate3d(0, -7px, 0);
  }
`;

const animation = css`
  animation: ${jump} 0.35s ease-in-out;
`;

const Icon = styled.div`
  width: 20px;
  height: 20px;
  border: 1px solid #8a96a8;
  border-radius: 50%;
  box-sizing: border-box;
  margin-right: 10px;
  transform-origin: bottom center;
  ${({ shouldAnimate }) => (shouldAnimate ? animation : '')}
`;

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
`;

const ExtraText = styled.div`
  color: #626f84;
`;

const OPTIONS_SIMPLE = [
  'teeext 1',
  'text 2 text text 2 text text 2 text text 2 text text 2 text text 2 text text 2 text ',
  'text 3',
  'text 4',
  'text 5',
  'texttt 6',
];

const OPTIONS = [
  {
    value: 'val1',
    text: 'Текст 1',
    extraText: 'Доооп Текст 1',
  },
  {
    value: 'val2',
    text: 'Текст 2',
    extraText: 'Доп Теttкст 2',
  },
  {
    value: 'val3',
    text: 'Текст 3',
    extraText: 'дддопТекст 3',
  },
  {
    value: 'val4',
    text: 'Текст 444',
    extraText: 'Доооп Тексттт 41232',
  },
];

const SelectFields = (props) => {
  const [selectValue, setSelectValue] = useState('');
  const [selectValue2, setSelectValue2] = useState('');

  const onChange = (e) => {
    setSelectValue(e.target.value);
    props.onChange?.(e);
  };
  const onChange2 = (e) => {
    setSelectValue2(e.target.value);
    props.onChange2?.(e);
  };

  return (
    <>
      <SelectField
        {...props}
        mode="searchSelect"
        label="label"
        className="Search"
        value={selectValue}
        onChange={onChange}
        placeholder="Placeholder"
      >
        {OPTIONS_SIMPLE.map((option, ind) => (
          <Option key={option} value={option} disabled={ind === 4}>
            {option}
          </Option>
        ))}
      </SelectField>
      <SelectField {...props} mode="searchSelect" label="label" value={selectValue2} onChange={onChange2}>
        {OPTIONS.map((option) => (
          <Option key={option.value} value={option.value}>
            <Icon />
            <TextWrapper>
              <Highlight>{option.text}</Highlight>
              <ExtraText>
                <Highlight>{option.extraText}</Highlight>
              </ExtraText>
            </TextWrapper>
          </Option>
        ))}
      </SelectField>
    </>
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
