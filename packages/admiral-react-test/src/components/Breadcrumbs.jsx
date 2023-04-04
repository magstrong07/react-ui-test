import React from 'react';
import { Breadcrumbs, T } from '@admiral-ds/react-ui';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: block;
  > * {
    margin: 60px;
  }
`;
const BreadcrumbsTest = () => {
  const items = [
    { url: '#', text: 'page 1' },
    { url: '#', text: 'page 2222222222222222222222222222222222222222666' },
    { url: '#', text: 'page 3' },
    { url: '#', text: 'page 4' },
    { url: '#', text: 'current page' },
  ];
  return (
    <div>
      <Wrapper>
        <T> L </T>
        <Breadcrumbs items={items} />
        <T> M </T>
        <Breadcrumbs items={items} dimension="m" />
        <T> S </T>
        <Breadcrumbs items={items} dimension="s" />
      </Wrapper>
    </div>
  );
};

export default BreadcrumbsTest;
