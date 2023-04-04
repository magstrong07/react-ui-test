import React, { useState, useEffect } from 'react';
import { ProgressPage } from '@admiral-ds/react-ui';
import styled from 'styled-components';

const Separator = styled.div`
  height: 40px;
`;
// останавливаем анимацию для скриншота
const StyledProgressPage = styled(ProgressPage)`
  & > * div {
    transition-delay: 999s;
  }
`;

const ProgressPageTest = () => {
  const [tik, setTick] = useState(0);
  useEffect(() => {
    const counter = () => setTick((prev) => prev + 1);
    const timerId = setTimeout(counter, 10000);
    if (tik >= 20) {
      clearTimeout(timerId);
    }
    return () => {
      clearTimeout(timerId);
    };
  }, [tik]);
  return (
    <>
      <Separator />
      <ProgressPage
        label={
          <>
            <div>{'Загрузка данных...'}</div>
            <div>50 %</div>
          </>
        }
        percent={50}
        role="alert"
      />
      <Separator />
      <ProgressPage
        appearance="error"
        label={
          <>
            <div>{'Ошибка загрузки'}</div>
            <div>75 %</div>
          </>
        }
        percent={75}
        role="error"
        aria-live="assertive"
      />
      <Separator />
      <StyledProgressPage
        label={
          <>
            <div>{'Загрузка данных...'}</div>
            <div>{tik} %</div>
          </>
        }
        percent={tik}
        role="alert"
      />
      <Separator />
      <StyledProgressPage
        label={
          <>
            <div>{'Ошибка загрузки'}</div>
            <div>{tik} %</div>
          </>
        }
        percent={tik}
        role="alert"
        appearance="error"
      />
    </>
  );
};

export default ProgressPageTest;
