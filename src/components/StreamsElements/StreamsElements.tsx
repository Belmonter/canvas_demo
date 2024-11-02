import React from 'react';

import styles from './StreamsElements.module.scss';
import ArrowBlueIcon from '../../icons/ArrowBlueIcon';
import ArrowRedIcon from '../../icons/ArrowRedIcon';

const StreamsElements = () => {
  return (
    <div className={styles.StreamsElements}>
      <span className={styles.StreamsElements_header}>Потоки</span>
      <div className={styles.StreamsElements_icons}>
        <div className={styles.StreamsElements_iconsWrapper}>
          <ArrowBlueIcon />
        </div>
        <div className={styles.StreamsElements_iconsWrapper}>
          <ArrowRedIcon />
        </div>
      </div>
    </div>
  );
};

export default StreamsElements;
