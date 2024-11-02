import React from 'react';

import { IconProps } from '../IconWrapper/IconWrapper.types';
import IconWrapper from '../IconWrapper/IconWrapper';
import Icon from '../../assets/search.svg?react';

const SearchIcon = (props: IconProps) => {
  return (
    <IconWrapper {...props} name={'SearchIcon'}>
      <Icon />
    </IconWrapper>
  );
};

export default SearchIcon;
