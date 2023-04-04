import React, { useState } from 'react';
import {
  Accordion,
  AccordionItem,
  FieldSet,
  RadioButton,
  DropDownItem,
  Button,
  SelectField,
} from '@admiral-ds/react-ui';
import styled from 'styled-components';
import { useForm, Controller } from 'react-hook-form';
const Separator = styled.div`
  height: 70px;
`;
const Desc = styled.div`
  font-family: 'VTB Group UI';
  font-size: 16px;
  line-height: 24px;
`;

const onSubmit = (data) => console.log(data);

const AccordionTestFormRadio = () => {
  const { control } = useForm();
  const options = [
    {
      id: 1,
      label:
        'Option one very long very long very long very long very long very long very long very long very long very long very long ',
      value: '1',
    },
    { id: 2, label: 'Option two', value: '2' },
    { id: 3, label: 'Option three', value: '3' },
    { id: 4, label: 'Option four', value: '4' },
    { id: 5, label: 'Option five', value: '5' },
    { id: 6, label: 'Option six', value: '6' },
    { id: 7, label: 'Option seven', value: '7' },
    { id: 8, label: 'Option seven', value: '7' },
    { id: 9, label: 'Option seven', value: '7' },
    { id: 10, label: 'Option seven', value: '7' },
    { id: 11, label: 'Option seven', value: '7' },
    { id: 12, label: 'Option seven', value: '7' },
    { id: 13, label: 'Option seven', value: '7' },
    { id: 14, label: 'Option seven', value: '7' },
    { id: 15, label: 'Option seven', value: '7' },
    { id: 16, label: 'Option seven', value: '7' },
    { id: 17, label: 'Option seven', value: '7' },
    { id: 18, label: 'Option seven', value: '7' },
  ];
  const Text = `
  Будущее игр никогда не было таким вдохновляющим. Творчество в играх процветает. Новые сервисы позволяют
          находить больше игр, а также приближают игроков к любимым играм, стримерам и создателям. Облако создает
          огромную возможность для потоковой передачи игр консольного уровня, что позволит людям играть с теми игроками,
          с кем хочется и где захочется. И для многих из нас нет ничего более вдохновляющего, чем рассвет нового
          поколения консолей.
`;
  const [content, setContent] = useState(Text);
  const [selectValue, setValue] = useState('');

  return (
    <>
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
            <form>
              <Controller
                name="test"
                control={control}
                render={({ field: { name } }) => (
                  <RadioButton name={name} readOnly value="1">
                    First option
                  </RadioButton>
                )}
              />
            </form>
          </FieldSet>
          <SelectField label="Опции" value={selectValue} onChange={setValue} required>
            {options.map((item, index) => {
              return (
                <DropDownItem role="option" value={item.label} key={index}>
                  {item.label}
                </DropDownItem>
              );
            })}
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
    </>
  );
};

export default AccordionTestFormRadio;
