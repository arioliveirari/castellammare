import React, { CSSProperties, useEffect, useState } from 'react';
import { usb, usc, usw } from "../utils/helpers";
import styles from '../styles/boatsMobile.module.scss';
import { RiveAnimation } from './RiveAnimation';
import MobileKiwiSlider from './MobileKiwiSlider';
import MobileMangoSlider from './MobileMangoSlider';
import Tittles from './Tittles';
import { useTranslation } from "react-i18next";



const BoatsMobile = () => {
    const { t, i18n } = useTranslation();
    return (
        <>

            <div className={usw(styles, ["boatsMobileModule"], ["container-fluid", "p-0", "m-0"])} >
                <Tittles tittle={t("Boats.title")} />
               
                <div className={usb(["row"])}>
                    <div className={usb(["col-12"])}>
                        <MobileKiwiSlider />
                        <div className={usc(styles, ["dataContainer"])}>
                            <div className={usb(["row"])}>
                                <div className={usb(["col-12"])}>
                                    <div className={usc(styles, ["topData"])}>
                                        <div className={usc(styles, ["data"])}>
                                            <div className={usc(styles, ["dataNumber"])}>{t("Boats.first.widthNumber")}</div>
                                            <div className={usc(styles, ["dataText"])}>{t("Boats.first.width")}</div>
                                        </div>
                                        <div className={usc(styles, ["data"])}>
                                            <div className={usc(styles, ["dataNumber"])}>{t("Boats.first.lengthNumber")}</div>
                                            <div className={usc(styles, ["dataText"])}>{t("Boats.first.length")}</div>
                                        </div>
                                    </div>
                                    <div className={usc(styles, ["botData"])}>
                                        <div className={usc(styles, ["data"])}>
                                            <div className={usc(styles, ["dataModel"])}>{t("Boats.first.model")}</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={usb(["row"])}>
                                <div className={usb(["col-12", "m-auto"])}>
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
                {/* <div className={usb(["col-12", "p-0"])}>
                    <p className={usw(styles, ["boatName"], [""])}>
                    {t("Boats.second.name")}
                    </p>
                </div>
                <div className={usb(["row"])}>
                    <div className={usb(["col-12"])}>
                        <MobileMangoSlider />
                        <div className={usc(styles, ["dataContainer"])}>
                            <div className={usb(["row"])}>
                                <div className={usb(["col-12"])}>
                                    <div className={usc(styles, ["topData"])}>
                                        <div className={usc(styles, ["data"])}>
                                            <div className={usc(styles, ["dataNumber"])}>{t("Boats.second.widthNumber")}</div>
                                            <div className={usc(styles, ["dataText"])}>{t("Boats.second.width")}</div>
                                        </div>
                                        <div className={usc(styles, ["data"])}>
                                            <div className={usc(styles, ["dataNumber"])}>{t("Boats.second.lengthNumber")}</div>
                                            <div className={usc(styles, ["dataText"])}>{t("Boats.second.length")}</div>
                                        </div>
                                    </div>
                                    <div className={usc(styles, ["botData"])}>
                                        <div className={usc(styles, ["data"])}>
                                            <div className={usc(styles, ["dataModel"])}>{t("Boats.second.model")}</div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className={usb(["row"])}>
                                <div className={usb(["col-12", "m-auto"])}>
                                    <div className={usc(styles, ["text", "botText"])}>
                                        <p>
                                        {t("Boats.second.description")}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> */}
            </div>

        </>
    )
}
export default BoatsMobile