import React from 'react';

import { IconProps } from '../IconWrapper/IconWrapper.types';
import IconWrapper from '../IconWrapper/IconWrapper';
import Icon from '../../assets/copy.svg?react';

const CopyIcon = (props: IconProps) => {
  return (
    <IconWrapper {...props} name={'CopyIcon'}>
      <Icon />
    </IconWrapper>
  );
};

export default CopyIcon;
