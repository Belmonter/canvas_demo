import React from 'react';

import { IconProps } from '../IconWrapper/IconWrapper.types';
import IconWrapper from '../IconWrapper/IconWrapper';
import Icon from '../../assets/equipment_2.svg?react';

const EquipmentIcon2 = (props: IconProps) => {
  return (
    <IconWrapper {...props} name={'EquipmentIcon2'}>
      <Icon />
    </IconWrapper>
  );
};

export default EquipmentIcon2;
