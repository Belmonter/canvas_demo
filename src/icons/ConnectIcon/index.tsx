import React from 'react';

import { IconProps } from '../IconWrapper/IconWrapper.types';
import IconWrapper from '../IconWrapper/IconWrapper';
import Icon from '../../assets/connect.svg?react';

const ConnectIcon = (props: IconProps) => {
  return (
    <IconWrapper {...props} name={'ConnectIcon'}>
      <Icon />
    </IconWrapper>
  );
};

export default ConnectIcon;
