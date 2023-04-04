import React from 'react';
import { DropMenu, MenuItem, Button, T } from '@admiral-ds/react-ui';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: block;
  width: 400px;
  > * {
    margin: 20px;
  }
  text-align: center;
`;
const dimensions = ['s', 'm', 'l'];

const disableds = [false, true];

let propsData = [];

function func1(dimension) {
  disableds.forEach((disabled) => {
    propsData.push({
      dimension,
      disabled,
    });
  });
}
dimensions.forEach((d) => func1(d));

const items = [
  {
    id: '1',
    label: 'Option one',
    value: 1,
  },
  {
    id: '2',
    label: 'Option two',
    value: 2,
  },
  {
    id: '3',
    label: 'Option three',
    value: 3,
  },
  {
    id: '4',
    label: 'Option four',
    value: 4,
    disabled: true,
  },
  {
    id: '5',
    label: 'Option five',
    value: 5,
  },
  {
    id: '6',
    label: 'Option six',
    value: 6,
  },
  {
    id: '7',
    label: 'Option seven',
    value: 7,
  },
];
const onOpenMenu = () => console.log('menu opened');
const onCloseMenu = () => console.log('menu closed');

const DropMenus = (props) => {
  const [selected, setSelected] = React.useState();
  const model = React.useMemo(() => {
    return items.map((item) => ({
      id: item.id,
      render: (options) => (
        <MenuItem {...props} {...options} key={item.id}>
          {item.label}
        </MenuItem>
      ),
    }));
  });
  return (
    <>
      <Wrapper>
        <DropMenu
          {...props}
          items={model}
          onChange={(id) => {
            console.log(`selected: ${id}`);
            setSelected(id);
          }}
          onOpen={onOpenMenu}
          onClose={onCloseMenu}
          selected={selected}
          renderContentProp={({ buttonRef, handleKeyDown, handleClick, statusIcon }) => {
            return (
              <Button {...props} ref={buttonRef} onKeyDown={handleKeyDown} onClick={handleClick}>
                Нажми
                {statusIcon}
              </Button>
            );
          }}
        />
      </Wrapper>
    </>
  );
};

const DropMenuTest = () => {
  return propsData.map((prop, key) => {
    return (
      <>
        <Wrapper>
          <T font="Additional/L" as="div">
            {propsData[key].dimension}, {propsData[key].type}
          </T>
          <DropMenus {...prop} />
        </Wrapper>
      </>
    );
  });
};

export default DropMenuTest;
