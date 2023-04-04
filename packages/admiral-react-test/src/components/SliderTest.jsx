import React, { useState, useEffect } from 'react';
import { Slider, T } from '@admiral-ds/react-ui';
import styled from 'styled-components';

const Separator = styled.div`
  height: 60px;
`;
const Wrapper = styled.div`
  display: block;
  > * {
    margin: 20px;
  }
  width: 600px;
`;

const SliderTest = (args) => {
  const [rangeValue, setRangeValue] = useState(args.value);
  const [rangeValue2, setRangeValue2] = useState(args.value);
  const [rangeValue3, setRangeValue3] = useState(args.value);
  const [rangeValue4, setRangeValue4] = useState(args.value);

  useEffect(() => {
    setRangeValue(args.value);
  }, [args.value]);

  return (
    <>
      <Wrapper>
        <T> size xl </T>
        <Slider
          {...args}
          dimension="xl"
          value={rangeValue}
          onChange={(e, value) => {
            console.log({ event: e.type, value });
            setRangeValue(value);
          }}
        />
        <Separator />
        <T> size m </T>
        <Slider
          {...args}
          dimension="m"
          value={rangeValue2}
          onChange={(e, value) => {
            console.log({ event: e.type, value });
            setRangeValue2(value);
          }}
        />
        <Separator />
        <T> size xl with tickMarks </T>
        <Slider
          dimension="xl"
          tickMarks={[25, 50, 75]}
          value={rangeValue3}
          maxValue={100}
          onChange={(e, value) => {
            console.log({ event: e.type, value });
            setRangeValue3(value);
          }}
        />
        <Separator />
        <T> size m with tickMarks </T>
        <Slider
          dimension="xl"
          tickMarks={[25, 50, 75]}
          value={rangeValue4}
          maxValue={100}
          onChange={(e, value) => {
            console.log({ event: e.type, value });
            setRangeValue4(value);
          }}
        />
      </Wrapper>
    </>
  );
};

export default SliderTest;
