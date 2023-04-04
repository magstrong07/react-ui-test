import React, { useState } from 'react';
import { Chips, T } from '@admiral-ds/react-ui';
import styled from 'styled-components';
// import uuid from 'react-uuid';
import { ReactComponent as VacationIcon } from '@admiral-ds/icons/build/category/VacationSolid.svg';
import { ReactComponent as BurnIcon } from '@admiral-ds/icons/build/category/BurnSolid.svg';
import { ReactComponent as DiamondSolid } from '@admiral-ds/icons/build/category/DiamondSolid.svg';
import { ReactComponent as TrophyIcon } from '@admiral-ds/icons/build/category/TrophySolid.svg';

const Container = styled.div`
  padding: 14px;
  position: relative;
  display: flex;
  flex-wrap: wrap;

  > * {
    margin: 8px 20px 0 0;
  }
`;
// const StyledChips = styled(Chips)`
//   && > * svg {
//     background-color: #000;
//     data-test-id: 'test';
//   }
// `;
// const StyledChips = styled(Chips)`
//   && > * svg {
//     background-color: #000;
//     [data-test-id= 'test'];
//   }
// `;
const dimensions = ['s', 'm'];

const appearances = ['filled', 'outlined'];
const selecteds = [true, false];
const disableds = [false, true];
let propsData = [];

function func1(dimension) {
  appearances.forEach((a) => func2(dimension, a));
}
function func2(dimension, appearance) {
  disableds.forEach((d) => func3(dimension, appearance, d));
}

function func3(dimension, appearance, disabled) {
  selecteds.forEach((selected) => {
    propsData.push({
      dimension,
      appearance,
      selected,
      disabled,
    });
  });
}
dimensions.forEach((d) => func1(d));
const closeData = [{ id: 1, label: 'Закрыть' }];
const selectData = [{ id: 2, label: 'Выбрать' }];
const selectWithBadgeData = [{ id: 3, label: 'with badge' }];

const Chip2 = (props) => {
  const [Data, setData] = useState(closeData);
  const [selected, setSelected] = useState('');
  const [selected1, setSelected1] = useState('');

  return (
    <div>
      <Container>
        <Chips {...props} role="button">
          Москва
        </Chips>
        <Chips {...props} iconBefore={<VacationIcon />}>
          Самара
        </Chips>
        <Chips {...props} aria-label="test" iconAfter={<BurnIcon />}>
          Санкт-Петербург
        </Chips>
        <Chips {...props} iconBefore={<DiamondSolid />} iconAfter={<TrophyIcon />}>
          Калининград
        </Chips>
        <Chips {...props} renderContentTooltip={() => 'Ограниченное пространство с большим текстом'}>
          Ограниченное пространство с большим текстом
        </Chips>
        {Data.map((Data) => (
          <Chips
            key={Data.id}
            {...props}
            onClose={() => setData((prev) => prev.filter((d) => d.id !== Data.id))}
            data-test-id="chipClose"
          >
            Закрыть
          </Chips>
        ))}
        {selectData.map((closeData) => (
          <Chips
            key={selectData.id}
            {...props}
            selected={selected === selectData.id}
            onClick={() => setSelected(closeData.disabled ? null : setSelected(selectData.id))}
          >
            {closeData.label}
          </Chips>
        ))}
        {selectWithBadgeData.map((selectWithBadgeData) => (
          <Chips
            key={selectWithBadgeData.id}
            {...props}
            selected={selected1 === selectWithBadgeData.id}
            badge={4}
            onClick={() =>
              selectWithBadgeData(selectWithBadgeData.disabled ? null : setSelected1(selectWithBadgeData.id))
            }
          >
            {selectWithBadgeData.label}
          </Chips>
        ))}
      </Container>
    </div>
  );
};
const ChipsTest = () => {
  return propsData.map((prop, key) => {
    return (
      <>
        <T font="Additional/L" as="div">
          {propsData[key].dimension}, {propsData[key].appearance},{' '}
          {propsData[key].disabled ? 'disabled: true' : 'disabled: false'},{' '}
          {propsData[key].selected ? 'selected: true' : 'selected: false'}
        </T>
        <Container>
          <Chip2 {...prop} />
        </Container>
      </>
    );
  });
};

export default ChipsTest;
