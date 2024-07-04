import React from 'react';
import { usc, usb, usw } from '../utils/helpers';
import Form from './Form';
import styles from '../styles/overTheFold.module.scss';
import { useTranslation } from "react-i18next";
import ButtonHeader from './ButtonBuyHeader';


const OverTheFold = ({ children }: any) => {
  const { t, i18n } = useTranslation();

  return (
    <div id='HOME' className={usw(styles, ['OverTheFold'], ["container-fluid"])}>
      <video className={usc(styles, ["video"])} height="100%" width="100%" autoPlay muted loop >
        <source src="/video/bg.mp4" type="video/mp4" />
      </video>
      
      <div className={usc(styles, ["mask"])}>

        <div className={usb(['container', 'm-auto'])}>

          <div className={usw(styles, ["rowContainer"], ["row"])}>
            <div className={usb(["col-12"])}>
              <div className={usc(styles, ["city"])}>
                <div>{t("OverTheFold.city")}</div>
              </div>
            </div>
          </div>

          <div className={usw(styles, ["rowContainer"], ["row"])}>
            <div className={usb(["col-12"])}>
              <div className={usc(styles, ["company"])}>
                <h1 className={usc(styles, ["tittleOver"])}>
                  {t("OverTheFold.titleFrist")}
                </h1>
                <h1 className={usc(styles, ["tittleOver", "stroked"])}>
                  {t("OverTheFold.titleSecond")}
                </h1>
              </div>
            </div>
          </div>

          <div className={usw(styles, ["rowContainer"], ["row"])}>
            <div className={usb(["col-12"])}>
              <div className={usc(styles, ["description"])}>
                {t("OverTheFold.description")}
              </div>
            </div>
          </div>

        <div className={usw(styles, ["row"], [""])}>
          <div className={usb(["col-12"])}>
            <div className={usc(styles, [''])}>
              <ButtonHeader />
            </div>

        </div>
          </div>
        </div>
      </div>


    </div>
  );
}
export default OverTheFold;