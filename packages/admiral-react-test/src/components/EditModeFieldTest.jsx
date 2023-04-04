import React from 'react';
import { EditModeField, T } from '@admiral-ds/react-ui';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: block;
  > * {
    margin: 10px;
  }
`;

const Separator = styled.div`
  height: 50px;
`;

const dimensions = ['s', 'm', 'xl'];

const bolds = [false, true];

const disableds = [false, true];

let propsData = [];

function func1(dimension) {
  bolds.forEach((a) => func2(dimension, a));
}
function func2(dimension, bold) {
  disableds.forEach((disabled) => {
    propsData.push({
      dimension,
      bold,
      disabled,
    });
  });
}
dimensions.forEach((d) => func1(d));

const EditModeFields = (props) => {
  const [localValue, setValue] = React.useState(props.value ?? 'admin');

  const handleChange = (e) => {
    const inputValue = e.target.value;
    setValue(inputValue);
    props.onChange?.(e);
  };
  return (
    <div>
      <Wrapper>
        <EditModeField {...props} value={localValue} onChange={handleChange} label="Label"></EditModeField>
      </Wrapper>
    </div>
  );
};
const EditModeFieldTest = () => {
  return propsData.map((prop, key) => {
    return (
      <>
        <Wrapper>
          <Separator />
          <T font="Additional/L" as="div">
            {propsData[key].dimension}, {propsData[key].disabled ? 'disabled true' : 'disabled false'},
            {propsData[key].bold ? 'bold true' : 'bold false'}
          </T>
          <EditModeFields {...prop} />
        </Wrapper>
      </>
    );
  });
};

export default EditModeFieldTest;
