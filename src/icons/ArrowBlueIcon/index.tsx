import React from 'react';

import { IconProps } from '../IconWrapper/IconWrapper.types';
import IconWrapper from '../IconWrapper/IconWrapper';
import Icon from '../../assets/arrow_blue.svg?react';

const ArrowBlueIcon = (props: IconProps) => {
  return (
    <IconWrapper {...props} name={'ArrowBlueIcon'}>
      <Icon />
    </IconWrapper>
  );
};

export default ArrowBlueIcon;
