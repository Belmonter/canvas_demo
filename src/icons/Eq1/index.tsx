import React from 'react';

import { IconProps } from '../IconWrapper/IconWrapper.types';
import IconWrapper from '../IconWrapper/IconWrapper';
import Icon from '../../assets/eq1.svg?react';

const Eq1 = (props: IconProps) => {
  return (
    <IconWrapper {...props} name={'Eq1'}>
      <Icon />
    </IconWrapper>
  );
};

export default Eq1;
