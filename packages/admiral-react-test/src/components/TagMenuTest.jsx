import React from 'react';
import { TagMenu } from '@admiral-ds/react-ui';
import styled from 'styled-components';
import { ReactComponent as CheckOutline } from '@admiral-ds/icons/build/service/CheckOutline.svg';

const Wrapper = styled.div`
  display: block;
  > * {
    margin: 40px;
  }
`;
const items = [
  {
    id: '1',
    tagText: 'Option one',
    statusViaBackground: true,
    icon: <CheckOutline />,
    kind: 'red',
  },
  {
    id: '2',
    tagText: 'Option two',
    kind: 'blue',
  },
  {
    id: '3',
    tagText: 'Option three',
    statusViaBackground: true,
    kind: 'green',
  },
  {
    id: '4',
    tagText: 'Option four',
    statusViaBackground: true,
    icon: <CheckOutline />,
  },
  {
    id: '5',
    tagText: 'Option five',
  },
  {
    id: '6',
    tagText: 'Option six',
  },
  {
    id: '7',
    tagText: 'Option seven',
  },
];

const TagMenuTest = (props) => {
  const [selected, setSelected] = React.useState(items[0]);
  const [selected1, setSelected1] = React.useState(items[0]);

  return (
    <>
      <Wrapper>
        <TagMenu
          options={items}
          selected={selected}
          onSelectOption={(id) => {
            console.log(`selected: ${id}`);
            setSelected(items.find((item) => item.id === id));
          }}
          {...props}
          data-dropdown-container-id="tag-menu-with-dropdown"
          className="tag-menu-class"
        />
        <TagMenu
          dimension="s"
          options={items}
          selected={selected1}
          onSelectOption={(id) => {
            console.log(`selected: ${id}`);
            setSelected1(items.find((item) => item.id === id));
          }}
          {...props}
          data-dropdown-container-id="tag-menu-with-dropdown"
          className="tag-menu-class"
        />
      </Wrapper>
    </>
  );
};

export default TagMenuTest;
