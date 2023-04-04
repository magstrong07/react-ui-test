import React from 'react';
import { Button, T } from '@admiral-ds/react-ui';
import { ReactComponent as StarSolid } from '@admiral-ds/icons/build/system/StarSolid.svg';
import styled from 'styled-components';

const WrapperButton = styled.div`
  display: block;
  flex-wrap: wrap;
  > * {
    margin: 10px;
  }
  text-align: center;
`;

const Separator = styled.div`
  height: 40px;
`;

const dimensions = ['s', 'm', 'l', 'xl'];

const appearances = ['primary', 'secondary', 'ghost', 'white', 'danger', 'success'];

const displayAsDisabled = [false, true];

let propsData = [];

function func1(dimension) {
  appearances.forEach((a) => func2(dimension, a));
}
function func2(dimension, appearance) {
  displayAsDisabled.forEach((disabled) => {
    propsData.push({
      dimension,
      appearance,
      disabled,
    });
  });
}
dimensions.forEach((d) => func1(d));

const Buttons = (props) => {
  return (
    <div>
      <WrapperButton>
        <Button {...props}>Button 56</Button>
        <Button {...props}>
          <StarSolid /> button 56
        </Button>
        <Button {...props}>
          button 56 <StarSolid />
        </Button>
        <Button {...props} displayAsSquare="true">
          <StarSolid />
        </Button>
      </WrapperButton>
    </div>
  );
};
const ButtonTest = () => {
  return propsData.map((prop, key) => {
    return (
      <>
        <WrapperButton>
          <Separator />
          <T font="Additional/L" as="div">
            {propsData[key].dimension}, {propsData[key].disabled ? 'disabled true' : 'disabled false'}, appearance:
            {propsData[key].appearance}
          </T>
          <Buttons {...prop} />
        </WrapperButton>
      </>
    );
  });
};

export default ButtonTest;
