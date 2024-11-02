import React from 'react';
import cn from 'classnames';

import { EquipmentPanelBlockProps } from './EquipmentPanelBlock.types';
import styles from './EquipmentPanelBlock.module.scss';

const EquipmentPanelBlock = ({
  children,
  divider = false,
}: EquipmentPanelBlockProps) => {
  return (
    <div
      className={cn(styles.EquipmentPanelBlock, {
        [styles.divider]: divider,
      })}
    >
      {children}
    </div>
  );
};

export default EquipmentPanelBlock;
