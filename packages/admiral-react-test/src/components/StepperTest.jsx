import React from 'react';
import { Step, StepContent, Stepper, T } from '@admiral-ds/react-ui';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: block;
  > * {
    margin: 20px;
  }
`;
const Separator = styled.div`
  height: 40px;
`;

const StepperTest = (...args) => {
  const steps = [
    {
      key: 0,
      content: 'Завершенный шаг, текст занимает максимум три строки, далее идет сокращение',
      completed: true,
    },
    { key: 1, content: 'Завершенный шаг, текст занимает максимум три строки, далее идет сокращение', completed: true },
    { key: 2, content: 'Активный шаг, текст занимает максимум три строки' },
    { key: 3, content: 'Неактивный шаг, текст занимает максимум три строки' },
    { key: 4, content: 'Неактивный шаг, текст занимает максимум три строки' },
  ];
  const stepsLinks = [
    {
      key: 0,
      content: 'Завершенный шаг, текст занимает максимум три строки, далее идет сокращение',
      completed: true,
      link: '#',
    },
    { key: 1, content: 'Шаг с ошибкой, текст занимает максимум три строки', error: true, link: '#' },
    { key: 2, content: 'Активный шаг, текст занимает максимум три строки', link: '#' },
    { key: 3, content: 'Неактивный шаг, текст занимает максимум три строки', link: '#' },
  ];

  return (
    <>
      <Wrapper>
        <Stepper lineClamp={2} activeStep={2} stepWidth={200} {...args}>
          {steps.map(({ content, ...step }) => {
            return (
              <Step key={step.key} {...step}>
                <StepContent tooltipProps={{ style: { maxWidth: '300px', textAlign: 'center' } }}>
                  {content}
                </StepContent>
              </Step>
            );
          })}
        </Stepper>
        <Stepper lineClamp={2} activeStep={2}>
          {steps.map(({ content, ...step }) => {
            return (
              <Step key={step.key} {...step}>
                <i>{content}</i>
              </Step>
            );
          })}
        </Stepper>
        <Separator />
        <Stepper activeStep={2} orientation="vertical">
          {steps.map(({ content, ...step }) => {
            return (
              <Step key={step.key} {...step}>
                <StepContent tooltipProps={{ style: { maxWidth: '300px', textAlign: 'center' } }}>
                  {content}
                </StepContent>
              </Step>
            );
          })}
        </Stepper>
        <Separator />
        <T> Кликабельные шаги </T>
        <Stepper activeStep={2}>
          {steps.map(({ content, ...step }) => {
            return (
              <Step key={step.key} {...step} onClick={(step) => console.log(step.index)}>
                <StepContent tooltipProps={{ style: { maxWidth: '300px', textAlign: 'center' } }}>
                  {content}
                </StepContent>
              </Step>
            );
          })}
        </Stepper>
        <Separator />
        <Stepper activeStep={2} orientation="vertical">
          {steps.map(({ content, ...step }) => {
            return (
              <Step key={step.key} {...step} onClick={(step) => console.log(step.index)}>
                <StepContent tooltipProps={{ style: { maxWidth: '300px', textAlign: 'center' } }}>
                  {content}
                </StepContent>
              </Step>
            );
          })}
        </Stepper>
        <Separator />
        <T> Шаги в виде ссылок </T>
        <Stepper activeStep={2}>
          {stepsLinks.map(({ content, ...step }) => {
            return (
              <Step key={step.key} {...step}>
                <StepContent tooltipProps={{ style: { maxWidth: '300px', textAlign: 'center' } }}>
                  {content}
                </StepContent>
              </Step>
            );
          })}
        </Stepper>
        <Separator />
        <Stepper activeStep={2} orientation="vertical">
          {stepsLinks.map(({ content, ...step }) => {
            return (
              <Step key={step.key} {...step}>
                <StepContent tooltipProps={{ style: { maxWidth: '300px', textAlign: 'center' } }}>
                  {content}
                </StepContent>
              </Step>
            );
          })}
        </Stepper>
      </Wrapper>
    </>
  );
};

export default StepperTest;
