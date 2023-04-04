import React from 'react';
import { Hint, Button, T } from '@admiral-ds/react-ui';
import styled, { css } from 'styled-components';
import { ReactComponent as HelpOutline } from '@admiral-ds/icons/build/service/HelpOutline.svg';

const Container = styled.div`
  padding: 14px;
  position: relative;
  display: flex;
  flex-wrap: wrap;

  > * {
    margin: 8px 50px 50px 0;
  }
`;
const StyledButton = styled(Button)`
  padding: 4px;
`;
const anchorCss = css`
  padding: 10px;
  border: 2px dotted red;
`;

const text = `At breakpoint boundaries, mini units divide the screen into a fixed master grid, and multiples
 of mini units map to fluid grid column widths and row heights.`;

const HintTest = (anchorId) => {
  const [visible, setVisible] = React.useState(false);
  const [visible1, setVisible1] = React.useState(false);
  const [visible2, setVisible2] = React.useState(false);

  const handleVisibilityChange = (visible) => setVisible(visible);
  const handleVisibilityChange1 = (visible1) => setVisible1(visible1);
  const handleVisibilityChange2 = (visible2) => setVisible2(visible2);

  return (
    <div>
      <Container>
        <T font="Additional/L" as="div">
          click:
        </T>
        <Hint
          anchorId={anchorId}
          visible={visible}
          onVisibilityChange={handleVisibilityChange}
          renderContent={() => text}
          visibilityTrigger="click"
        >
          <StyledButton dimension="l" aria-label="Additional information" aria-describedby={anchorId}>
            <HelpOutline aria-hidden />
          </StyledButton>
        </Hint>
        <T font="Additional/L" as="div">
          hover:
        </T>
        <Hint
          anchorId={anchorId}
          visible={visible1}
          onVisibilityChange={handleVisibilityChange1}
          renderContent={() => text}
        >
          <StyledButton dimension="l" aria-label="Additional information" aria-describedby={anchorId}>
            <HelpOutline aria-hidden />
          </StyledButton>
        </Hint>
        <T font="Additional/L" as="div">
          styled:
        </T>
        <Hint
          anchorId={anchorId}
          visible={visible2}
          onVisibilityChange={handleVisibilityChange2}
          renderContent={() => text}
          anchorCssMixin={anchorCss}
        >
          <StyledButton dimension="l" aria-label="Additional information" aria-describedby={anchorId}>
            <HelpOutline aria-hidden />
          </StyledButton>
        </Hint>
      </Container>
    </div>
  );
};

export default HintTest;
