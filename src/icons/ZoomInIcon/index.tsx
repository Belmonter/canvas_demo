import React from 'react';

import { IconProps } from '../IconWrapper/IconWrapper.types';
import IconWrapper from '../IconWrapper/IconWrapper';
import Icon from '../../assets/zoom_in.svg?react';

const ZoomInIcon = (props: IconProps) => {
  return (
    <IconWrapper {...props} name={'ZoomInIcon'}>
      <Icon />
    </IconWrapper>
  );
};

export default ZoomInIcon;
