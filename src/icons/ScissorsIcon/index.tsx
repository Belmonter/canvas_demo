import React from 'react';

import { IconProps } from '../IconWrapper/IconWrapper.types';
import IconWrapper from '../IconWrapper/IconWrapper';
import Icon from '../../assets/scissors.svg?react';

const ScissorsIcon = (props: IconProps) => {
  return (
    <IconWrapper {...props} name={'ScissorsIcon'}>
      <Icon />
    </IconWrapper>
  );
};

export default ScissorsIcon;
