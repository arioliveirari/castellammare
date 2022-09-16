import React, { CSSProperties, useEffect, useState } from 'react';
import { usb, usc, usw } from "../utils/helpers";
import styles from '../styles/boatsMobile.module.scss';
import { RiveAnimation } from './RiveAnimation';
import MobileKiwiSlider from './MobileKiwiSlider';
import MobileMangoSlider from './MobileMangoSlider';
import Tittles from './Tittles';




const BoatsMobile = () => {
    return (
        <>
           
            <div className={usw(styles, ["boatsMobileModule"], ["container-fluid"])} >
                <Tittles  tittle='Nuestros Veleros' />
                <div className={usb(["col-12"])}>
                    <p className={usw(styles, ["boatName"], [""])}>
                        kiwi
                    </p>
                </div>
                <div className={usb(["row"])}>
                    <div className={usb(["col-12"])}>
                        <MobileKiwiSlider />
                        <div className={usc(styles, ["dataContainer"])}>
                            <div className={usb(["row"])}>
                                <div className={usb(["col-12"])}>
                                    <div className={usc(styles, ["topData"])}>
                                        <div className={usc(styles, ["data"])}>
                                            <div className={usc(styles, ["dataNumber"])}>2,07</div>
                                            <div className={usc(styles, ["dataText"])}>Manga</div>
                                        </div>
                                        <div className={usc(styles, ["data"])}>
                                            <div className={usc(styles, ["dataNumber"])}>5,47</div>
                                            <div className={usc(styles, ["dataText"])}>Eslora</div>
                                        </div>
                                    </div>
                                    <div className={usc(styles, ["botData"])}>
                                        <div className={usc(styles, ["data"])}>
                                            <div className={usc(styles, ["dataText"])}>Modelo Phantom 19</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={usb(["row"])}>
                                <div className={usb(["col-12", "m-auto"])}>
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
                <div className={usb(["col-12", "p-0"])}>
                    <p className={usw(styles, ["boatName"], [""])}>
                        Mango
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
                                            <div className={usc(styles, ["dataNumber"])}>2,58</div>
                                            <div className={usc(styles, ["dataText"])}>Manga</div>
                                        </div>
                                        <div className={usc(styles, ["data"])}>
                                            <div className={usc(styles, ["dataNumber"])}>7,20</div>
                                            <div className={usc(styles, ["dataText"])}>Eslora</div>
                                        </div>
                                    </div>
                                    <div className={usc(styles, ["botData"])}>
                                        <div className={usc(styles, ["data"])}>
                                            <div className={usc(styles, ["dataText"])}>Modelo D´angelo 24</div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className={usb(["row"])}>
                                <div className={usb(["col-12", "m-auto"])}>
                                    <div className={usc(styles, ["text", "botText"])}>
                                        <p>
                                            Diseño del gran German Frers. Un 24 pies amplio, ágil, rápido y muy divertido para salir con amigos y amigas.
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