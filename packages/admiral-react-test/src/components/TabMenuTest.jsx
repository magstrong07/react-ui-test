import React from 'react';
import { TabMenu } from '@admiral-ds/react-ui';
import styled from 'styled-components';
import { ReactComponent as MinusCircleOutline } from '@admiral-ds/icons/build/service/MinusCircleOutline.svg';

const Wrapper = styled.div`
  display: block;
  > * {
    margin: 70px;
  }
  width: 500px;
`;

const items = [
  {
    id: '1',
    content: 'Option 1',
    icon: <MinusCircleOutline />,
  },
  {
    id: '2',
    content: 'Option 22',
  },
  {
    id: '3',
    content: 'Option 333',
    badge: 5,
  },
  {
    id: '4',
    content: 'Option 4444',
  },
  {
    id: '5',
    content: 'Option 55555',
    badge: 4,
    icon: <MinusCircleOutline />,
  },
  {
    id: '6',
    content: 'Option 666666',
  },
  {
    id: '7',
    content: 'option disabled',
    disabled: true,
  },
  {
    id: '8',
    content: 'Some very long long long long option',
  },
];

const TabMenuTest = (props) => {
  const [selected1, setSelected1] = React.useState('0');
  const [selected2, setSelected2] = React.useState('0');
  const [selected3, setSelected3] = React.useState('0');
  const [selected4, setSelected4] = React.useState('0');
  return (
    <>
      <Wrapper>
        <TabMenu
          {...props}
          activeTab={selected1}
          onChange={(id) => {
            setSelected1(id);
          }}
          tabs={items}
        />
        <TabMenu
          {...props}
          activeTab={selected2}
          onChange={(id) => {
            setSelected2(id);
          }}
          tabs={items}
          underline
        />
        <TabMenu
          {...props}
          dimension="m"
          activeTab={selected3}
          onChange={(id) => {
            setSelected3(id);
          }}
          tabs={items}
        />
        <TabMenu
          {...props}
          dimension="m"
          activeTab={selected4}
          onChange={(id) => {
            setSelected4(id);
          }}
          tabs={items}
          underline
        />
      </Wrapper>
    </>
  );
};
export default TabMenuTest;
