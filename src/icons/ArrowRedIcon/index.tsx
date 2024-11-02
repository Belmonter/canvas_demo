import React from 'react';

import { IconProps } from '../IconWrapper/IconWrapper.types';
import IconWrapper from '../IconWrapper/IconWrapper';
import Icon from '../../assets/arrow_red.svg?react';

const ArrowRedIcon = (props: IconProps) => {
  return (
    <IconWrapper {...props} name={'ArrowRedIcon'}>
      <Icon />
    </IconWrapper>
  );
};

export default ArrowRedIcon;
