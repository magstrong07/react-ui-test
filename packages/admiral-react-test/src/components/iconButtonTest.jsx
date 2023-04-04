import React from 'react';
import { IconButton, T } from '@admiral-ds/react-ui';
import styled from 'styled-components';
import { ReactComponent as StarSolid } from '@admiral-ds/icons/build/system/StarSolid.svg';

const Container = styled.div`
  padding: 14px;
  position: relative;
  display: flex;
  flex-wrap: wrap;

  > * {
    margin: 8px 50px 50px 0;
  }
`;
// останавливаем анимацию для скриншота
const StyledIconButton = styled(IconButton)`
  & svg {
    animation-play-state: paused;
  }
`;

const IconButtonTest = () => {
  return (
    <div>
      <Container>
        <div>
          <T font="Additional/L" as="div">
            Dimension - xl
          </T>
          <IconButton dimension="xl">
            <StarSolid />
          </IconButton>
        </div>
        <div>
          <T font="Additional/L" as="div">
            Dimension - l
          </T>
          <IconButton dimension="l">
            <StarSolid />
          </IconButton>
        </div>
        <div>
          <T font="Additional/L" as="div">
            Dimension - m
          </T>
          <IconButton dimension="m">
            <StarSolid />
          </IconButton>
        </div>
        <div>
          <T font="Additional/L" as="div">
            Dimension - s
          </T>
          <IconButton dimension="s">
            <StarSolid />
          </IconButton>
        </div>
      </Container>
      <Container>
        <div>
          <T font="Additional/L" as="div">
            Loading
          </T>
          <StyledIconButton loading dimension="xl" />
        </div>
        <div>
          <T font="Additional/L" as="div">
            Disabled
          </T>
          <IconButton disabled dimension="xl">
            <StarSolid />
          </IconButton>
        </div>
        <div>
          <T font="Additional/L" as="div">
            Skeleton
          </T>
          <IconButton skeleton dimension="xl" />
        </div>
      </Container>
    </div>
  );
};

export default IconButtonTest;
