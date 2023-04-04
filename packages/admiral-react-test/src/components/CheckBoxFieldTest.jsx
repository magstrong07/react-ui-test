import React, { useEffect, useState } from 'react';
import { CheckboxField } from '@admiral-ds/react-ui';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: block;
  > * {
    margin: 40px;
  }
  width: 500px;
`;

const CheckboxFieldTest = (props) => {
  const args = Object.keys(props).reduce((acc, key) => {
    if (props[key] !== undefined) acc[key] = props[key];

    return acc;
  }, {});
  //TODO
  const [checked, setChecked] = useState(args.checked ?? false);
  useEffect(() => {
    setChecked(args.checked);
  }, [args.checked]);
  return (
    <Wrapper>
      <CheckboxField
        {...args}
        checked={checked}
        onChange={(e) => {
          setChecked(e.target.checked);
        }}
      >
        Управляемый чекбокс
      </CheckboxField>
      <CheckboxField dimension="s">Не управляемый маленький чекбокс</CheckboxField>
      <CheckboxField disabled defaultChecked>
        Disabled не управляемый чекбокс
      </CheckboxField>
      <CheckboxField
        error
        extraText={
          <span>
            Вариация с <i>дополнительно</i> декорированным <b>текстом</b>
          </span>
        }
      >
        Error не управляемый чекбокс
      </CheckboxField>
      <CheckboxField dimension="s" indeterminate extraText="Вариация с дополнительным текстом">
        Не управляемый маленький чекбокс indeterminate
      </CheckboxField>
    </Wrapper>
  );
};

export default CheckboxFieldTest;
