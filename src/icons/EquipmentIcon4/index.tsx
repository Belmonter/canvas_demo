import React from 'react';

import { IconProps } from '../IconWrapper/IconWrapper.types';
import IconWrapper from '../IconWrapper/IconWrapper';
import Icon from '../../assets/equipment_4.svg?react';

const EquipmentIcon4 = (props: IconProps) => {
  return (
    <IconWrapper {...props} name={'EquipmentIcon4'}>
      <Icon />
    </IconWrapper>
  );
};

export default EquipmentIcon4;
