import React from 'react';

import { IconProps } from '../IconWrapper/IconWrapper.types';
import IconWrapper from '../IconWrapper/IconWrapper';
import Icon from '../../assets/equipment_6.svg?react';

const EquipmentIcon6 = (props: IconProps) => {
  return (
    <IconWrapper {...props} name={'EquipmentIcon6'}>
      <Icon />
    </IconWrapper>
  );
};

export default EquipmentIcon6;
