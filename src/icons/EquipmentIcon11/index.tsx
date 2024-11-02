import React from 'react';

import { IconProps } from '../IconWrapper/IconWrapper.types';
import IconWrapper from '../IconWrapper/IconWrapper';
import Icon from '../../assets/equipment_11.svg?react';

const EquipmentIcon11 = (props: IconProps) => {
  return (
    <IconWrapper {...props} name={'EquipmentIcon11'}>
      <Icon />
    </IconWrapper>
  );
};

export default EquipmentIcon11;
