import React from 'react';
import { usc, usb, usw } from '../utils/helpers';
import Form from './Form';
import styles from '../styles/overTheFold.module.scss';

const OverTheFold = ({ children }: any) => (
  <div className={usw(styles, ['OverTheFold'], ["container-fluid"])}>
    <div className={usc(styles, ["mask"])}>
      <div className={usb(['container', 'm-auto'])}>
        <div className={usw(styles, ["rowContainer"], ["row"])}>
          <div className={usb(["col-md-5", "col-12"])}>
            <div className={usc(styles, ['containerOver'])}>
              <div className={usc(styles, ["textOver"])}>
                <span className={usc(styles, ["tittleOver"])}>
                  Baires Navega
                </span>
                <div className={usb(["row"])}>
                  <div className={usb(["col-md-12", "col-9", "m-auto"])}>
                    <div className={usc(styles, ["paragraphOver"])} >
                      <p>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum  has been the industry standard dummy text ever  since the 1500s, when an unknown printer took
                      </p>
                    </div>
                  </div>
                </div>
                <a className={usc(styles, ["buttonOver"])} >Adquirir voucher</a>
                <a href='#form' className={usc(styles, ["arrowButton"])}>
                  <span className='icon-arrow-right'></span>
                </a>
              </div>
            </div>
          </div>
          <div id='form' className={usw(styles, ["formContainer"], ["col-md-5", "col-12"])} >
            <Form />
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default OverTheFold;