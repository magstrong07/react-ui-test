import React from 'react';
import { T, MainPrimaryColorName } from '@admiral-ds/react-ui';
import styled, { css } from 'styled-components';

const WrapperT = styled.div`
  display: block;
  > * {
    margin: 20px;
  }
`;
const BlueText = styled(T)`
  color: ${(p) => p.theme.color[MainPrimaryColorName]};
`;
const CustomParagraph = styled(T)`
  color: ${(p) => p.theme.color['Neutral/Neutral 70']};
`;

const OrangeColor = css`
  color: ${(p) => p.theme.color['Warning/Warning 50 Main']};
`;

const typographys = [
  'Main/XXL',
  'Main/XL',
  'Main/L',
  'Main/M',
  'Main/S',
  'Main/XS-bold',
  'Main/XS',
  'Additional/L-bold',
  'Additional/L',
  'Additional/M',
  'Additional/S',
  'Additional/S-bold',
  'Additional/XS',
  'Button/M',
  'Button/S',
  'Caption/XS',
  'Header/HL1',
  'Header/HL2',
  'Header/HL3',
  'Header/H1',
  'Header/H2',
  'Header/H3',
  'Header/H4',
  'Header/H5',
  'Header/H6',
  'Subtitle/Subtitle 1',
  'Subtitle/Subtitle 2',
  'Subtitle/Subtitle 3',
  'Body/Body 1 Long',
  'Body/Body 1 Short',
  'Body/Body 2 Long',
  'Body/Body 2 Short',
  'Button/Button 1',
  'Button/Button 2',
  'Caption/Caption 1',
];

const TTest = (props, index) => {
  console.log(props, index);
  return (
    <div>
      <WrapperT>
        {typographys.map((typographys) => {
          return (
            <>
              <T key={typographys} font={typographys}>
                {typographys}
              </T>
              <BlueText as={'a'} href={'#'} font={typographys}>
                {typographys} link Primary
              </BlueText>
              <CustomParagraph font={typographys} as="p">
                {typographys} p Tertiary
              </CustomParagraph>
              <T font={typographys} as="h3" cssMixin={OrangeColor}>
                {typographys} h3 Orange
              </T>
            </>
          );
        })}
      </WrapperT>
    </div>
  );
};

export default TTest;
