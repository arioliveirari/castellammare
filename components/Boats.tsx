import React, { useEffect, useState } from 'react';
import { usb, usc, usw } from "../utils/helpers";
import styles from '../styles/boats.module.scss';
import Tittles from './Tittles';
import BoatsMobile from '../components/BoatsMobile';
import BoatsSlider from './boatsSlider';

import { RiveAnimation } from './RiveAnimation';
const boatsData = [
  { id: 1, years: 5, travels: 80, reversedDrop: false, passanger: 5 },
  { id: 2, years: 5, travels: 80, reversedDrop: true, passanger: 4 }
]

const Boats = () => {
  return (
    <>
      <div className={usw(styles, ["boatsModule"], ["container-fluid "])}>
        <RiveAnimation bottom={0} left={0} animationName="water_2" extraClassName="rotationAnimation" />
        <RiveAnimation top={0} right={0} animationName="water_1" />
        <RiveAnimation top={0} bottom={0} left={0} right={0} animationName="sailing" className="sailing" extraClassName="sailingAnimation" />
        <Tittles tittle='Nuestros Veleros' />
        <div className={usb(["container", "m-auto"])}>
          <div className={usw(styles, ["topContent"], ["row", "pb-5"])}>
            <div className={usb(["col-12"])}>
              <p className={usw(styles, ["boatName"], [""])}>
                modelo de velero gtx 2
              </p>
            </div>

            <div className={usb(["col-12"])}>
              <div className={usb(["row"])}>
                <div className={usb(["col-md-7", "col-12"])}>
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
                      <p className={usc(styles, ["boatText"])}>tripulantes</p>
                      <p className={usc(styles, ["boatNumber"])}>4</p>
                    </div>
                    <div className={usc(styles, ["boatData"])}>
                      <p className={usc(styles, ["boatText"])}>Viajes</p>
                      <p className={usc(styles, ["boatNumber"])}>80</p>
                    </div>
                    <div className={usc(styles, ["text"])}>
                      <p>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                        Nisi repudiandae debitis, excepturi tempore nam laudantium,
                        enim similique temporibus assumenda magni architecto in,
                        inventore nemo iure incidunt sed cumque quibusdam nostrum?
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>

          <div className={usw(styles, ["botContent", "botContent-reverse"], ["row", "pb-5"])}>

            <div className={usb(["col-md-12"])}>

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
                      <p className={usc(styles, ["boatNumber"])}>5</p>
                      <p className={usc(styles, ["boatText"])}>tripulantes</p>
                    </div>
                    <div className={usc(styles, ["boatData"])}>
                      <p className={usc(styles, ["boatNumber"])}>80</p>
                      <p className={usc(styles, ["boatText"])}>Viajes</p>
                    </div>
                    <div className={usc(styles, ["text"])}>
                      <p>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                        Nisi repudiandae debitis, excepturi tempore nam laudantium,
                        enim similique temporibus assumenda magni architecto in,
                        inventore nemo iure incidunt sed cumque quibusdam nostrum?
                      </p>
                    </div>
                  </div>
                </div>
                <div className={usb(["col-md-7", "col-12"])}>
                  <p className={usw(styles, ["boatName"], ["m-auto me-0"])}>
                    Velero modelo gtx
                  </p>
                  <div className={usc(styles, ["botPic"])}>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={usc(styles,["mobile"])}>
          {
            boatsData.map((i) => (
              <BoatsMobile key={i.id} reversedDrop={i.reversedDrop} years={i.years} travels={i.travels} passangers={i.passanger} />
            ))
          }
        </div>
      </div>

    </>
  )
}
export default Boats