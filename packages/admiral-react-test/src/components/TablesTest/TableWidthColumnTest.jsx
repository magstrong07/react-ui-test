import React from 'react';
import { Table, T } from '@admiral-ds/react-ui';
import styled from 'styled-components';
import { rowList, columnListWithWidth } from './data.tsx';

const Wrapper = styled.div`
  display: block;
  > * {
    margin: 20px;
  }
`;

const dimensions = ['s', 'm', 'l', 'xl'];
const greyHeader = [false, true];

let propsData = [];

function func1(dimension) {
  greyHeader.forEach((greyHeader) => {
    propsData.push({
      dimension,
      greyHeader,
    });
  });
}
dimensions.forEach((d) => func1(d));

const Tables = (props) => {
  return (
    <>
      <Table {...props} rowList={rowList} columnList={columnListWithWidth} />
    </>
  );
};

const TableWidthColumnTest = () => {
  return propsData.map((prop, key) => {
    return (
      <>
        <Wrapper>
          <T font="Additional/L" as="div">
            {propsData[key].dimension}, {propsData[key].greyHeader ? 'greyHeader true' : 'greyHeader false'}
          </T>
          <Tables {...prop} />
        </Wrapper>
      </>
    );
  });
};

export default TableWidthColumnTest;
