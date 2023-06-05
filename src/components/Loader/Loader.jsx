import React from 'react';
import styles from './Loader.module.css';

const Loader = () => (
 <div className={styles.wrapper}>
  <span className={`${styles.circle} ${styles.circle_1}`} />
  <span className={`${styles.circle} ${styles.circle_2}`} />
  <span className={`${styles.circle} ${styles.circle_3}`} />
  <span className={`${styles.circle} ${styles.circle_4}`} />
  <span className={`${styles.circle} ${styles.circle_5}`} />
 </div>
);

export default Loader;
