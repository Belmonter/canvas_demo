import React from 'react';

import { IconProps } from '../IconWrapper/IconWrapper.types';
import IconWrapper from '../IconWrapper/IconWrapper';
import Icon from '../../assets/break_up.svg?react';

const BreakUpIcon = (props: IconProps) => {
  return (
    <IconWrapper {...props} name={'BreakUpIcon'}>
      <Icon />
    </IconWrapper>
  );
};

export default BreakUpIcon;
