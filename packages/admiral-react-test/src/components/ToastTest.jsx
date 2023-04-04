import React from 'react';
import { Toast, ToastProvider, Button, useToast } from '@admiral-ds/react-ui';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: block;
  > * {
    margin: 40px;
  }
`;
const items = [
  {
    status: 'error',
    children: `Запрос завершился ошибкой`,
    title: 'Заголовок',
    isClosable: true,
    linkText: 'Link',
    displayStatusIcon: true,
  },
  {
    status: 'warning',
    children: 'Слишком много попыток',
    title: 'Заголовок',
    isClosable: true,
    linkText: 'Link',
    displayStatusIcon: true,
  },
  {
    status: 'info',
    children: 'Осталось 7 попыток',
    title: 'Заголовок',
    isClosable: true,
    linkText: 'Link',
    displayStatusIcon: true,
  },
  {
    status: 'success',
    children: 'Запрос выполнен успешно',
    title: 'Заголовок',
    isClosable: true,
    linkText: 'Link',
    displayStatusIcon: true,
  },
];

const ToastTest = () => {
  return (
    <>
      <Wrapper>
        <ToastProvider>
          <NotificationEmitter />

          <Toast style={{ top: 128, left: 12 }}>
            <Button>test</Button>
          </Toast>
        </ToastProvider>
        <ToastProvider>
          <NotificationEmitter />

          <Toast />
        </ToastProvider>
      </Wrapper>
    </>
  );
};

const NotificationEmitter = () => {
  const { addToast } = useToast();
  return <Button onClick={() => addToast(items[0])}>Добавить сообщение</Button>;
};

export default ToastTest;
