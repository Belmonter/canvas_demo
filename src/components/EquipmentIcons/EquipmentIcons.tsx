import React from 'react';

import styles from './EquipmentIcons.module.scss';
import EquipmentIcon1 from '../../icons/EquipmentIcon1';
import EquipmentIcon9 from '../../icons/EquipmentIcon9';
import EquipmentIcon8 from '../../icons/EquipmentIcon8';
import EquipmentIcon2 from '../../icons/EquipmentIcon2';
import EquipmentIcon3 from '../../icons/EquipmentIcon3';
import EquipmentIcon4 from '../../icons/EquipmentIcon4';
import EquipmentIcon5 from '../../icons/EquipmentIcon5';
import EquipmentIcon6 from '../../icons/EquipmentIcon6';
import EquipmentIcon7 from '../../icons/EquipmentIcon7';
import EquipmentIcon10 from '../../icons/EquipmentIcon10';
import EquipmentIcon11 from '../../icons/EquipmentIcon11';

const EquipmentIcons = () => {
  const onDragStart = (event, nodeType) => {
    event.dataTransfer.setData('Text', nodeType);
    event.dataTransfer.effectAllowed = 'move';
  };

  return (
    <div className={styles.EquipmentIcons}>
      <div
        className={styles.EquipmentIcons_iconWrapper}
        draggable
        onDragStart={(e) => onDragStart(e, 'custom1')}
      >
        <EquipmentIcon1 />
      </div>
      <div
        className={styles.EquipmentIcons_iconWrapper}
        draggable
        onDragStart={(e) => onDragStart(e, 'custom2')}
      >
        <EquipmentIcon2 />
      </div>
      <div
        className={styles.EquipmentIcons_iconWrapper}
        draggable
        onDragStart={(e) => onDragStart(e, 'custom3')}
      >
        <EquipmentIcon3 />
      </div>
      <div className={styles.EquipmentIcons_iconWrapper} draggable>
        <EquipmentIcon4 />
      </div>
      <div className={styles.EquipmentIcons_iconWrapper} draggable>
        <EquipmentIcon5 />
      </div>
      <div className={styles.EquipmentIcons_iconWrapper} draggable>
        <EquipmentIcon6 />
      </div>
      <div className={styles.EquipmentIcons_iconWrapper} draggable>
        <EquipmentIcon7 />
      </div>
      <div className={styles.EquipmentIcons_iconWrapper} draggable>
        <EquipmentIcon8 />
      </div>
      <div className={styles.EquipmentIcons_iconWrapper} draggable>
        <EquipmentIcon9 />
      </div>
      <div className={styles.EquipmentIcons_iconWrapper} draggable>
        <EquipmentIcon10 />
      </div>
      <div className={styles.EquipmentIcons_iconWrapper} draggable>
        <EquipmentIcon11 />
      </div>
    </div>
  );
};

export default EquipmentIcons;
