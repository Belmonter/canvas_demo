import React from 'react';

import styles from './EquipmentPanel.module.scss';
import CloseIcon from '../../icons/CloseIcon';
import StreamsElements from '../StreamsElements/StreamsElements';
import EquipmentPanelBlock from '../EquipmentPanelBlock/EquipmentPanelBlock';
import SchemaElements from '../SchemaElements/SchemaElements';
import EquipmentPanelForm from '../EquipmentPanelForm/EquipmentPanelForm';
import EquipmentIcons from '../EquipmentIcons/EquipmentIcons';

const EquipmentPanel = () => {
  return (
    <div
      className={styles.EquipmentPanel}
      draggable={true}
      onDragStart={(e) => console.log(e)}
    >
      <div className={styles.EquipmentPanel_header}>
        <span>Панель оборудования</span>
        <CloseIcon />
      </div>
      <div className={styles.EquipmentPanel_content}>
        <EquipmentPanelBlock divider={true}>
          <div className={styles.EquipmentPanel_steams}>
            <StreamsElements />
            <SchemaElements />
          </div>
        </EquipmentPanelBlock>
        <EquipmentPanelBlock divider={true}>
          <EquipmentPanelForm />
        </EquipmentPanelBlock>
        <EquipmentPanelBlock>
          <EquipmentIcons />
        </EquipmentPanelBlock>
      </div>
    </div>
  );
};

export default EquipmentPanel;
