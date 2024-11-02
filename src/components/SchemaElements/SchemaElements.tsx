import React from 'react';

import styles from './SchemaElements.module.scss';
import SchemaIcon from '../../icons/SchemaIcon';

const SchemaElements = () => {
  return (
    <div className={styles.SchemaElements}>
      <span className={styles.SchemaElements_header}>Подсхема</span>
      <div className={styles.SchemaElements_icons}>
        <div className={styles.SchemaElements_iconsWrapper}>
          <SchemaIcon />
        </div>
      </div>
    </div>
  );
};

export default SchemaElements;
