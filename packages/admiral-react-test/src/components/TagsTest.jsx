import React from 'react';
import { Tag, Tags } from '@admiral-ds/react-ui';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: block;
  > * {
    margin: 40px;
  }
`;

const TagsTest = () => {
  return (
    <>
      <Wrapper>
        <Tags>
          <Tag>Neutral</Tag>
          <Tag kind="green">Green</Tag>
          <Tag kind="blue">Blue</Tag>
          <Tag as="span" kind="red">
            Red
          </Tag>
          <Tag kind="orange">Orange</Tag>
        </Tags>
        <Tags>
          <Tag onClick={() => console.log('click active tag')}>Active</Tag>
          <Tag>Passive</Tag>
          <Tag width={150}>Если текст длинее ширины тэга, добавляется тултип </Tag>
        </Tags>
      </Wrapper>
    </>
  );
};

export default TagsTest;
