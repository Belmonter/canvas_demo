import React from 'react';

import { IconProps } from '../IconWrapper/IconWrapper.types';
import IconWrapper from '../IconWrapper/IconWrapper';
import Icon from '../../assets/equipment_1.svg?react';

const EquipmentIcon1 = (props: IconProps) => {
  return (
    <IconWrapper {...props} name={'EquipmentIcon1'}>
      <Icon />
    </IconWrapper>
  );
};

export default EquipmentIcon1;
