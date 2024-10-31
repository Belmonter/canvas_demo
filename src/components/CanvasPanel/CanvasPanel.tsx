import React from 'react';
import { Switch } from '@mui/material';

import plusIcon from '../../assets/plus.svg';
import scissors from '../../assets/scissors.svg';
import copy from '../../assets/copy.svg';
import styles from './CanvasPanel.module.scss';
import PanelButton from '../PanelButton/PanelButton';
import PanelButtonsGroup from '../PanelButtonsGroup/PanelButtonsGroup';
import layoutList from '../../assets/layout_list.svg';

export const CanvasPanel = () => {
  return (
    <div className={styles.CanvasPanel}>
      <PanelButtonsGroup addPadding={'right'} separateLine={'right'}>
        <PanelButton icon={plusIcon} typeOfView={'icon'} />
        <PanelButton icon={scissors} typeOfView={'icon'} />
        <PanelButton icon={copy} typeOfView={'icon'} />
      </PanelButtonsGroup>
      <PanelButtonsGroup addPadding={'all'} separateLine={'right'}>
        <PanelButton
          element={<Switch size="small" />}
          text={'Активный'}
          typeOfView={'elementText'}
        />
        <PanelButton
          icon={layoutList}
          imgClassName={styles.backgroundBlue}
          text={'панель оборудования'}
          typeOfView={'iconText'}
        />
        <PanelButton icon={copy} typeOfView={'icon'} />
      </PanelButtonsGroup>
    </div>
  );
};
