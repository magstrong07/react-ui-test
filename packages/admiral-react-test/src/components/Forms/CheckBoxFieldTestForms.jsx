import { Controller, useForm } from 'react-hook-form';
import React, { useEffect, useState } from 'react';

import { CheckboxField } from '@admiral-ds/react-ui';
import { DevTool } from '@hookform/devtools';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  > * {
    margin: 40px;
  }
  width: 600px;
  flex-direction: column;
`;

let renderCount = 0;

const CheckBoxFieldTestHookForm = (props) => {
  renderCount++;

  const { register, watch, control } = useForm();
  const watchCheckbox = watch('first checkbox', false);
  const watchCheckboxRed = watch('checkboxRed', false);

  const watchCheckboxControl = watch('checkboxСontrol', false);

  const args = Object.keys(props).reduce((acc, key) => {
    if (props[key] !== undefined) acc[key] = props[key];

    return acc;
  }, {});

  const [checked, setChecked] = useState(args.checked ?? false);
  useEffect(() => {
    setChecked(args.checked);
  }, [args.checked]);
  return (
    <Wrapper>
      <span className="counter">Render Count: {renderCount}</span>
      <CheckboxField dimension="s" {...register('first checkbox')}>
        Не управляемый чекбокс
      </CheckboxField>
      <CheckboxField dimension="s" {...register('second checkbox', { value: 'true' })}>
        Не управляемый чекбокс value true
      </CheckboxField>
      <CheckboxField dimension="s" extraText="Вариация с дополнительным текстом" {...register('third checkbox')}>
        Не управляемый маленький чекбокс
      </CheckboxField>
      <Controller
        control={control}
        name="checkboxСontrol"
        render={({ field }) => (
          <CheckboxField {...field} checked={field.value}>
            Управляемый чекбокс - {watchCheckboxControl && <i>есть галка</i>}
          </CheckboxField>
        )}
      />
      <CheckboxField
        error
        extraText={
          <span>
            Вариация с <i>дополнительно</i> декорированным <b>текстом</b>
          </span>
        }
        {...register('checkboxRed', { onChange: () => console.log('изменили') })}
      >
        Error не управляемый чекбокс - {watchCheckboxRed && <i>есть галка</i>}
      </CheckboxField>
      <CheckboxField disabled defaultChecked>
        Disabled не управляемый чекбокс
      </CheckboxField>

      <CheckboxField dimension="s" indeterminate extraText="Вариация с дополнительным текстом">
        Не управляемый маленький чекбокс indeterminate
      </CheckboxField>

      <DevTool control={control} />
    </Wrapper>
  );
};

export default CheckBoxFieldTestHookForm;
