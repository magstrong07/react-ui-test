import React from 'react';
import { Select, Option, T } from '@admiral-ds/react-ui';
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

const MultiSelects = (props) => {
  const [selectValue, setSelectValue] = React.useState([]);

  const onChange = (e) => {
    const newValues = Array.from(e.target.selectedOptions).map((option) => option.value);
    setSelectValue(newValues);
    props.onChange?.(e);
  };

  return (
    <>
      <Select
        {...props}
        value={selectValue}
        multiple={true}
        onChange={onChange}
        displayClearIcon={true}
        placeholder="Placeholder"
        mode="searchSelect"
        data-test-id="multiselect"
      >
        <Option value="big">
          Здесь ооооочень большой текст, который может, так сказать, и не поместиться в одну строку
        </Option>
        {Array.from({ length: 20 }).map((_option, ind) => (
          <Option key={ind} value={String(ind)} disabled={[1, 3].includes(ind)}>
            {`${ind}0000`}
          </Option>
        ))}
      </Select>
      <Select
        {...props}
        readOnly
        value={selectValue}
        multiple={true}
        onChange={onChange}
        displayClearIcon={true}
        placeholder="Read only"
        mode="searchSelect"
        data-test-id="multiselect"
      >
        <Option value="big">
          Здесь ооооочень большой текст, который может, так сказать, и не поместиться в одну строку
        </Option>
        {Array.from({ length: 20 }).map((_option, ind) => (
          <Option key={ind} value={String(ind)} disabled={[1, 3].includes(ind)}>
            {`${ind}0000`}
          </Option>
        ))}
      </Select>
    </>
  );
};

const MultiSelectTest = () => {
  return propsData.map((prop, key) => {
    return (
      <>
        <Wrapper>
          <T font="Additional/L" as="div">
            {propsData[key].dimension}, {propsData[key].status}
          </T>
          <MultiSelects {...prop} />
        </Wrapper>
      </>
    );
  });
};

export default MultiSelectTest;
