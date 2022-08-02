import React from 'react';
import { usc, usb, usw } from '../utils/helpers';
import styles from '../styles/captains.module.scss';
import Tittles from './Tittles';

const Captains = () => {
    return (
        <>


            <Tittles tittle='Capitanes' />
            <div className={usw(styles, ["captains"], ["container-fluid"])} >
                <div className={usb(["container"])} >
                    <div className={usw(styles, ['captainsContainer'], ["row"])}>
                        <div className={usw(styles,["colContainer", "left"],["col-md-6", "col-12"])} >
                            <div className={usc(styles, ["content"])}>
                                <div className={usc(styles, ["textContainer"])}>
                                    <p className={usc(styles, ["tittle"])}>
                                        Joaquina gonzalez
                                    </p>
                                    <p className={usc(styles, ["paragraph"])}>
                                        Creadora de contenido
                                    </p>
                                </div>
                                <div className={usc(styles, ["dataContainer"])}>
                                    <p className={usc(styles, ["data"])}> 50 <br /> viajes </p>
                                    <p className={usc(styles, ["data"])}> 12 <br /> años navegando </p>
                                    <p className={usc(styles, ["data"])}> 14 <br /> viajes </p>
                                </div>
                            </div>
                            <div className={usc(styles, ["picContainer"])}>
                                <div className={usc(styles,["pic"])}>

                                </div>
                            </div>
                        </div>
                        <div className={usw(styles,["colContainer", "rigth"],["col-md-6", "col-12"])} >
                            <div className={usc(styles, ["picContainer"])}>
                                <div className={usc(styles,["pic"])}>

                                </div>
                            </div>
                            <div className={usc(styles, ["content"])}>
                                <div className={usc(styles, ["textContainer"])}>
                                    <p className={usc(styles, ["tittle"])}>
                                        Joaquina gonzalez
                                    </p>
                                    <p className={usc(styles, ["paragraph"])}>
                                        Creadora de contenido
                                    </p>
                                </div>
                                <div className={usc(styles, ["dataContainer"])}>
                                    <p className={usc(styles, ["data"])}> 50 <br /> viajes </p>
                                    <p className={usc(styles, ["data"])}> 12 <br /> años navegando </p>
                                    <p className={usc(styles, ["data"])}> 14 <br /> viajes </p>
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