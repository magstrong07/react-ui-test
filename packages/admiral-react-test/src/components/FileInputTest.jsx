import React from 'react';
import { FileInput, T } from '@admiral-ds/react-ui';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: block;
  width: 800px;
  > * {
    margin: 10px;
  }
  text-align: center;
`;

const Separator1 = styled.div`
  height: 20px;
`;
const Separator2 = styled.div`
  height: 100px;
`;

const dimensions = ['m', 'xl'];

const fileDimensions = ['m', 'xl'];

let propsData = [];

function func1(dimension) {
  fileDimensions.forEach((a) => func2(dimension, a));
}
function func2(dimension, fileDimension) {
  propsData.push({
    dimension,
    fileDimension,
  });
}
dimensions.forEach((d) => func1(d));

const FileInputs = (props) => {
  return (
    <div>
      <Wrapper>
        <FileInput {...props} title="Загрузите не более 3-х файлов до 5 MB каждый"></FileInput>
      </Wrapper>
    </div>
  );
};
const FileInputTest = () => {
  return propsData.map((prop, key) => {
    return (
      <>
        <Wrapper>
          <T font="Additional/L" as="div">
            dimension: {propsData[key].dimension}, fileDimensions: {propsData[key].fileDimension}
          </T>
          <Separator1 />
          <FileInputs {...prop} />
          <Separator2 />
        </Wrapper>
      </>
    );
  });
};

export default FileInputTest;
