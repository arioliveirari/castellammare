import React, { useEffect, useState } from 'react';
import { usb, usc, usw } from "../utils/helpers";
import styles from '../styles/boats.module.scss';
import Tittles from './Tittles';
import BoatsSlider from './boatsSlider';

const Boats = () => {
  return (
    <>
      <div className={usw(styles, ["boatsModule"], ["container-fluid "])}>
        <Tittles tittle='Nuestros Veleros' />
        <div className={usb(["container", "m-auto"])}>
          <BoatsSlider />

          <div className={usw(styles, ["botContent"], ["row", "pb-5"])}>

            <div className={usb(["col-12"])}>
              <p className={usw(styles, ["boatName"], [""])}>
                modelo de velero gtx 2
              </p>
            </div>

            <div className={usb(["col-12"])}>
              <div className={usb(["row"])}>
                <div className={usb(["col-md-8", "col-12"])}>
                  <div className={usc(styles, ["botPic"])}>
                  </div>
                </div>
                <div className={usb(["col-md-4", "col-12"])}>
                  <div className={usc(styles, ["dataContainer"])}>
                    <div className={usc(styles, ["boatData"])}>
                      <p className={usc(styles, ["boatText"])}>Años Navegando</p>
                      <p className={usc(styles, ["boatNumber"])}>5</p>
                    </div>
                    <div className={usc(styles, ["boatData"])}>
                      <p className={usc(styles, ["boatText"])}>Viajes</p>
                      <p className={usc(styles, ["boatNumber"])}>80</p>
                    </div>
                    <div className={usc(styles, ["boatData"])}>
                      <p className={usc(styles, ["boatText"])}>tripulantes</p>
                      <p className={usc(styles, ["boatNumber"])}>4</p>
                    </div>
                    <div className={usc(styles, ["boatData"])}>
                      <p className={usc(styles, ["boatText"])}>Años Navegando</p>
                      <p className={usc(styles, ["boatNumber"])}>5</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>

          <div className={usw(styles, ["botContent", "botContent-reverse"], ["row", "pb-5"])}>

            <div className={usb(["col-12"])}>
              <p className={usw(styles, ["boatName"], ["m-auto me-0"])}>
                Velero modelo gtx
              </p>
            </div>

            <div className={usb(["col-12"])}>
              <div className={usb(["row"])}>
                <div className={usb(["col-md-4", "col-12"])}>
                  <div className={usc(styles, ["dataContainer"])}>
                    <div className={usc(styles, ["boatData"])}>
                      <p className={usc(styles, ["boatNumber"])}>5</p>
                      <p className={usc(styles, ["boatText"])}>Años Navegando</p>
                    </div>
                    <div className={usc(styles, ["boatData"])}>
                      <p className={usc(styles, ["boatNumber"])}>80</p>
                      <p className={usc(styles, ["boatText"])}>Viajes</p>
                    </div>
                    <div className={usc(styles, ["boatData"])}>
                      <p className={usc(styles, ["boatNumber"])}>5</p>
                      <p className={usc(styles, ["boatText"])}>tripulantes</p>
                    </div>
                    <div className={usc(styles, ["boatData"])}>
                      <p className={usc(styles, ["boatNumber"])}>5</p>
                      <p className={usc(styles, ["boatText"])}>Años Navegando</p>
                    </div>
                  </div>
                </div>
                <div className={usb(["col-md-8", "col-12"])}>
                  <div className={usc(styles, ["botPic"])}>
                  </div>
                </div>

              </div>
            </div>

          </div>

        </div>
      </div>

    </>
  )
}
export default Boats