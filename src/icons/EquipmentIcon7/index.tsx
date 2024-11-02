import React from 'react';

import { IconProps } from '../IconWrapper/IconWrapper.types';
import IconWrapper from '../IconWrapper/IconWrapper';
import Icon from '../../assets/equipment_7.svg?react';

const EquipmentIcon7 = (props: IconProps) => {
  return (
    <IconWrapper {...props} name={'EquipmentIcon7'}>
      <Icon />
    </IconWrapper>
  );
};

export default EquipmentIcon7;
