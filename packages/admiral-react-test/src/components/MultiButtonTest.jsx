import React from 'react';
import { MultiButton } from '@admiral-ds/react-ui';
import styled from 'styled-components';

const WrapperButton = styled.div`
  display: flex;
  flex-wrap: wrap;
  > * {
    margin: 8px;
  }
  justify-content: center;
  align-items: center;
`;

const dimension = ['s', 'm', 'l', 'xl'];
const appearance = ['primary', 'secondary'];

let propsData = [];

dimension.forEach((k) => {
  appearance.forEach((j) => {
    propsData.push({
      dimension: k,
      appearance: j,
    });
  });
});
const items = [
  {
    id: '1',
    display: 'Option one',
  },
  {
    id: '2',
    display: 'Option two',
  },
  {
    id: '3',
    display: 'Option three',
  },
  {
    id: '4',
    display: 'Option four',
  },
  {
    id: '5',
    display: 'Option five',
    disabled: true,
  },
  {
    id: '6',
    display: 'Option six',
  },
  {
    id: '7',
    display: 'Option seven',
  },
];

const MultiButtons = (props) => {
  const [selected, setSelected] = React.useState(null);
  return (
    <WrapperButton>
      <MultiButton
        {...props}
        key={items.id}
        selected={selected}
        onChange={(id) => {
          console.log(`selected: ${id}`);
          setSelected(id);
        }}
        options={items}
        onOpen={() => console.log('open menu')}
        onClose={() => console.log('close menu')}
      >
        Test
      </MultiButton>
    </WrapperButton>
  );
};
const MultiButtonTest = () => {
  return propsData.map((prop) => {
    return (
      <>
        <WrapperButton>
          <MultiButtons {...prop} />
          <MultiButtons {...prop} disabled />
        </WrapperButton>
      </>
    );
  });
};

export default MultiButtonTest;
