import React from 'react';

import { IconProps } from '../IconWrapper/IconWrapper.types';
import IconWrapper from '../IconWrapper/IconWrapper';
import Icon from '../../assets/eq4.svg?react';

const Eq4 = (props: IconProps) => {
  return (
    <IconWrapper {...props} name={'Eq4'}>
      <Icon />
    </IconWrapper>
  );
};

export default Eq4;
