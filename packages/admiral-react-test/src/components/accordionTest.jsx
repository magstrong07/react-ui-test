import React, { useState } from 'react';
import { Accordion, AccordionItem, FieldSet, RadioButton, Button, SelectField, Option } from '@admiral-ds/react-ui';
import styled from 'styled-components';
const Separator = styled.div`
  height: 70px;
`;
const Desc = styled.div`
  font-family: 'VTB Group UI';
  font-size: 16px;
  line-height: 24px;
`;

const AccordionTest = () => {
  const OPTIONS_SIMPLE = [
    'teeext 1',
    'text 2 text text 2 text text 2 text text 2 text text 2 text text 2 text text 2 text ',
    'text 3',
    'text 4',
    'text 5',
    'texttt 6',
  ];

  const Text = `
  Будущее игр никогда не было таким вдохновляющим. Творчество в играх процветает. Новые сервисы позволяют
          находить больше игр, а также приближают игроков к любимым играм, стримерам и создателям. Облако создает
          огромную возможность для потоковой передачи игр консольного уровня, что позволит людям играть с теми игроками,
          с кем хочется и где захочется. И для многих из нас нет ничего более вдохновляющего, чем рассвет нового
          поколения консолей.
`;
  const onChange = (e) => {
    setSelectValue(e.target.value);
  };
  const [content, setContent] = useState(Text);
  const [selectValue, setSelectValue] = React.useState('');

  return (
    <div>
      <Accordion>
        <AccordionItem
          id="accordion1-item1"
          onClick={(title, isOpen, event) => console.log({ title, isOpen, event })}
          title="Первый пункт"
        >
          Контент первого пункта
        </AccordionItem>
        <AccordionItem id="accordion1-item2" title="Второй пункт">
          Аккордеон — это вертикальный список заголовков, которые, при нажатии, показывают контент находящийся под ними.
          <FieldSet
            dimension="m"
            legend="Управляемая группа радиокнопок:"
            style={{
              marginTop: 8,
            }}
          >
            <RadioButton name="test1" readOnly value="1">
              First option
            </RadioButton>
            <RadioButton name="test1" readOnly value="2">
              Second option
            </RadioButton>
            <RadioButton name="test1" readOnly value="3">
              Third option
            </RadioButton>
          </FieldSet>
          <SelectField
            mode="searchSelect"
            label="label"
            className="Search"
            value={selectValue}
            onChange={onChange}
            placeholder="Placeholder"
          >
            {OPTIONS_SIMPLE.map((option, ind) => (
              <Option key={option} value={option} disabled={ind === 4}>
                {option}
              </Option>
            ))}
          </SelectField>
        </AccordionItem>
        <AccordionItem id="accordion1-item3" isDefaultOpen title="Третий пункт">
          Будущее игр никогда не было таким вдохновляющим. Творчество в играх процветает. Новые сервисы позволяют
          находить больше игр, а также приближают игроков к любимым играм, стримерам и создателям. Облако создает
          огромную возможность для потоковой передачи игр консольного уровня, что позволит людям играть с теми игроками,
          с кем хочется и где захочется. И для многих из нас нет ничего более вдохновляющего, чем рассвет нового
          поколения консолей.
        </AccordionItem>
      </Accordion>

      <Separator />
      <Button
        onClick={() => {
          setContent(content + Text);
        }}
      >
        Добавить контент
      </Button>
      <Separator />
      <Accordion>
        <AccordionItem title="Первый пункт">Контент первого пункта</AccordionItem>
        <AccordionItem title="Второй пункт">
          Аккордеон — это вертикальный список заголовков, которые, при нажатии, показывают контент находящийся под ними.
        </AccordionItem>
        <AccordionItem title="Третий пункт"> {content} </AccordionItem>
      </Accordion>
      <Separator />
      <Desc style={{ textDecoration: 'underline' }}>Размер m</Desc>
      <Separator />
      <Accordion dimension="m">
        <AccordionItem title="Первый пункт">Контент первого пункта</AccordionItem>
        <AccordionItem title="Второй пункт">
          Аккордеон — это вертикальный список заголовков, которые, при нажатии, показывают контент находящийся под ними.
        </AccordionItem>
        <AccordionItem title="Третий пункт" contentMaxHeight="300px">
          Будущее игр никогда не было таким вдохновляющим. Творчество в играх процветает. Новые сервисы позволяют
          находить больше игр, а также приближают игроков к любимым играм, стримерам и создателям. Облако создает
          огромную возможность для потоковой передачи игр консольного уровня, что позволит людям играть с теми игроками,
          с кем хочется и где захочется. И для многих из нас нет ничего более вдохновляющего, чем рассвет нового
          поколения консолей.
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default AccordionTest;
