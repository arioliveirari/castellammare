import React, { useEffect, useState } from 'react';
import { usb, usc, usw } from "../utils/helpers";
import styles from '../styles/boats.module.scss';
import Tittles from './Tittles';
import BoatsMobile from '../components/BoatsMobile';
import MangoSlider from './MangoSlider';
import KiwiSlider from './KiwiSlider';
import { RiveAnimation } from './RiveAnimation';
import { useTranslation } from "react-i18next";



const Boats = () => {
  const { t, i18n } = useTranslation();
  const boatsData = [
    {
      id: 1,
      years: 5,
      travels: 80,
      reversedDrop: true,
      passanger: 5,
      imageUrl: "/images/kiwi.jpg"
    },
    {
      id: 2,
      years: 5,
      travels: 80,
      reversedDrop: false,
      passanger: 4,
      imageUrl: "coast /images/mango.jpg"
    }
  ]
  return (
    <>
      <div className={usc(styles, ["desktopTitle"])} >
        <Tittles styling={{ paddingTop: "135px", backgroundColor: "#86bed5" }} tittle={t("Boats.title")} />
      </div>
      <div className={usw(styles, ["boatsModule"], ["container-fluid "])}>
        <div className={usc(styles, ["desktopAnimations"])} >
          <RiveAnimation bottom={400} right={0} animationName="water_2" extraClassName="rotationAnimation water2" />
          <RiveAnimation top={0} left={0} animationName="water_1" />
          <RiveAnimation top={450} bottom={0} left={0} right={0} animationName="sail_final" className="sailing" extraClassName="sailingAnimation" />
        </div>
        <div className={usc(styles, ["mobileAnimations"])} >
          <RiveAnimation bottom={0} right={0} animationName="water_2" extraClassName="rotationAnimation water2" />
          <RiveAnimation top={600} left={0} animationName="water_1" />
          <RiveAnimation top={550} left={0} right={0} animationName="sail_final" className="sailing" extraClassName="sailingAnimation" />
        </div>
        <div className={usb(["container"])}>
          <div className={usw(styles, ["topContent"], ["row", "pb-5"])}>
            <div className={usb(["col-12", "p-0"])}>
              <p className={usw(styles, ["boatName"], ["m-0"])}>
                {t("Boats.first.name")}
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
                      <p className={usc(styles, ["boatText"])}>{t("Boats.first.width")}</p>
                      <p className={usc(styles, ["boatNumber"])}>{t("Boats.first.widthNumber")}</p>
                    </div>
                    <div className={usc(styles, ["boatData"])}>
                      <p className={usc(styles, ["boatText"])}>{t("Boats.first.length")}</p>
                      <p className={usc(styles, ["boatNumber"])}>{t("Boats.first.lengthNumber")}</p>
                    </div>
                    <div className={usc(styles, ["boatData"])}>
                      <p className={usc(styles, ["boatText"])}>{t("Boats.first.model")}</p>
                    </div>
                    <div className={usc(styles, ["text"])}>
                      <p>
                      {t("Boats.first.description")}
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
                      <p className={usc(styles, ["boatNumber"])}>{t("Boats.second.widthNumber")}</p>
                      <p className={usc(styles, ["boatText"])}>{t("Boats.second.width")}</p>
                    </div>
                    <div className={usc(styles, ["boatData"])}>
                      <p className={usc(styles, ["boatNumber"])}>{t("Boats.second.lengthNumber")}</p>
                      <p className={usc(styles, ["boatText"])}>{t("Boats.second.length")}</p>
                    </div>
                    <div className={usc(styles, ["boatData"])}>
                      <p className={usc(styles, ["boatText"])}>{t("Boats.second.model")}</p>
                    </div>
                    <div className={usc(styles, ["text"])}>
                      <p>
                      {t("Boats.second.description")}
                      </p>
                    </div>
                  </div>
                </div>
                <div className={usb(["col-md-7", "p-0", "col-12"])}>
                  <p className={usw(styles, ["boatName"], [" m-0"])}>
                    {t("Boats.second.name")}
                  </p>
                  <div className={usc(styles, ["botPic"])}>
                  </div>
                  <MangoSlider />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={usc(styles, ["mobile"])}>
          <BoatsMobile />
        </div>
      </div>

    </>
  )
}
export default Boats