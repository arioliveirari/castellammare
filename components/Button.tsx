import React from "react";
import { usc, usb, usw } from '../utils/helpers';
import styles from '../styles/button.module.scss';

const Button = () => {
    return (
        <div className={usc(styles, ["reservar"])} >
            <a href="#" >Reservar</a>
        </div>
    )
}

export default Button