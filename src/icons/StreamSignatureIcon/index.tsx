import React from 'react';

import { IconProps } from '../IconWrapper/IconWrapper.types';
import IconWrapper from '../IconWrapper/IconWrapper';
import Icon from '../../assets/stream_signature.svg?react';

const StreamSignatureIcon = (props: IconProps) => {
  return (
    <IconWrapper {...props} name={'StreamSignatureIcon'}>
      <Icon />
    </IconWrapper>
  );
};

export default StreamSignatureIcon;
