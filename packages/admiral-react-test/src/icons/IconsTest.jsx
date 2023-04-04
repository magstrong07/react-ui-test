import React from 'react';
import styled from 'styled-components';
import metadata from '@admiral-ds/icons/metadata.json';
import { typography, Tooltip } from '@admiral-ds/react-ui';
import { ReactComponent as IIS } from '@admiral-ds/icons/build/cards/IIS.svg';

import { ReactComponent as CopyOutline } from '@admiral-ds/icons/build/documents/CopyOutline.svg';
import * as CardsIcons from './IconComponents-cards';
// import * as CategoryIcons from './IconComponents-category';
// import * as CommunicationIcons from './IconComponents-communication';
// import * as DocumentsIcons from './IconComponents-documents';
// import * as FinanceIcons from './IconComponents-finance';
// import * as FlagsIcons from './IconComponents-flags';
// import * as LocationIcons from './IconComponents-location';
// import * as PaymentIcons from './IconComponents-payment';
// import * as RedactIcons from './IconComponents-redact';
// import * as SecurityIcons from './IconComponents-security';
// import * as ServiceIcons from './IconComponents-service';
// import * as SystemIcons from './IconComponents-system';

const Title = styled.div`
  ${typography['Main/XS-bold']}
  color: ${({ theme }) => theme.color['Neutral/Neutral 90']};
  margin-bottom: 20px;
`;

// const Text = styled.div`
//   ${typography['Additional/M']}
//   color: ${({ theme }) => theme.color['Neutral/Neutral 90']};
// `;

// const Code = styled.code`
//   color: ${({ theme }) => theme.color['Neutral/Neutral 90']};
// `;

// const Panel = styled.pre`
//   border: 1px dashed gray;
//   border-radius: 4px;
//   padding: 20px;
//   width: 100%;
//   background-color: ${({ theme }) => theme.color['Neutral/Neutral 05']};
// `;

const IconsWrapper = styled.div`
  display: flex;
  flex-flow: row wrap;
  gap: 8px;
  background: ${({ theme }) => theme.color['Neutral/Neutral 05']};
  padding: 32px 0;
  border-radius: 8px;
  & svg {
    flex-shrink: 0;
    *[fill^='#62'],
    *[fill^='#2B'] {
      fill: ${({ theme }) => theme.color['Neutral/Neutral 50']};
    }
  }
  justify-content: center;
`;

const CategoryWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 40px;
`;

const IconCard = styled.div`
  display: flex;
  flex-shrink: 0;
  flex-direction: column;
  align-items: center;
  width: 200px;
  height: 100px;
`;

const IconName = styled.div`
  margin-top: 16px;
  ${typography['Caption/XS']}
  color: ${({ theme }) => theme.color['Neutral/Neutral 50']};
  display: flex;
  gap: 8px;
`;

const CopyButton = (text) => {
  const copyToClipboard = () => {
    const el = document.createElement('textarea');
    el.value = text;
    el.setAttribute('readonly', '');
    el.style.position = 'absolute';
    el.style.left = '-9999px';
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
  };
  return (
    <Tooltip renderContent={() => 'Копировать импорт'}>
      <CopyOutline width={16} height={16} onClick={copyToClipboard} />
    </Tooltip>
  );
};

const Category = (label, children) => {
  return (
    <CategoryWrapper>
      <Title>{label}</Title>
      <IconsWrapper>{children}</IconsWrapper>
    </CategoryWrapper>
  );
};

const getIcons = (category, pack) => {
  return metadata[category].map((iconMetaInfo) => ({
    ...iconMetaInfo,
    Component: pack[iconMetaInfo.name],
  }));
};

const CATEGORIES = [
  { label: 'Cards', value: 'cards', icons: getIcons('cards', CardsIcons) },
  //   { label: 'Category', value: 'category', icons: getIcons('category', CategoryIcons) },
  //   { label: 'Communication', value: 'communication', icons: getIcons('communication', CommunicationIcons) },
  //   { label: 'Documents', value: 'documents', icons: getIcons('documents', DocumentsIcons) },
  //   { label: 'Finance', value: 'finance', icons: getIcons('finance', FinanceIcons) },
  //   { label: 'Flags', value: 'flags', icons: getIcons('flags', FlagsIcons) },
  //   { label: 'Payment', value: 'payment', icons: getIcons('payment', PaymentIcons) },
  //   { label: 'Redact', value: 'redact', icons: getIcons('redact', RedactIcons) },
  //   { label: 'Location', value: 'location', icons: getIcons('location', LocationIcons) },
  //   { label: 'Security', value: 'security', icons: getIcons('security', SecurityIcons) },
  //   { label: 'Service', value: 'service', icons: getIcons('service', ServiceIcons) },
  //   { label: 'System', value: 'system', icons: getIcons('system', SystemIcons) },
];

const IconsTest = () => (
  <>
    <Title style={{ fontWeight: 400 }}>
      Иконки — гафические символы используемые для представления действий, идей или объектов. Позволяют быстро
      передавать смысл отображаемой информации или привлекать к ней дополнительное внимание.
    </Title>
    {CATEGORIES.map(
      (icons) =>
        //   <Category key={label} label={label}>
        {
          icons.map((Component) => <Component key={121} width={24} height={24} />);
        },
      //   </Category>
      //   console.log(3232),
    )}
  </>
);

export default IconsTest;
