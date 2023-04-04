import React, { useState } from 'react';
import { Tree } from '@admiral-ds/react-ui';
import styled from 'styled-components';
import { demo1_TreeModel, demo1_TreeModel1, demo1_TreeModel2, demo1_TreeModel3 } from './content.jsx';

const Wrapper = styled.div`
  > * {
    margin: 40px;
  }
`;

const TreeTest = (props) => {
  const cleanProps = Object.keys(props).reduce((acc, key) => {
    if (props[key] !== undefined) acc[key] = props[key];

    return acc;
  }, {});
  const [dataList, setDataList] = useState(demo1_TreeModel);
  const [dataList1, setDataList1] = useState(demo1_TreeModel1);
  const [dataList2, setDataList2] = useState(demo1_TreeModel2);
  const [dataList3, setDataList3] = useState(demo1_TreeModel3);

  return (
    <>
      <Wrapper>
        <Tree {...cleanProps} model={dataList} onChange={(dataList) => setDataList(dataList)} />
        <Tree {...cleanProps} model={dataList1} onChange={(dataList1) => setDataList1(dataList1)} dimension="s" />
        <Tree
          {...cleanProps}
          model={dataList2}
          onChange={(dataList2) => setDataList2(dataList2)}
          withCheckbox={false}
        />
        <Tree
          {...cleanProps}
          model={dataList3}
          onChange={(dataList3) => setDataList3(dataList3)}
          withCheckbox={false}
          dimension="s"
        />
      </Wrapper>
    </>
  );
};

export default TreeTest;
