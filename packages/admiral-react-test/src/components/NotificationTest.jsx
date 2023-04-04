import React from 'react';
import { Notification } from '@admiral-ds/react-ui';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  > * {
    margin: 8px;
  }
  justify-content: center;
  align-items: center;
`;

const NotificationTest = () => {
  return (
    <div>
      <Wrapper>
        <Notification displayStatusIcon href="" isClosable linkText="Link" status="info" title="Заголовок оповещения">
          Тут находится текст короткого оповещения
        </Notification>
      </Wrapper>
      <Wrapper>
        <Notification
          displayStatusIcon
          href=""
          isClosable
          linkText="Link"
          status="warning"
          title="Заголовок оповещения"
        >
          Тут находится текст короткого оповещения
        </Notification>
      </Wrapper>
      <Wrapper>
        <Notification displayStatusIcon href="" isClosable linkText="Link" status="error" title="Заголовок оповещения">
          Тут находится текст короткого оповещения
        </Notification>
      </Wrapper>
      <Wrapper>
        <Notification
          displayStatusIcon
          href=""
          isClosable
          linkText="Link"
          status="success"
          title="Заголовок оповещения"
        >
          Тут находится текст короткого оповещения
        </Notification>
      </Wrapper>
    </div>
  );
};

export default NotificationTest;
