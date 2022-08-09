import React, { useEffect, useState } from 'react';
import { usb, usc, usw } from "../utils/helpers";
import styles from '../styles/boats.module.scss';

const Boats = () => {
    return (
        <>
            <div className={usw(styles, ["boatsModule"], ["container-fluid "])}>
                <div className={usb(["container", "m-auto"])}>
                    <div className={usw(styles, ["topContent"], ["row"])}>
                        <div className={usb(["col-md-7", "col-12"])}>
                            <div className={usc(styles, ["boatData"])}>

                            </div>
                            <div className={usc(styles, ["pic"])}>
                            </div>
                        </div>
                        <div className={usb(["col-md-5", "col-12"])}>
                            <div className={usc(styles, ["dataContainer"])}>
                                <p className={usc(styles, ["boatName"])}>
                                    Velero modelo gtx
                                </p>
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
                                    <p className={usc(styles, ["boatText"])}>tripualentes</p>
                                </div>
                                <div className={usc(styles, ["boatData"])}>
                                    <p className={usc(styles, ["boatNumber"])}>5</p>
                                    <p className={usc(styles, ["boatText"])}>Años Navegando</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={usw(styles, ["botContent"], ["row"])}>
                        <div className={usb(["col-md-7", "col-12"])}>
                            <div className={usc(styles, ["botPic"])}>
                            </div>
                            <div className={usc(styles, ["boatData"])}>

                            </div>
                        </div>
                        <div className={usb(["col-md-5", "col-12"])}>
                            <div className={usc(styles, ["dataContainer"])}>
                                <p className={usc(styles, ["boatName"])}>
                                    Velero Modelo GTX
                                </p>
                                <div className={usc(styles, ["boatData"])}>
                                    <p className={usc(styles, ["boatNumber"])}>5</p>
                                    <p className={usc(styles, ["boatText"])}>Años Navegando</p>
                                </div>
                                <div className={usc(styles, ["boatData"])}>
                                    <p className={usc(styles, ["boatNumber"])}>80</p>
                                    <p className={usc(styles, ["boatText"])}>Viajes</p>
                                </div>
                                <div className={usc(styles, ["boatData"])}>
                                    <p className={usc(styles, ["boatNumber"])}>4</p>
                                    <p className={usc(styles, ["boatText"])}>tripualentes</p>
                                </div>
                                <div className={usc(styles, ["boatData"])}>
                                    <p className={usc(styles, ["boatNumber"])}>5</p>
                                    <p className={usc(styles, ["boatText"])}>Años Navegando</p>
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