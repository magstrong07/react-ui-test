import React from 'react';
import { Modal, Button, ModalTitle, ModalButtonPanel, ModalContent, T, hexToRgba } from '@admiral-ds/react-ui';
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
const overlayStyles = `
  background-color: ${({ theme }) => hexToRgba(theme.color.background.secondary, 0.6)};
`;
const dimension = [{ dimension: 's' }, { dimension: 'm' }, { dimension: 'l' }, { dimension: 'xl' }];

const ModalTests = (args, props) => {
  const [opened, setOpened] = React.useState(false);
  const [opened1, setOpened1] = React.useState(false);
  const [opened2, setOpened2] = React.useState(false);
  const [opened3, setOpened3] = React.useState(false);

  return (
    <div>
      <Wrapper>
        <Button onClick={() => setOpened(true)}>Open modal with 1 button </Button>
        {opened && (
          <Modal
            {...args}
            {...props}
            onClose={() => {
              setOpened(false);
            }}
            aria-labelledby="modal-title"
          >
            <ModalTitle id="modal-title">Modal title</ModalTitle>
            <ModalContent>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. At cupiditate ducimus nisi nulla numquam
              obcaecati quam quasi quod ut veritatis?
            </ModalContent>
            <ModalButtonPanel>
              <Button appearance="primary" dimension="m" onClick={() => setOpened(false)}>
                Yes button
              </Button>
            </ModalButtonPanel>
          </Modal>
        )}
        <Button onClick={() => setOpened1(true)}>Open modal without buttons</Button>
        {opened1 && (
          <Modal
            {...args}
            onClose={() => {
              setOpened1(false);
            }}
            aria-labelledby="modal-title"
          >
            <ModalTitle id="modal-title">Modal title</ModalTitle>
            <ModalContent>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. At cupiditate ducimus nisi nulla numquam
              obcaecati quam quasi quod ut veritatis?
            </ModalContent>
          </Modal>
        )}

        <Button onClick={() => setOpened2(true)}>Open modal with scrollable content</Button>
        {opened2 && (
          <Modal
            {...args}
            onClose={() => {
              setOpened2(false);
            }}
            aria-labelledby="modal-title"
            style={{ height: '90vh' }} // IE bug https://github.com/philipwalton/flexbugs#flexbug-3
          >
            <ModalTitle id="modal-title">Modal title</ModalTitle>
            <ModalContent>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. At cupiditate ducimus nisi nulla numquam
              obcaecati quam quasi quod ut veritatis? Lorem ipsum dolor sit amet, consectetur adipisicing elit. At
              cupiditate ducimus nisi nulla numquam obcaecati quam quasi quod ut veritatis? Lorem ipsum dolor sit amet,
              consectetur adipisicing elit. At cupiditate ducimus nisi nulla numquam obcaecati quam quasi quod ut
              veritatis? Lorem ipsum dolor sit amet, consectetur adipisicing elit. At cupiditate ducimus nisi nulla
              numquam obcaecati quam quasi quod ut veritatis? Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              At cupiditate ducimus nisi nulla numquam obcaecati quam quasi quod ut veritatis? Lorem ipsum dolor sit
              amet, consectetur adipisicing elit. At cupiditate ducimus nisi nulla numquam obcaecati quam quasi quod ut
              veritatis? Lorem ipsum dolor sit amet, consectetur adipisicing elit. At cupiditate ducimus nisi nulla
              numquam obcaecati quam quasi quod ut veritatis? Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              At cupiditate ducimus nisi nulla numquam obcaecati quam quasi quod ut veritatis? Lorem ipsum dolor sit
              amet, consectetur adipisicing elit. At cupiditate ducimus nisi nulla numquam obcaecati quam quasi quod ut
              veritatis? Lorem ipsum dolor sit amet, consectetur adipisicing elit. At cupiditate ducimus nisi nulla
              numquam obcaecati quam quasi quod ut veritatis? Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              At cupiditate ducimus nisi nulla numquam obcaecati quam quasi quod ut veritatis? Lorem ipsum dolor sit
              amet, consectetur adipisicing elit. At cupiditate ducimus nisi nulla numquam obcaecati quam quasi quod ut
              veritatis? Lorem ipsum dolor sit amet, consectetur adipisicing elit. At cupiditate ducimus nisi nulla
              numquam obcaecati quam quasi quod ut veritatis? Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              At cupiditate ducimus nisi nulla numquam obcaecati quam quasi quod ut veritatis? Lorem ipsum dolor sit
              amet, consectetur adipisicing elit. At cupiditate ducimus nisi nulla numquam obcaecati quam quasi quod ut
              veritatis? Lorem ipsum dolor sit amet, consectetur adipisicing elit. At cupiditate ducimus nisi nulla
              numquam obcaecati quam quasi quod ut veritatis? Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              At cupiditate ducimus nisi nulla numquam obcaecati quam quasi quod ut veritatis? Lorem ipsum dolor sit
              amet, consectetur adipisicing elit. At cupiditate ducimus nisi nulla numquam obcaecati quam quasi quod ut
              veritatis? Lorem ipsum dolor sit amet, consectetur adipisicing elit. At cupiditate ducimus nisi nulla
              numquam obcaecati quam quasi quod ut veritatis?
            </ModalContent>
            <ModalButtonPanel>
              <Button appearance="primary" dimension="m" onClick={() => setOpened2(false)}>
                Yes button
              </Button>
              <Button appearance="secondary" dimension="m" onClick={() => setOpened2(false)}>
                No button
              </Button>
            </ModalButtonPanel>
          </Modal>
        )}

        <Button onClick={() => setOpened3(true)}>Open modal with custom content</Button>
        {opened3 && (
          <Modal
            {...args}
            {...props}
            onClose={() => {
              setOpened3(false);
            }}
            aria-labelledby="modal-title"
            overlayStyledCss={overlayStyles}
          >
            <h1 id="modal-title">
              <strong>Modal title</strong>
            </h1>
            <i>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. At cupiditate ducimus nisi nulla numquam
              obcaecati quam quasi quod ut veritatis?
            </i>
            <div
              style={{
                marginTop: '40px',
                width: '80%',
                display: 'flex',
                justifyContent: 'space-between',
              }}
            >
              <Button appearance="primary" dimension="m" onClick={() => setOpened3(false)}>
                First button
              </Button>
              <Button appearance="primary" dimension="m" onClick={() => setOpened3(false)}>
                Second button
              </Button>
              <Button appearance="primary" dimension="m" onClick={() => setOpened3(false)}>
                Third button
              </Button>
            </div>
          </Modal>
        )}
      </Wrapper>
    </div>
  );
};

const ModalTest = () => {
  return dimension.map((prop, key) => {
    return (
      <>
        <div style={{ marginLeft: 200 }}>
          <T font="Additional/L" as="div">
            {dimension[key].dimension}
          </T>
        </div>
        <Wrapper>
          <ModalTests {...prop} />
        </Wrapper>
      </>
    );
  });
};

export default ModalTest;
