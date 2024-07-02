import React, { useState } from 'react';
import { usb, usc, usw } from "../utils/helpers";
import styles from '../styles/Footer.module.scss';

export default function BasicForm() {


    return (
        <div className={usw(styles, ["info"], ["container-fluid", "p-0"])} >
            <div className={usw(styles, ["parentInfo"], ["row", "p-0"])} >
                <div className={usw(styles, ["texts"], ["col-md-3 col-12", "p-0"])} >
                    <div className={usw(styles, ["text"], [""])} >Ninos company</div>
                    <div className={usw(styles, ["text"], [""])} >Castellammare del golfo, Italy</div>
                    <div className={usw(styles, ["text"], [""])} >Via Gazzeti 76</div>
                    <div className={usw(styles, ["text"], [""])} >All rights reserved  @ 2024</div>
                </div>
                <div className={usw(styles, ["texts"], ["col-md-3 col-12"])} >
                    <div className={usw(styles, ["text"], [""])} >Ninos company</div>
                    <div className={usw(styles, ["text"], [""])} >Castellammare del golfo, Italy</div>
                    <div className={usw(styles, ["text"], [""])} >Via Gazzeti 76</div>
                    <div className={usw(styles, ["text"], [""])} >All rights reserved  @ 2024</div>
                </div>
                <div className={usw(styles, ["icons"], ["col-md-6 col-12", "p-0"])} >
                    <div className={usw(styles, ["icon", "wtsp"], [""])} ></div>
                    <div className={usw(styles, ["icon", "ig"], [""])} ></div>
                    <div className={usw(styles, ["icon", "maps"], [""])} ></div>
                </div>
            </div>
        </div>
    )
} 