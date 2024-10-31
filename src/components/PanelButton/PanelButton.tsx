import React from 'react';

import styles from './PanelButton.module.scss';
import { ButtonPanelIconProps } from './PanelButton.types';

const PanelButton = ({
  icon,
  typeOfView,
  element,
  text,
  imgClassName,
  ...props
}: ButtonPanelIconProps) => {
  return (
    <button className={styles.PanelButton} {...props}>
      {typeOfView === 'icon' ? (
        <img className={imgClassName} src={icon} alt={icon} />
      ) : typeOfView === 'iconText' ? (
        <div className={styles.PanelButton_wrapper}>
          <img className={imgClassName} src={icon} alt={icon} />
          <div>{text}</div>
        </div>
      ) : (
        <div className={styles.PanelButton_wrapper}>
          <div>{element}</div>
          <div>{text}</div>
        </div>
      )}
    </button>
  );
};

export default PanelButton;
