import React from 'react';
import { usc, usb } from '../utils/helpers';
import styles from '../styles/overTheFold.module.scss';

const OverTheFold = ({ children }: any) =>  (
  <div className={usc(styles,['OverTheFold'])}>
    <div className={usb(['contianer'])}>
      <p>Content! </p>
    </div>
  </div>
);

export default OverTheFold;