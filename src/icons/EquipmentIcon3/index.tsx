import React from 'react';

import { IconProps } from '../IconWrapper/IconWrapper.types';
import IconWrapper from '../IconWrapper/IconWrapper';
import Icon from '../../assets/equipment_3.svg?react';

const EquipmentIcon3 = (props: IconProps) => {
  return (
    <IconWrapper {...props} name={'EquipmentIcon3'}>
      <Icon />
    </IconWrapper>
  );
};

export default EquipmentIcon3;
