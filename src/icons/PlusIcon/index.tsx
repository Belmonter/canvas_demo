import React from 'react';

import { IconProps } from '../IconWrapper/IconWrapper.types';
import IconWrapper from '../IconWrapper/IconWrapper';
import Icon from '../../assets/plus.svg?react';

const PlusIcon = (props: IconProps) => {
  return (
    <IconWrapper {...props} name={'PlusIcon'}>
      <Icon />
    </IconWrapper>
  );
};

export default PlusIcon;
