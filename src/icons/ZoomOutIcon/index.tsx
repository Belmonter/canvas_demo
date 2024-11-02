import React from 'react';

import { IconProps } from '../IconWrapper/IconWrapper.types';
import IconWrapper from '../IconWrapper/IconWrapper';
import Icon from '../../assets/zoom_out.svg?react';

const ZoomOutIcon = (props: IconProps) => {
  return (
    <IconWrapper {...props} name={'ZoomOutIcon'}>
      <Icon />
    </IconWrapper>
  );
};

export default ZoomOutIcon;
