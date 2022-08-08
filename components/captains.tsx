import React from 'react';
import { usc, usb, usw } from '../utils/helpers';
import styles from '../styles/captains.module.scss';
import Tittles from './Tittles';
import Slider from './Slider';

const Captains = () => {
    return (
        <>
            <div className={usw(styles, ["captainsModule"], ["container-fluid"])}>
                <div className={usb(["container", "m-auto"])} >
                    <div className={usb(["row"])}>
                        <div className={usb(["col-12"])}>
                            <div className={usb(["row"])}>
                                <div className={usw(styles, ["colContainer"], ["col-12"])} >
                                    <div className={usc(styles, ["textContainer"])}>
                                        <p className={usc(styles, ["name"])}>
                                          ignacio peralta
                                        </p>
                                        <p className={usc(styles, ["tittle"])}>
                                            capitan
                                        </p>
                                        <p className={usc(styles,["paragraph"])}>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                            sed do eiusmod tempor incididunt ut labore et dolore
                                            magna aliqua.
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
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Captains
