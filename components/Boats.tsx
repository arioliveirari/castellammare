import React, { useEffect, useState } from 'react';
import { usb, usc, usw } from "../utils/helpers";
import styles from '../styles/boats.module.scss';
import Tittles from './Tittles';
import BoatsMobile from '../components/BoatsMobile';
import MangoSlider from './MangoSlider';
import KiwiSlider from './KiwiSlider';
import { RiveAnimation } from './RiveAnimation';

const boatsData = [
  { id: 1, years: 5, travels: 80, reversedDrop: true, passanger: 5, imageUrl: "/images/kiwi.jpg" },
  { id: 2, years: 5, travels: 80, reversedDrop: false, passanger: 4, imageUrl: "coast /images/mango.jpg" }
]


const Boats = () => {
  return (
    <>
     
      <div className={usc(styles, ["desktopTitle"])} >
        <Tittles styling={{ paddingTop: "70px", backgroundColor: "#86bed5" }} tittle='Nuestros Veleros' />
      </div>
      <div className={usw(styles, ["boatsModule"], ["container-fluid "])}>
        <div className={usc(styles, ["desktopAnimations"])} >
          <RiveAnimation bottom={400} right={0} animationName="water_2" extraClassName="rotationAnimation water2" />
          <RiveAnimation top={0} left={0} animationName="water_1" />
          <RiveAnimation top={450} bottom={0} left={0} right={0} animationName="sail_final" className="sailing" extraClassName="sailingAnimation" />
        </div>
        <div className={usb(["container"])}>
          <div className={usw(styles, ["topContent"], ["row", "pb-5"])}>
            <div className={usb(["col-12", "p-0"])}>
              <p className={usw(styles, ["boatName"], ["m-0"])}>
                kiwi
              </p>
            </div>

            <div className={usb(["col-12", "p-0"])}>
              <div className={usb(["row"])}>
                <div className={usb(["col-md-7", "p-0", "col-12"])}>
                  <div className={usc(styles, ["botPic"])}>
                  </div>
                
                  <KiwiSlider />
                </div>
                <div className={usb(["col-md-5", "col-12"])}>
                  <div className={usc(styles, ["dataContainer"])}>
                    <div className={usc(styles, ["boatData", "firstData"])}>
                      <p className={usc(styles, ["boatText"])}>Manga</p>
                      <p className={usc(styles, ["boatNumber"])}>2,07</p>
                    </div>
                    <div className={usc(styles, ["boatData"])}>
                      <p className={usc(styles, ["boatText"])}>Eslora</p>
                      <p className={usc(styles, ["boatNumber"])}>5,47</p>
                    </div>
                    <div className={usc(styles, ["boatData"])}>
                      <p className={usc(styles, ["boatText"])}> Modelo Phantom 19</p>
                    </div>
                    <div className={usc(styles, ["text"])}>
                      <p>
                        Velero de 19 pies diseñado por Domato y construido en astillero Marco. Cómodo, acogedor, ideal para salidas en pareja.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>

          <div className={usw(styles, ["botContent", "botContent-reverse"], ["row"])}>

            <div className={usb(["col-md-12"])}>

            </div>

            <div className={usb(["col-12"])}>
              <div className={usb(["row"])}>
                <div className={usb(["col-md-4", "col-12"])}>
                  <div className={usc(styles, ["dataContainer"])}>
                    <div className={usc(styles, ["boatData", "firstData"])}>
                      <p className={usc(styles, ["boatNumber"])}>2,58</p>
                      <p className={usc(styles, ["boatText"])}>Manga</p>
                    </div>
                    <div className={usc(styles, ["boatData"])}>
                      <p className={usc(styles, ["boatNumber"])}>7,20</p>
                      <p className={usc(styles, ["boatText"])}>Eslora</p>
                    </div>
                    <div className={usc(styles, ["boatData"])}>
                      <p className={usc(styles, ["boatText"])}>Modelo D´angelo 24</p>
                    </div>
                    <div className={usc(styles, ["text"])}>
                      <p>
                      Diseño del gran German Frers. Un 24 pies amplio, ágil, rápido y muy divertido para salir con amigos y amigas.
                      </p>
                    </div>
                  </div>
                </div>
                <div className={usb(["col-md-7", "p-0","col-12"])}>
                  <p className={usw(styles, ["boatName"], [" m-0"])}>
                    mango
                  </p>
                  <div className={usc(styles, ["botPic"])}>
                  </div>
                  <MangoSlider />
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