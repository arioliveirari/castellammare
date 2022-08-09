import React, { useEffect, useState } from 'react';
import { usb, usc, usw } from "../utils/helpers";
import styles from '../styles/boats.module.scss';
import Tittles from './Tittles';
import Slider from './Slider';

const Boats = () => {
    return (
        <>
            <div className={usw(styles, ["boatsModule"], ["container-fluid "])}>
                <div className={usb(["container", "m-auto"])}>
                    <div className={usw(styles, ["topContent"], ["row"])}>
                        <div className={usb(["col-md-7", "col-12"])}>
                            <div className={usc(styles, ["boatData"])}>
                                <p className={usc(styles, ["boatName"])}>
                                    Velero modelo gtx
                                </p>
                            </div>
                            <div className={usc(styles, ["pic"])}>
                            </div>
                        </div>
                        <div className={usb(["col-md-5", "col-12"])}>
                            <div className={usc(styles, ["dataContainer"])}>
                                <div className={usc(styles, ["boatData"])}>
                                    <p className={usc(styles, ["boatNumber", "darkishBlue"])}>5</p>
                                    <p className={usc(styles, ["boatText", "darkishBlue"])}>Años Navegando</p>
                                </div>
                                <div className={usc(styles, ["boatData"])}>
                                    <p className={usc(styles, ["boatNumber"])}>80</p>
                                    <p className={usc(styles, ["boatText"])}>Viajes</p>
                                </div>
                                <div className={usc(styles, ["boatData"])}>
                                    <p className={usc(styles, ["boatNumber", "darkishBlue"])}>5</p>
                                    <p className={usc(styles, ["boatText", "darkishBlue"])}>tripualentes</p>
                                </div>
                                <div className={usc(styles, ["boatData"])}>
                                    <p className={usc(styles, ["boatNumber", "darkishBlue"])}>5</p>
                                    <p className={usc(styles, ["boatText", "darkishBlue"])}>Años Navegando</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={usw(styles, ["botContent"], ["row"])}>
                        <div className={usb(["col-md-7", "col-12"])}>
                            <div className={usc(styles, ["botPic"])}>
                            </div>
                            <div className={usc(styles, ["boatData"])}>
                                <p className={usc(styles, ["boatName"])}>
                                   Velero Modelo GTX
                                </p>
                            </div>
                        </div>
                        <div className={usb(["col-md-5", "col-12"])}>
                            <div className={usc(styles, ["dataContainer"])}>
                                <div className={usc(styles, ["boatData"])}>
                                    <p className={usc(styles, ["boatNumber", "darkishBlue"])}>5</p>
                                    <p className={usc(styles, ["boatText", "darkishBlue"])}>Años Navegando</p>
                                </div>
                                <div className={usc(styles, ["boatData"])}>
                                    <p className={usc(styles, ["boatNumber"])}>80</p>
                                    <p className={usc(styles, ["boatText"])}>Viajes</p>
                                </div>
                                <div className={usc(styles, ["boatData"])}>
                                    <p className={usc(styles, ["boatNumber", "darkishBlue"])}>4</p>
                                    <p className={usc(styles, ["boatText", "darkishBlue"])}>tripualentes</p>
                                </div>
                                <div className={usc(styles, ["boatData"])}>
                                    <p className={usc(styles, ["boatNumber", "darkishBlue"])}>5</p>
                                    <p className={usc(styles, ["boatText", "darkishBlue"])}>Años Navegando</p>
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