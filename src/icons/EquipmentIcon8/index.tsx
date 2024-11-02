import React from 'react';

import { IconProps } from '../IconWrapper/IconWrapper.types';
import IconWrapper from '../IconWrapper/IconWrapper';
import Icon from '../../assets/equipment_8.svg?react';

const EquipmentIcon8 = (props: IconProps) => {
  return (
    <IconWrapper {...props} name={'EquipmentIcon8'}>
      <Icon />
    </IconWrapper>
  );
};

export default EquipmentIcon8;
