import React from 'react';

import { IconProps } from '../IconWrapper/IconWrapper.types';
import IconWrapper from '../IconWrapper/IconWrapper';
import Icon from '../../assets/eq3.svg?react';

const Eq3 = (props: IconProps) => {
  return (
    <IconWrapper {...props} name={'Eq3'}>
      <Icon />
    </IconWrapper>
  );
};

export default Eq3;
