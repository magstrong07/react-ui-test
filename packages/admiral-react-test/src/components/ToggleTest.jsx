import React from 'react';
import { Toggle } from '@admiral-ds/react-ui';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: block;
  > * {
    margin: 20px;
  }
  width: 400px;
`;

const TogglesTest = () => {
  return (
    <>
      <Wrapper>
        <Toggle>Dimension - m</Toggle>

        <Toggle dimension="s">Dimension - s</Toggle>
        <Toggle checked readOnly>
          Active
        </Toggle>

        <Toggle checked={false} readOnly>
          Not active
        </Toggle>

        <Toggle checked disabled>
          Active disabled
        </Toggle>

        <Toggle checked={false} disabled>
          Not active disabled
        </Toggle>
        <Toggle />

        <Toggle>Some label</Toggle>

        <Toggle labelPosition="left">Some label</Toggle>
        <Toggle extraText="Add text">Dimension - m</Toggle>

        <Toggle extraText="Add text" dimension="s">
          Dimension - s
        </Toggle>

        <Toggle labelPosition="left" extraText="Add text">
          Dimension - m
        </Toggle>

        <Toggle labelPosition="left" extraText="Add text" dimension="s">
          Dimension - s
        </Toggle>
        <Toggle labelPosition="left">Some label</Toggle>

        <Toggle labelPosition="left" width="200px">
          Some label
        </Toggle>

        <Toggle labelPosition="left" width={300}>
          Some label
        </Toggle>

        <Toggle labelPosition="left" width="100%">
          Some label
        </Toggle>
      </Wrapper>
    </>
  );
};

export default TogglesTest;
