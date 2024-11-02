import React from 'react';

import { IconProps } from '../IconWrapper/IconWrapper.types';
import IconWrapper from '../IconWrapper/IconWrapper';
import Icon from '../../assets/close.svg?react';

const CloseIcon = (props: IconProps) => {
  return (
    <IconWrapper {...props} name={'CloseIcon'}>
      <Icon />
    </IconWrapper>
  );
};

export default CloseIcon;
