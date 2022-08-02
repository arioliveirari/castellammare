import React from 'react';
import { usc, usb, usw } from '../utils/helpers';
import styles from '../styles/captains.module.scss';
import Tittles from './Tittles';

const Captains = () => {
    return (
        <>


            <Tittles tittle='Capitanes' />
            <div className={usw(styles, ["captains"], ["container-fluid"])} >
                <div className={usb(["container", "m-auto"])}>
                    <div className={usb(["row"])}>
                        <div className={usb(["col-md-11", "col-12"])}>
                            <div className={usb(["row"])}>
                                <div className={usb(["col-md-6", "col-12"])}>
                                    <div className={usc(styles, ["left"])}>
                                        <div className={usc(styles, ["textContainer"])}>
                                            <div className={usc(styles, ["nameContainer"])}>
                                                <p className={usc(styles,["name"])}>
                                                    Joaquina gonzalez
                                                </p>
                                                <p className={usc(styles,["nameSubtittle"])}>
                                                    creadora de contenido
                                                </p>
                                            </div>
                                            <div className={usc(styles, ["dataContainer"])}>
                                                <p>
                                                    50
                                                </p>
                                                <p>
                                                    12
                                                </p>
                                                <p>
                                                    14
                                                </p>
                                            </div>
                                            <div className={usc(styles, ["dataContainer"])}>
                                                <p>
                                                    viajes
                                                </p>
                                                <p>
                                                    años navegando
                                                </p>
                                                <p>
                                                    viajes
                                                </p>
                                            </div>
                                        </div>
                                        <div className={usc(styles,["image"])}>
                                        </div>
                                    </div>
                                </div>
                                <div className={usb(["col-md-6", "col-12"])}>
                                <div className={usc(styles, ["rigth"])}>
                                        <div className={usc(styles,["image"])}>
                                        </div>
                                        <div className={usc(styles, ["textContainer"])}>
                                            <div className={usc(styles, ["nameContainer"])}>
                                                <p className={usc(styles,["name"])}>
                                                    Joaquina gonzalez
                                                </p>
                                                <p className={usc(styles,["nameSubtittle"])}>
                                                    creadora de contenido
                                                </p>
                                            </div>
                                            <div className={usc(styles, ["dataContainer"])}>
                                                <p>
                                                    50
                                                </p>
                                                <p>
                                                    12
                                                </p>
                                                <p>
                                                    14
                                                </p>
                                            </div>
                                            <div className={usc(styles, ["dataContainer"])}>
                                                <p>
                                                    viajes
                                                </p>
                                                <p>
                                                    años navegando
                                                </p>
                                                <p>
                                                    viajes
                                                </p>
                                            </div>
                                        </div>
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
export default Captains