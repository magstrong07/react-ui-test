import React from 'react';
import { Badge, Button } from '@admiral-ds/react-ui';
import styled from 'styled-components';

const WrapperBadge = styled.div`
  padding: 14px;
  position: relative;
  display: block;
  columns: 300px 3;

  > * {
    margin: 8px 20px 0 0;
  }
`;

const BadgeTest = () => {
  const appearanceData = [
    'light',
    'info',
    'warning',
    'success',
    'error',
    'grey',
    'dark',
    'lightInactive',
    'lightDisable',
    'white',
    'whiteInactive',
    'whiteDisable',
  ];
  const dimension = ['s', 'm'];

  const propsData = [];

  appearanceData.forEach((e) => {
    dimension.forEach((k) => {
      propsData.push({ dimension: k, appearance: e, color: `${k} ${e}` });
    });
  });

  const newArray = propsData.map((props) => (
    <>
      <WrapperBadge>
        <div>
          <Badge {...props}>5</Badge>
        </div>
        <div> {props.color} </div>
      </WrapperBadge>
    </>
  ));

  return (
    <div>
      <WrapperBadge>{newArray}</WrapperBadge>
      <WrapperBadge>
        <Button>
          Пример
          <Badge appearance="whiteInactive">4</Badge>
        </Button>
        <Button>
          Example
          <Badge appearance="whiteInactive" aria-label="Amount 4">
            4
          </Badge>
        </Button>
      </WrapperBadge>
    </div>
  );
};

export default BadgeTest;
