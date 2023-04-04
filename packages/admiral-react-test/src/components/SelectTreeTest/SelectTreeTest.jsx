import React from 'react';
import { SelectTree, T } from '@admiral-ds/react-ui';
import styled from 'styled-components';
import { selectTreeListS, treeViewList } from './data.tsx';

const Wrapper = styled.div`
  display: block;
  width: 600px;
  > * {
    margin: 20px;
  }
  text-align: center;
`;

const dimensions = ['s', 'm'];

const expandAlls = [false, true];

let propsData = [];

function func1(dimension) {
  expandAlls.forEach((expandAll) => {
    propsData.push({
      dimension,
      expandAll,
    });
  });
}
dimensions.forEach((d) => func1(d));

const SelectTrees = (props) => {
  console.log(props);
  const cleanProps = Object.keys(props).reduce((acc, key) => {
    if (props[key] !== undefined) acc[key] = props[key];

    return acc;
  }, {});
  const [dataList, setdataList] = React.useState(treeViewList);
  const [dataList1, setdataList1] = React.useState(selectTreeListS);

  return (
    <>
      <SelectTree list={dataList} {...cleanProps} onChange={(dataList) => setdataList(dataList)}></SelectTree>
      <SelectTree list={dataList1} {...cleanProps} onChange={(dataList1) => setdataList1(dataList1)}></SelectTree>
    </>
  );
};

const SelectTreeTest = () => {
  return propsData.map((prop, key) => {
    return (
      <>
        <Wrapper>
          <T font="Additional/L" as="div">
            {propsData[key].dimension}, {propsData[key].status}
          </T>
          <SelectTrees {...prop} />
        </Wrapper>
      </>
    );
  });
};

export default SelectTreeTest;
