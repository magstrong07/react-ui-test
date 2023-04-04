import { CheckboxField, CheckboxCompositeGroup, CheckboxGroup, T } from '@admiral-ds/react-ui';
import React, { useState } from 'react';

import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  & > span {
    padding-left: 20px;
  }
`;
const Separator = styled.div`
  height: 40px;
`;

const propsData = [
  { dimension: 's', disabled: true },
  { dimension: 'm', disabled: true },
  { dimension: 's', disabled: false },
  { dimension: 'm', disabled: false },
];
const initialValue = [
  { label: 'Москва', id: '1', checked: false },
  { label: 'Воронеж', id: '2', checked: false },
  { label: 'Самара', id: '3', checked: false },
  { label: 'Омск', id: '4', checked: false },
];
const CheckboxCompositeGroupTest = (props) => {
  const [list, setValue] = useState(initialValue);

  const someItemChecked = () => list.some((item) => item.checked);

  const handleOnchangeAll = () => {
    setValue((prev) => prev.map((item) => ({ ...item, checked: !someItemChecked() })));
  };
  const handleOnchange = (e) => {
    const { name } = e.target;
    setValue((prev) => prev.map((item) => (name === item.label ? { ...item, checked: !item.checked } : { ...item })));
  };
  const getIndeterminateStatus = () => !list.every((item) => item.checked) && someItemChecked();
  return (
    <div>
      <CheckboxCompositeGroup {...props}>
        <CheckboxField
          indeterminate={getIndeterminateStatus()}
          checked={someItemChecked()}
          onChange={handleOnchangeAll}
        >
          Города:
        </CheckboxField>
        <CheckboxGroup>
          {list.map((item) => (
            <CheckboxField checked={item.checked} name={item.label} key={item.id} onChange={handleOnchange}>
              {item.label}
            </CheckboxField>
          ))}
        </CheckboxGroup>
      </CheckboxCompositeGroup>
      <Separator />
    </div>
  );
};

const CheckboxGroupTest = () => {
  return propsData.map((prop, key) => {
    return (
      <>
        <Wrapper>
          <T font="Additional/L" as="div">
            {propsData[key].dimension}
          </T>
          <CheckboxCompositeGroupTest {...prop} />
        </Wrapper>
      </>
    );
  });
};

export default CheckboxGroupTest;
