import React from 'react';

import { IconProps } from '../IconWrapper/IconWrapper.types';
import IconWrapper from '../IconWrapper/IconWrapper';
import Icon from '../../assets/layout_list.svg?react';

const LayoutListIcon = (props: IconProps) => {
  return (
    <IconWrapper {...props} name={'LayoutListIcon'}>
      <Icon />
    </IconWrapper>
  );
};

export default LayoutListIcon;
