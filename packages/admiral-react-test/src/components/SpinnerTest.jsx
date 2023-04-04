import React from 'react';
import { Spinner } from '@admiral-ds/react-ui';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  > * {
    margin: 50px;
  }
`;
const WrapperPrimary = styled.div`
  display: flex;
  > * {
    margin: 50px;
  }
  background-color: #0d69f2;
`;
// останавливаем анимацию для скриншота
const StyledSpinner = styled(Spinner)`
  & svg {
    animation-play-state: paused;
  }
`;

const SpinnerTest = () => {
  return (
    <>
      <Wrapper>
        <StyledSpinner dimension="xl" />
        <StyledSpinner dimension="l" />
        <StyledSpinner dimension="m" />
        <StyledSpinner dimension="s" />
      </Wrapper>

      <WrapperPrimary>
        <StyledSpinner dimension="xl" inverse />
        <StyledSpinner dimension="l" inverse />
        <StyledSpinner dimension="m" inverse />
        <StyledSpinner dimension="s" inverse />
      </WrapperPrimary>
    </>
  );
};

export default SpinnerTest;
