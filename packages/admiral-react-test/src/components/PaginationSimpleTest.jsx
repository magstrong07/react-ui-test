import React from 'react';
import { PaginationSimple, PaginationSimpleItem } from '@admiral-ds/react-ui';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  > * {
    margin-top: 180px;
  }
  justify-content: center;
  align-items: center;
`;

const PaginationSimpleTest = (totalItems, currentItem, ...args) => {
  const [current, setCurrent] = React.useState(1);
  const items = ['first item', 'second item', 'third item', 'forth item', 'fifth item', 'sixth item'];
  return (
    <>
      <Wrapper>
        <PaginationSimple
          {...args}
          totalItems={totalItems || 5}
          currentItem={currentItem || current}
          onChange={(_, item) => setCurrent(item)}
        >
          {items.map((item, i) => (
            <PaginationSimpleItem aria-label={item} key={i} />
          ))}
        </PaginationSimple>
      </Wrapper>
    </>
  );
};

export default PaginationSimpleTest;
