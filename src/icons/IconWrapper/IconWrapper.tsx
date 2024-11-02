import React from 'react';
import cn from 'classnames';

import { IconWrapperProps } from './IconWrapper.types';
import styles from './IconWrapper.module.scss';

const IconWrapper: React.FC<IconWrapperProps> = ({
  children,
  name,
  className,
  innerClassName,
  ...props
}) => {
  return (
    <span aria-label={name} className={cn(styles.IconWrapper, className)}>
      {React.cloneElement(children, {
        ...props,
        className: innerClassName,
      })}
    </span>
  );
};

export default IconWrapper;
