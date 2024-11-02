import React from 'react';

import { IconProps } from '../IconWrapper/IconWrapper.types';
import IconWrapper from '../IconWrapper/IconWrapper';
import Icon from '../../assets/hand.svg?react';

const HandIcon = (props: IconProps) => {
  return (
    <IconWrapper {...props} name={'HandIcon'}>
      <Icon />
    </IconWrapper>
  );
};

export default HandIcon;
