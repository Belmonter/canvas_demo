import React from 'react';

import { IconProps } from '../IconWrapper/IconWrapper.types';
import IconWrapper from '../IconWrapper/IconWrapper';
import Icon from '../../assets/schema.svg?react';

const SchemaIcon = (props: IconProps) => {
  return (
    <IconWrapper {...props} name={'SchemaIcon'}>
      <Icon />
    </IconWrapper>
  );
};

export default SchemaIcon;
