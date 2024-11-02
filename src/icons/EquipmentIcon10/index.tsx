import React from 'react';

import { IconProps } from '../IconWrapper/IconWrapper.types';
import IconWrapper from '../IconWrapper/IconWrapper';
import Icon from '../../assets/equipment_10.svg?react';

const EquipmentIcon10 = (props: IconProps) => {
  return (
    <IconWrapper {...props} name={'EquipmentIcon10'}>
      <Icon />
    </IconWrapper>
  );
};

export default EquipmentIcon10;
