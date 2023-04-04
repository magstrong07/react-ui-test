import React from 'react';
import { MenuButton, MenuItem, T } from '@admiral-ds/react-ui';
import styled from 'styled-components';

const WrapperButton = styled.div`
  display: block;
  columns: auto 4;
  > * {
    margin: 10px;
  }
`;
const Separator = styled.div`
  height: 40px;
`;
// останавливаем анимацию для скриншота
// const StyledMenuButton = styled(MenuButton)`
//   & svg {
//     animation-play-state: paused;
//   }
// `;
export const items = [
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

const dimension = ['s', 'm', 'l', 'xl'];
const appearance = ['primary', 'secondary', 'ghost'];

let propsData = [];

dimension.forEach((k) => {
  appearance.forEach((j) => {
    propsData.push({
      dimension: k,
      appearance: j,
    });
  });
});

const MenuButtons = (args) => {
  const [selected, setSelected] = React.useState(undefined);
  const model = React.useMemo(() => {
    return items.map((item) => ({
      id: item.id,
      render: (items) => (
        <MenuItem dimension={args.dimension === 'xl' ? 'l' : args.dimension} {...items} key={item.id}>
          {item.display}
        </MenuItem>
      ),
      disabled: item.disabled,
    }));
  }, [args.items]);

  return (
    <WrapperButton>
      <MenuButton
        {...args}
        selected={selected}
        onChange={(id) => {
          console.log(`selected: ${id}`);
          setSelected(id);
        }}
        items={model}
        onOpen={() => console.log('open menu')}
        onClose={() => console.log('close menu')}
      >
        Test
      </MenuButton>
    </WrapperButton>
  );
};
const MenuButtonTest = (args) => {
  return propsData.map((prop, key) => {
    return (
      <>
        <WrapperButton>
          <MenuButtons {...prop} {...args} />
          <T font="Additional/L">
            {propsData[key].dimension},{propsData[key].appearance}
          </T>
          <Separator />
          <MenuButtons {...prop} {...args} disabled />
          <T font="Additional/L" as="div">
            {propsData[key].dimension}, disabled,{''}
            {propsData[key].appearance}
          </T>
          <Separator />
          <MenuButtons {...prop} {...args} loading />
          <T font="Additional/L" as="div">
            {propsData[key].dimension}, loading, {''} {propsData[key].appearance}
          </T>
          <Separator />
          <MenuButtons {...prop} {...args} skeleton />
          <T font="Additional/L" as="div">
            {propsData[key].dimension}, skeleton,{''}
            {propsData[key].appearance}
          </T>
          <Separator />
        </WrapperButton>
      </>
    );
  });
};

export default MenuButtonTest;
