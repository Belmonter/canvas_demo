import React from 'react';
import cn from 'classnames';

import styles from './PanelButtonsGroup.module.scss';
import { PanelButtonsGroupProps } from './PanelButtonsGroup.types';

const PanelButtonsGroup = ({
  children,
  separateLine = 'none',
  addPadding = 'right',
  ...props
}: PanelButtonsGroupProps) => {
  return (
    <div
      className={cn(styles.PanelButtonsGroup, {
        [styles.separateRightLine]: separateLine === 'right',
        [styles.separateLeftLine]: separateLine === 'left',
        [styles.separateLeftLine]: separateLine === 'left',
        [styles.paddingRight]: addPadding === 'right',
        [styles.paddingLeft]: addPadding === 'left',
        [styles.padding]: addPadding === 'all',
      })}
      {...props}
    >
      {children}
    </div>
  );
};

export default PanelButtonsGroup;
