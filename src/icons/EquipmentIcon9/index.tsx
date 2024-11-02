import React from 'react';

import { IconProps } from '../IconWrapper/IconWrapper.types';
import IconWrapper from '../IconWrapper/IconWrapper';
import Icon from '../../assets/equipment_9.svg?react';

const EquipmentIcon9 = (props: IconProps) => {
  return (
    <IconWrapper {...props} name={'EquipmentIcon9'}>
      <Icon />
    </IconWrapper>
  );
};

export default EquipmentIcon9;
