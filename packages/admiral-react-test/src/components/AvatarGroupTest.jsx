import React from 'react';
import { AvatarGroup, T } from '@admiral-ds/react-ui';
import { ReactComponent as PersonSolid } from '@admiral-ds/icons/build/system/PersonSolid.svg';
import styled from 'styled-components';

let imageURL = 'https://github.com/DrUNE.png?size=100';
const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  > * {
    margin: 20px;
  }
`;

const dimensions = ['s', 'm', 'l', 'xs', 'xl'];

const appearances = ['light', 'white', 'grey', 'dark'];

let propsData = [];

function func1(dimension) {
  appearances.forEach((a) => func2(dimension, a));
}
function func2(dimension, appearance) {
  propsData.push({
    dimension,
    appearance,
  });
}
dimensions.forEach((d) => func1(d));

const AvatarGroups = (props) => {
  const items = [
    { userName: 'Lena Ivanova', icon: <PersonSolid />, status: 'warn', id: '1' },
    { userName: 'Petr Lesov', icon: <PersonSolid />, status: 'warn', id: '2' },
    { userName: 'Agata Petrova', icon: <PersonSolid />, status: 'warn', id: '3' },
    { userName: 'Arina Leskova', icon: <PersonSolid />, status: 'warn', id: '4' },
    { userName: 'Rita', appearance: 'dark', status: 'danger', id: '5' },
    { userName: 'Drune', icon: <PersonSolid />, href: imageURL, status: 'warn', id: '6' },
    { userName: 'Lisa Kotova', icon: <PersonSolid />, status: 'warn', id: '7' },
    { userName: 'Ирина Глушко', icon: <PersonSolid />, status: 'warn', id: '8' },
    { userName: 'Rosa Farrel', icon: <PersonSolid />, status: 'warn', id: '9' },
    { userName: 'Tom Hidlton', appearance: 'dark', status: 'danger', id: '10' },
  ];
  return <AvatarGroup {...props} items={items} />;
};

const AvatarGroupTest = () => {
  return propsData.map((prop, key) => {
    console.log(propsData);
    return (
      <>
        <Wrapper>
          <T font="Additional/L" as="div">
            {propsData[key].dimension}, {propsData[key].appearance}
          </T>
          <AvatarGroups {...prop} />
        </Wrapper>
      </>
    );
  });
};

export default AvatarGroupTest;
