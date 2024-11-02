import React from 'react';

import { IconProps } from '../IconWrapper/IconWrapper.types';
import IconWrapper from '../IconWrapper/IconWrapper';
import Icon from '../../assets/expand.svg?react';

const ExpandIcon = (props: IconProps) => {
  return (
    <IconWrapper {...props} name={'ExpandIcon'}>
      <Icon />
    </IconWrapper>
  );
};

export default ExpandIcon;
