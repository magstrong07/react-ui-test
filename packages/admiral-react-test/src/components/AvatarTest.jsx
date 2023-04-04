import React from 'react';
import { Avatar } from '@admiral-ds/react-ui';
import { ReactComponent as PersonSolid } from '@admiral-ds/icons/build/system/PersonSolid.svg';
import styled from 'styled-components';
let imageURL = 'https://github.com/DrUNE.png?size=100';

const Container = styled.div`
  padding: 24px;
  position: relative;
  display: flex;

  > * {
    margin: 8px 40px 0 0;
  }
`;

const AvatarTest = () => (
  <div>
    <Container>
      <Avatar dimension="xs" userName="Dimension xs" />
      <Avatar dimension="s" userName="Dimension s" />
      <Avatar dimension="m" userName="Dimension m" />
      <Avatar dimension="l" userName="Dimension l" />
    </Container>

    <Container style={{ background: '#F1F2F4' }}>
      <Avatar userName="Light Appearance" />
      <Avatar userName="White Appearance" appearance="white" />
      <Avatar userName="Grey Appearance" appearance="grey" />
      <Avatar userName="Dark Appearance" appearance="dark" />
      <Avatar userName="Custom Appearance" appearance={{ background: '#3F7DFE', text: '#001157' }} />
    </Container>

    <Container>
      <Avatar userName="Letter Avatar" />
      <Avatar userName="Icon Avatar" icon={<PersonSolid />} />
      <Avatar userName="Icon Avatar with customized styles" icon={<PersonSolid style={{ fill: 'green' }} />} />
      <Avatar userName="Image Avatar" href={imageURL} />
    </Container>

    <Container>
      <Avatar userName="Status Danger" icon={<PersonSolid />} status="danger" />
      <Avatar userName="Status Warning" icon={<PersonSolid />} status="warn" />
      <Avatar userName="Status Success" icon={<PersonSolid />} status="success" />
      <Avatar userName="Status Inactive" icon={<PersonSolid />} status="inactive" />
      <Avatar userName="Example Name" status="success" />
      <Avatar userName="Example Name" href={imageURL} status="success" />
    </Container>
  </div>
);

export default AvatarTest;
