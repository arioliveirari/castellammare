import React from 'react';
import { usc, usb, usw } from '../utils/helpers';
import styles from '../styles/overTheFold.module.scss';

const OverTheFold = ({ children }: any) => (
  <div className={usc(styles, ['OverTheFold'])}>
    <div className={usb(['container-fluid', 'm-auto'])}>
      <div className={usc(styles, ['conteinerOver'])}>
        <div className={usc(styles, ["textOver"])}>
          <span className={usc(styles, ["tittleOver"])}>
            Baires Navega
          </span>
          <div className={usc(styles, ["paragraphOver"])}>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              Lorem Ipsum has been the industry's standard dummy text ever  since the 1500s,
              when an unknown printer took
            </p>
          </div>
          <a href='#' className={usc(styles, ["buttonOver"])} >Reserva tu lugar</a>
        </div>
      </div>
    </div>
  </div>
);

export default OverTheFold;