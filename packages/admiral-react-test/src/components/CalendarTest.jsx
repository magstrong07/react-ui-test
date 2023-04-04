import React, { useState } from 'react';
import { Calendar } from '@admiral-ds/react-ui';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  > * {
    margin: 8px;
  }
  justify-content: center;
  align-items: center;
`;
const tomorrow = new Date();
tomorrow.setDate(new Date().getDate() + 1);

const CalendarTest = () => {
  const [selected, setSelected] = useState(Date | null);
  const [selectedMaxDate, setSelectedMaxDate] = useState(Date | null);
  const [selectedEn, setSelectedEn] = useState(Date | null);
  const [selectedDe, setSelectedDe] = useState(Date | null);
  const [ranges, setRanges] = useState(Date | null);
  const [endDate, setEndDate] = useState(Date | null);
  return (
    <div>
      <Wrapper>
        <Calendar
          data-test-id="calendar1"
          selected={selected}
          onChange={(value) => {
            setSelected(value);
          }}
        />
        <Calendar
          maxDate={tomorrow}
          selected={selectedMaxDate}
          onChange={(value) => {
            setSelectedMaxDate(value);
          }}
        />
        <Calendar
          range
          maxDate={tomorrow}
          startDate={ranges}
          endDate={endDate}
          onChange={(value) => {
            setRanges(value[0]);
            setEndDate(value[1]);
          }}
        />
        <Calendar
          localeName="enUS"
          selected={selectedEn}
          onChange={(value) => {
            setSelectedEn(value);
          }}
        />
        <Calendar
          localeName="de"
          selected={selectedDe}
          onChange={(value) => {
            setSelectedDe(value);
          }}
        />
      </Wrapper>
    </div>
  );
};

export default CalendarTest;
