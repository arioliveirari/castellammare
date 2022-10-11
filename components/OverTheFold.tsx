import React from 'react';
import { usc, usb, usw } from '../utils/helpers';
import Form from './Form';
import styles from '../styles/overTheFold.module.scss';


const OverTheFold = ({ children }: any) => (
  <div className={usw(styles, ['OverTheFold'], ["container-fluid"])}>
    <video className={usc(styles, ["video"])} height="100%" width="100%" autoPlay muted loop >
      <source src="/video/bg.mp4" type="video/mp4" />
    </video>
    <div className={usc(styles, ["mask"])}>
      <div className={usb(['container', 'm-auto'])}>
        <div className={usw(styles, ["rowContainer"], ["row"])}>
          <div className={usb(["col-md-5", "p-0", "col-12"])}>
            <div className={usc(styles, ['containerOver'])}>
              <div className={usc(styles, ["textOver"])}>
                <h1 className={usc(styles, ["tittleOver"])}>
                  Baires Navega
                </h1>
                <div className={usc(styles, ["paragraphOver"])} >
                  <h2>
                    Conectate con el Río de la Plata de la manera más linda:
                    <b>&nbsp;Navegando a vela</b>
                    <br />
                    <br />
                    Con nuestros Gift Vouchers regalá un paseo en velero por el Río de la Plata para dos, tres o cuatro personas con comida y bebida a bordo.
                    <br />
                    Son con fecha abierta y el agasajado tiene un año para coordinar el paseo.
                  </h2>
                  <p>

                  </p>
                </div>
                <a href='#form' className={usc(styles, ["arrowButton"])}>
                  <span className='icon-arrow-right'></span>
                </a>
              </div>
            </div>
          </div>
          <div id='form' className={usw(styles, ["formContainer"], ["col-md-7"])} >
            <Form />
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default OverTheFold;