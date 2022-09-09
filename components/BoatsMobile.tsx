import React, { CSSProperties, useEffect, useState } from 'react';
import { usb, usc, usw } from "../utils/helpers";
import styles from '../styles/boatsMobile.module.scss';
import KiwiSlider from './KiwiSlider';
import MangoSlider from './KiwiSlider';
import Tittles from './Tittles';
import { url } from 'inspector';



const BoatsMobile = () => {
    return (
        <>
            <div className={usw(styles, ["boatsMobileModule"], ["container-fluid", "p-0"])} >
                <div className={usb(["row"])}>
                    <div className={usb(["col-12"])}>
                        <KiwiSlider />
                        <div className={usc(styles, ["dataContainer"])}>
                            <div className={usb(["row"])}>
                                <div className={usb(["col-12"])}>
                                    <div className={usc(styles, ["topData"])}>
                                        <div className={usc(styles, ["data"])}>
                                            <div className={usc(styles, ["dataNumber"])}>4</div>
                                            <div className={usc(styles, ["dataText"])}>tripulantes</div>
                                        </div>
                                        <div className={usc(styles, ["data"])}>
                                            <div className={usc(styles, ["dataNumber"])}>80</div>
                                            <div className={usc(styles, ["dataText"])}>viajes</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={usb(["row"])}>
                                <div className={usb(["col-12"])}>
                                    <div className={usc(styles, ["botData"])} >
                                        <div className={usc(styles, ["data"])}>
                                            <div className={usc(styles, ["dataNumber"])}>5</div>
                                            <div className={usc(styles, ["dataText"])}>años viajando</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={usb(["row"])}>
                                <div className={usb(["col-12", "m-auto"])}>
                                    <div className={usc(styles, ["text"])}>
                                        <p>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam dui arcu, elementum tortor ut, fringilla finibus ex.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={usb(["row"])}>
                    <div className={usb(["col-12"])}>
                        <MangoSlider />
                        <div className={usc(styles, ["dataContainer"])}>
                            <div className={usb(["row"])}>
                                <div className={usb(["col-12"])}>
                                    <div className={usc(styles, ["topData"])}>
                                        <div className={usc(styles, ["data"])}>
                                            <div className={usc(styles, ["dataNumber"])}>4</div>
                                            <div className={usc(styles, ["dataText"])}>tripulantes</div>
                                        </div>
                                        <div className={usc(styles, ["data"])}>
                                            <div className={usc(styles, ["dataNumber"])}>80</div>
                                            <div className={usc(styles, ["dataText"])}>viajes</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={usb(["row"])}>
                                <div className={usb(["col-12"])}>
                                    <div className={usc(styles, ["botData"])} >
                                        <div className={usc(styles, ["data"])}>
                                            <div className={usc(styles, ["dataNumber"])}>5</div>
                                            <div className={usc(styles, ["dataText"])}>años viajando</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={usb(["row"])}>
                                <div className={usb(["col-12", "m-auto"])}>
                                    <div className={usc(styles, ["text", "botText"])}>
                                        <p>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam dui arcu, elementum tortor ut, fringilla finibus ex.
                                        </p>
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
export default BoatsMobile