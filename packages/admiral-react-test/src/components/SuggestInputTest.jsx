import React from 'react';
import { SuggestInput, T } from '@admiral-ds/react-ui';
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

const OPTIONS = [
  'text 1',
  'text 2 text text 2 text text 2 text text 2 text text 2 text text 2 text text 2 text ',
  'text 3',
  'text 4',
  'text 5',
  'text 6',
];

const SuggestInputs = (props) => {
  const cleanProps = Object.keys(props).reduce((acc, key) => {
    if (props[key] !== undefined) acc[key] = props[key];

    return acc;
  }, {});

  const [localValue, setValue] = React.useState(props.value ? props.value : '');
  const [isLoading, setIsLoading] = React.useState(false);
  const [options, setOptions] = React.useState();

  const handleChange = (e) => {
    const inputValue = e.target.value;

    // Если в инпуте больше 3х символов производим запрос на поиск совпадений
    if (localValue?.length < 3 && inputValue?.length > 2) {
      setIsLoading(true);
      setOptions([]);
    }

    console.log(`>>> onChange: ${inputValue}`);
    setValue(inputValue);
  };

  const handleOptionSelect = (value) => {
    console.log(`>>> onOptionSelect: ${value}`);
  };

  // Имитация запросов на бакэнд
  React.useEffect(() => {
    if (isLoading) {
      const timeout = window.setTimeout(() => {
        setIsLoading(false);
        setOptions([...OPTIONS]);
      }, 3000);
      return () => {
        window.clearTimeout(timeout);
      };
    }
  }, [isLoading]);

  return (
    <>
      <SuggestInput
        {...cleanProps}
        defaultValue="text"
        onChange={handleChange}
        onOptionSelect={handleOptionSelect}
        options={options}
        isLoading={isLoading}
      />
      <SuggestInput
        {...cleanProps}
        defaultValue="readOnly"
        onChange={handleChange}
        onOptionSelect={handleOptionSelect}
        options={options}
        isLoading={isLoading}
        readOnly
      />
    </>
  );
};

const SuggestInputTest = () => {
  return propsData.map((prop, key) => {
    return (
      <>
        <Wrapper>
          <T font="Additional/L" as="div">
            {propsData[key].dimension}, {propsData[key].status}
          </T>
          <SuggestInputs {...prop} />
        </Wrapper>
      </>
    );
  });
};

export default SuggestInputTest;
