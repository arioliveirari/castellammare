import React from 'react';
import { usc, usb, usw } from '../utils/helpers';
import styles from '../styles/captains.module.scss';
import Tittles from './Tittles';

const Captains = () => {
    return (
        <>
            <div className={usw(styles, ["captainsModule"], ["container-fluid"])}>
                <Tittles tittle='Capitanes' />
                <div className={usb(["container", "m-auto"])} >
                    <div className={usb(["row"])}>
                        <div className={usb(["col-12"])}>
                            <div className={usb(["row"])}>
                                <div className={usw(styles, ["colContainer"], ["col-md-6", "col-12"])} >
                                    <div className={usc(styles, ["textContainer"])}>
                                        <p className={usc(styles, ["name"])}>
                                            joaquina gonzalez
                                        </p>
                                        <p className={usc(styles, ["tittle"])}>
                                            creadora de contenido
                                        </p>
                                        <div className={usc(styles, ["dataContainer"])}>
                                            <div className={usc(styles, ["data"])}>
                                                <p className={usc(styles, ["dataNumber"])}>50</p>
                                                <p className={usc(styles, ["dataText"])}>viajes</p>
                                            </div>
                                            <div className={usc(styles, ["data"])}>
                                                <p className={usc(styles, ["dataNumber"])}>12</p>
                                                <p className={usc(styles, ["dataText"])}>años navegando</p>
                                            </div>
                                            <div className={usc(styles, ["data"])}>
                                                <p className={usc(styles, ["dataNumber"])}>14</p>
                                                <p className={usc(styles, ["dataText"])}>viajes</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className={usc(styles, ["picContainer"])}>

                                    </div>
                                </div>
                                <div className={usw(styles, ["colContainer"], ["col-md-6", "col-12"])} >
                                    <div className={usc(styles, ["picContainer", "rigthPicContainer"])} />
                                    <div className={usc(styles, ["textContainer", "rigthText"])}>
                                        <p className={usc(styles, ["name"])}>
                                            joaquina gonzalez
                                        </p>
                                        <p className={usc(styles, ["tittle"])}>
                                            creadora de contenido
                                        </p>
                                        <div className={usc(styles, ["dataContainer", "rigthData"])}>
                                            <div className={usc(styles, ["data"])}>
                                                <p className={usc(styles, ["dataNumber"])}>50</p>
                                                <p className={usc(styles, ["dataText"])}>viajes</p>
                                            </div>
                                            <div className={usc(styles, ["data"])}>
                                                <p className={usc(styles, ["dataNumber"])}>12</p>
                                                <p className={usc(styles, ["dataText"])}>años navegando</p>
                                            </div>
                                            <div className={usc(styles, ["data"])}>
                                                <p className={usc(styles, ["dataNumber"])}>14</p>
                                                <p className={usc(styles, ["dataText"])}>viajes</p>
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
