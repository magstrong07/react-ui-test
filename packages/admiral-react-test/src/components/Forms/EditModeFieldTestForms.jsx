import React from 'react';
import { EditModeField, T } from '@admiral-ds/react-ui';
import styled from 'styled-components';
import { Controller, useForm } from 'react-hook-form';
import { DevTool } from '@hookform/devtools';

const Wrapper = styled.div`
  display: block;
  width: 500px;
  > * {
    margin: 10px;
  }
`;
let renderCount = 0;

const EditModeFieldsForms = (props) => {
  renderCount++;

  const { register, control } = useForm();
  const [localValue, setValue1] = React.useState(props.value ?? 'admin');

  const handleChange = (e) => {
    const inputValue = e.target.value;
    setValue1(inputValue);
    props.onChange?.(e);
  };
  return (
    <div>
      <Wrapper>
        <span className="counter">Render Count: {renderCount}</span>
        <EditModeField {...register('editOne')}></EditModeField>

        <Controller
          control={control}
          name="EditModeСontrol"
          render={({ field }) => (
            <EditModeField
              {...field}
              value={localValue}
              onChange={handleChange}
              label="Label"
              extraText="extra text"
            ></EditModeField>
          )}
        ></Controller>
      </Wrapper>
      <DevTool control={control} />
    </div>
  );
};

export default EditModeFieldsForms;
