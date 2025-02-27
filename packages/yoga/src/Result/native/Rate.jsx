import React from 'react';
import styled from 'styled-components';
import { string } from 'prop-types';
import { StarFilled } from '@gympass/yoga-icons';
import Icon from '../../Icon';
import Text from '../../Text';

const Content = styled.View`
  display: flex;
  flex-direction: row;
  margin-left: 10px;
  align-items: center;
`;

const RateValue = styled(Text.Medium)`
  ${({
    theme: {
      yoga: {
        spacing: { xxxsmall },
        lineHeights: { xsmall },
      },
    },
  }) => {
    return `
      margin-left: ${xxxsmall}px;
      line-height: ${xsmall}px;
    `;
  }}
`;

const Rate = ({ rate }) => (
  <Content>
    <Icon as={StarFilled} fill="deep" width="xsmall" height="xsmall" />
    <RateValue variant="deep" size="xsmall">
      {rate}
    </RateValue>
  </Content>
);

Rate.propTypes = {
  rate: string.isRequired,
};

export default Rate;
