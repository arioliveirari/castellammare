import React, { useState } from 'react';
import { usb, usc, usw } from "../utils/helpers";
import styles from '../styles/Footer.module.scss';

export default function BasicForm() {


    return (
        <div className={usw(styles, ["info"], ["container-fluid"])} >
            <div className={usw(styles, ["parentInfo"], ["row"])} >
                <div className={usw(styles, ["texts"], ["col-7"])} >
                    <div className={usw(styles, ["text"], [""])} >NOMBRE EMPRESA</div>
                    <div className={usw(styles, ["text"], [""])} >DIRECCIÖN</div>
                    <div className={usw(styles, ["text"], [""])} >NOMBRE EMPRESA</div>
                    <div className={usw(styles, ["text"], [""])} >NOMBRE EMPRESA</div>
                </div>
                <div className={usw(styles, ["icons"], ["col-5"])} >
                    <div className={usw(styles, ["icon", "wtsp"], [""])} ></div>
                    <div className={usw(styles, ["icon", "ig"], [""])} ></div>
                    <div className={usw(styles, ["icon", "maps"], [""])} ></div>
                </div>
            </div>
        </div>
    )
}