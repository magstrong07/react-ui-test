import React from 'react';
import { Link, T } from '@admiral-ds/react-ui';
import styled from 'styled-components';
import { ReactComponent as ArrowLeftOutline } from '@admiral-ds/icons/build/system/ArrowLeftOutline.svg';
import { ReactComponent as ArrowRightOutline } from '@admiral-ds/icons/build/system/ArrowRightOutline.svg';

const Container = styled.div`
  padding: 14px;
  position: relative;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;

  > * {
    margin: 8px 10px 10px 0;
  }
`;
const Separator = styled.div`
  height: 30px;
`;

const LinkTest = () => {
  return (
    <div>
      <Container>
        <T font="Additional/L" as="div">
          Dimension - M
        </T>
        <Link appearance={'primary'} href="https://reactjs.org/docs/hooks-intro.html">
          Link
        </Link>
        <Separator />
        <T font="Additional/L" as="div">
          Dimension - M, target _blank
        </T>
        <Link appearance={'primary'} href="https://reactjs.org/docs/hooks-intro.html" target={'_blank'}>
          Ссылка
        </Link>
        <Separator />
        <T font="Additional/L" as="div">
          Dimension - S
        </T>
        <Link appearance={'primary'} dimension="s" href="" onClick={(e) => e.preventDefault()}>
          empty
        </Link>
        <Separator />
        <T font="Additional/L" as="div">
          Dimension - M, primary with icon
        </T>
        <Link appearance={'primary'} href="https://reactjs.org/docs/hooks-intro.html" target={'_blank'}>
          <ArrowLeftOutline width={24} />
          назад
        </Link>
        <Separator />
        <T font="Additional/L" as="div">
          Dimension - M, secondary with icon
        </T>
        <Link appearance={'secondary'} href="https://reactjs.org/docs/hooks-intro.html" target={'_blank'}>
          вперёд
          <ArrowRightOutline width={24} />
        </Link>
      </Container>
    </div>
  );
};

export default LinkTest;
