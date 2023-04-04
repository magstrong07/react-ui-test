import React from 'react';
import { PaginationTwo } from '@admiral-ds/react-ui';
import styled from 'styled-components';

const Text = styled.div`
  font-family: 'VTB Group UI';
  font-size: 16px;
  line-height: 24px;
  margin-bottom: 20px;
  color: rgba(51, 51, 51, 0.75);
`;
const Separator = styled.div`
  height: 40px;
`;

const PaginationTwoTest = (totalItems, currentItem, ...args) => {
  const [page1, setPage1] = React.useState(1);
  const [page2, setPage2] = React.useState(1);
  const [page3, setPage3] = React.useState(1);
  const [page4, setPage4] = React.useState(1);
  const [page5, setPage5] = React.useState(1);
  const [page6, setPage6] = React.useState(1);
  const style = { marginBottom: '60px' };
  const styleMobile = { marginBottom: '60px', width: '500px' };
  return (
    <>
      <Text>Если страниц 7 или меньше, то выводится полный перечень страниц без сокращений:</Text>
      <PaginationTwo {...args} count={7} page={page1} onChange={(_, page) => setPage1(page)} style={style} />
      <Text>
        Если страниц больше, чем 7, то через многоточие указывается ссылка на последнюю страницу в последовательности:
      </Text>
      <PaginationTwo {...args} count={16} page={page2} onChange={(_, page) => setPage2(page)} style={style} />
      <Text>Если страниц больше 21, то можно вводить номер страницы вручную через поле ввода:</Text>
      <PaginationTwo {...args} count={22} page={page3} onChange={(_, page) => setPage3(page)} style={style} />
      <Text>
        Возможны случаи, когда некоторые страницы недоступны. Также блокируются боковые стрелки по достижении
        начала/конца списка
      </Text>
      <PaginationTwo {...args} count={7} page={page4} disabledPages={[3]} onChange={(_, page) => setPage4(page)} />
      <Separator />
      <Text>
        В мобильной версии компонента нет стрелок навигации. Компонент можно растягивать во всю ширину экрана устройства
        (с учетом отступов по бокам экрана).
      </Text>
      <PaginationTwo
        {...args}
        count={7}
        page={page5}
        onChange={(_, page) => setPage5(page)}
        mobile
        style={styleMobile}
      />
      <Text>Можно использовать без кнопки “Дальше”, особенно, если не много страниц.</Text>
      <PaginationTwo
        {...args}
        count={7}
        page={page6}
        onChange={(_, page) => setPage6(page)}
        style={styleMobile}
        mobile
        showNextBtnMobile={false}
      />
    </>
  );
};

export default PaginationTwoTest;
