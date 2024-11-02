import React from 'react';

import { IconProps } from '../IconWrapper/IconWrapper.types';
import IconWrapper from '../IconWrapper/IconWrapper';
import Icon from '../../assets/list.svg?react';

const ListIcon = (props: IconProps) => {
  return (
    <IconWrapper {...props} name={'ListIcon'}>
      <Icon />
    </IconWrapper>
  );
};

export default ListIcon;
