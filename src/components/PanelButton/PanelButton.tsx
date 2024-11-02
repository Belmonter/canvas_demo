import React from 'react';

import styles from './PanelButton.module.scss';
import { ButtonPanelIconProps } from './PanelButton.types';
import { isDefined } from '../../utils/typeguards/isDefined';

const PanelButton = ({ element, text, ...props }: ButtonPanelIconProps) => {
  return (
    <button className={styles.PanelButton} {...props}>
      <div className={styles.PanelButton_wrapper}>
        {isDefined(element) && element}
        {isDefined(text) && text}
      </div>
      {/*{typeOfView === 'icon' ? (*/}
      {/*  <Icon />*/}
      {/*) : typeOfView === 'iconText' ? (*/}
      {/*  <div className={styles.PanelButton_wrapper}>*/}
      {/*    <img className={imgClassName} src={icon} alt={icon} />*/}
      {/*    <div>{text}</div>*/}
      {/*  </div>*/}
      {/*) : (*/}
      {/*  <div className={styles.PanelButton_wrapper}>*/}
      {/*    <div>{element}</div>*/}
      {/*    <div>{text}</div>*/}
      {/*  </div>*/}
      {/*)}*/}
    </button>
  );
};

export default PanelButton;
