import React from 'react';
import { TextButton, T } from '@admiral-ds/react-ui';
import styled from 'styled-components';
import { ReactComponent as AttachFileOutline } from '@admiral-ds/icons/build/system/AttachFileOutline.svg';

const Wrapper = styled.div`
  display: block;
  > * {
    margin: 40px;
  }
`;

// останавливаем анимацию для скриншота
const StyledTextButton = styled(TextButton)`
  & svg {
    animation-play-state: paused;
  }
`;
const StyledTextButtonSkeleton = styled(TextButton)`
  && > div {
    animation-play-state: paused;
  }
`;

const TextButtonTest = () => {
  return (
    <>
      <Wrapper>
        <T font="Additional/L" as="div">
          Dimension - M
        </T>
        <TextButton dimension="m" text="Text Button" icon={<AttachFileOutline />} />
        <TextButton dimension="m" text="Text Button" icon={<AttachFileOutline />} displayRight />
        <TextButton dimension="m" text="Text Button" />
        <T font="Additional/L" as="div">
          Dimension - S
        </T>
        <TextButton dimension="s" text="Text Button" icon={<AttachFileOutline />} />
        <TextButton dimension="s" text="Text Button" icon={<AttachFileOutline />} displayRight />
        <TextButton dimension="s" text="Text Button" />
        <T font="Additional/L" as="div">
          Загрузка
        </T>
        <StyledTextButton dimension="m" text="Text Button" icon={<AttachFileOutline />} loading />
        <StyledTextButton dimension="s" text="Text Button" icon={<AttachFileOutline />} loading />
        <StyledTextButton dimension="m" text="Text Button" loading />
        <T font="Additional/L" as="div">
          Скелетон
        </T>
        <StyledTextButtonSkeleton dimension="m" text="Text Button" icon={<AttachFileOutline />} skeleton />
        <StyledTextButtonSkeleton dimension="s" text="Text Button" icon={<AttachFileOutline />} displayRight skeleton />
        <StyledTextButtonSkeleton dimension="m" text="Text Button" skeleton />
      </Wrapper>
    </>
  );
};

export default TextButtonTest;
