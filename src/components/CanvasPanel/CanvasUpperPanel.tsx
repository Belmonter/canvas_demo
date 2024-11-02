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
import BreakUpIcon from '../../icons/BreakUpIcon';
import ZoomInIcon from '../../icons/ZoomInIcon';
import ZoomOutIcon from '../../icons/ZoomOutIcon';
import HandIcon from '../../icons/HandIcon';
import ExpandIcon from '../../icons/ExpandIcon';

export const CanvasUpperPanel = () => {
  return (
    <div className={styles.CanvasPanel}>
      <div className={styles.CanvasPanel_leftSide}>
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
          <PanelButton element={<BreakUpIcon />} text={'Разорвать'} />
        </PanelButtonsGroup>
      </div>
      <div className={styles.CanvasPanel_rightSide}>
        <PanelButtonsGroup addPadding={'right'} separateLine={'right'}>
          <PanelButton element={<ZoomInIcon />} />
          <PanelButton element={<ZoomOutIcon />} />
        </PanelButtonsGroup>
        <PanelButtonsGroup addPadding={'all'} separateLine={'right'}>
          <PanelButton element={<HandIcon />} />
        </PanelButtonsGroup>
        <PanelButtonsGroup addPadding={'left'} separateLine={'right'}>
          <PanelButton element={<ExpandIcon />} />
        </PanelButtonsGroup>
      </div>
    </div>
  );
};
