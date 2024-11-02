import React from 'react';
import { Switch } from '@mui/material';

import styles from './CanvasPanel.module.scss';
import PanelButton from '../PanelButton/PanelButton';
import PanelButtonsGroup from '../PanelButtonsGroup/PanelButtonsGroup';
import CopyIcon from '../../icons/CopyIcon';
import PlusIcon from '../../icons/PlusIcon';
import ScissorsIcon from '../../icons/ScissorsIcon';
import LayoutListIcon from '../../icons/LayoutListIcon';
import StreamSignatureIcon from '../../icons/StreamSignatureIcon';
import ConnectIcon from '../../icons/ConnectIcon';

export const CanvasPanel = () => {
  return (
    <div className={styles.CanvasPanel}>
      <PanelButtonsGroup addPadding={'right'} separateLine={'right'}>
        <PanelButton element={<PlusIcon />} />
        <PanelButton element={<ScissorsIcon />} />
        <PanelButton element={<CopyIcon />} />
      </PanelButtonsGroup>
      <PanelButtonsGroup addPadding={'all'} separateLine={'right'}>
        <PanelButton element={<Switch size="small" />} text={'Активный'} />
        <PanelButton
          element={<LayoutListIcon />}
          text={'Панель оборудования'}
        />
        <PanelButton
          element={<StreamSignatureIcon />}
          text={'Подпись потока'}
        />
      </PanelButtonsGroup>
      <PanelButtonsGroup addPadding={'left'}>
        <PanelButton element={<ConnectIcon />} text={'Соединить'} />
      </PanelButtonsGroup>
    </div>
  );
};
