import React from 'react';

import UniversalIcon from '../Icon';
import CopyIconComponent from './CopyIconComponent';
import { IconsProps } from '../Icons.types';

const CopyIcon = ({ color }: IconsProps) => {
  return (
    <UniversalIcon color={color}>
      <CopyIconComponent />
    </UniversalIcon>
  );
};

export default CopyIcon;
