import React from "react";
import styles from '../styles/coast.module.scss';
import { usb, usc, usw } from "../utils/helpers";
const Coast = () => {
    return (

        <div className={usc(styles, ["coastContainer"])}>
            <div className={usc(styles, ["coast"])}></div>
        </div>
    )
}

export default Coast