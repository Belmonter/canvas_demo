import React from 'react';

import { IconProps } from '../IconWrapper/IconWrapper.types';
import IconWrapper from '../IconWrapper/IconWrapper';
import Icon from '../../assets/equipment_5.svg?react';

const EquipmentIcon5 = (props: IconProps) => {
  return (
    <IconWrapper {...props} name={'EquipmentIcon5'}>
      <Icon />
    </IconWrapper>
  );
};

export default EquipmentIcon5;
