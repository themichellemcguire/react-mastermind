import React from 'react';
import styles from './GuessPeg.module.css';

const GuessPeg = (props) => (
  <div className={styles.GuessPeg}
    style={{
          backgroundColor: props.color}}>
  </div>
);

export default GuessPeg;
