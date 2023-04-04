import React, { useState } from 'react';
import { Button, DateField, T } from '@admiral-ds/react-ui';
import { Controller, useForm } from 'react-hook-form';
import { DevTool } from '@hookform/devtools';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: block;
  width: 400px;
  > * {
    margin: 20px;
  }
  text-align: center;
`;
const WrapperFlex = styled.div`
  display: flex;
  > * {
    margin: 50px;
  }
  text-align: center;
`;
let renderCount = 0;
const DateFieldTestHookForm = () => {
  renderCount++;
  const { register, handleSubmit, control } = useForm();

  const [data, setData] = useState('');
  return (
    <>
      <WrapperFlex>
        <T className="counter">Render Count: {renderCount}</T>
        <br></br>

        <form action="" onSubmit={handleSubmit((data) => setData(JSON.stringify(data)))}>
          <Wrapper>
            <T>неконтролируемые компоненты</T>
            <br></br>
            <T>S</T>
            <DateField
              dimension="s"
              {...register('date s', {
                onChange: () => console.log('изменили 1'),
                onBlur: () => console.log('on blur'),
              })}
            />
            <T>M</T>
            <DateField dimension="m" {...register('date m', { onChange: () => console.log('изменили 2') })} />
            <T>XL</T>
            <DateField dimension="xl" {...register('date xl', { onChange: () => console.log('изменили 3') })} />
            <Button type="submit"> Submit </Button>
            <br></br>
            <T>{data}</T>
          </Wrapper>
        </form>

        <DevTool control={control} />
        <br></br>

        <form>
          <Wrapper>
            <T>контролируемые копоненты</T>
            <Controller
              control={control}
              name="dateFieldControl"
              render={({ field }) => <DateField {...field} label="label" />}
            />
            <Controller
              control={control}
              name="dateDisabled"
              render={({ field }) => <DateField {...field} label="label" disabled />}
            />
            <Controller
              control={control}
              name="dateExtraText"
              render={({ field }) => <DateField {...field} label="label" extraText="extraText" />}
            />
          </Wrapper>
        </form>
      </WrapperFlex>
    </>
  );
};

export default DateFieldTestHookForm;
