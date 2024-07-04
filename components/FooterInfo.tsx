import React, { useState } from 'react';
import { usb, usc, usw } from "../utils/helpers";
import styles from '../styles/Footer.module.scss';


export default function BasicForm() {

    const information = {
        cellphones: {
            texts: ["389 047 5539 - Antonino", "389 292 6143 - Bruno"],
            icon: "wtsp"
        },
        ig: {
            texts: ["@s.luciapescaturismo"],
            icon: "ig"
        },
        location: {
            texts: ["Porto di Castellammare, fronte all Restaurante Luxor"],
            icon: "location"
        },
        mail: {
            texts: ["s.luciapescatursmo@gmail.com"],
            icon: "mail"
        },
        rights: {
            texts: "All rights reserved @ 2024 - SANTA LUCIA TOUR"
        }
    }

    return (
        <div className={usw(styles, ["info"], ["container-fluid", "p-0"])} >
            <div className={usw(styles, ["parentInfo"], ["row", "p-0"])} >

                <div className={usw(styles, ["texts"], ["col-md-3 col-12"])} >
                    <DataItem texts={information.cellphones.texts} icon={information.cellphones.icon} />
                    <DataItem texts={information.ig.texts} icon={information.ig.icon} />

                </div>

                <div className={usw(styles, ["texts"], ["col-md-3 col-12"])} >
                    <DataItem texts={information.location.texts} icon={information.location.icon} />
                    <DataItem texts={information.mail.texts} icon={information.mail.icon} />

                </div>

                <div className={usw(styles, ["icons"], ["col-md-6 col-12"])} >
                    <div className={usw(styles, ["icon", "wtsp"], [""])} ></div>
                    <div className={usw(styles, ["icon", "ig"], [""])} ></div>
                    <div className={usw(styles, ["icon", "maps"], [""])} ></div>
                </div>

            </div>
            <div className={usw(styles, ["rights"], ["row", "p-0"])} >
                <div className={usw(styles, [""], ["col-12"])} >
                    {information.rights.texts}
                </div>
            </div>

        </div>
    )
}


const DataItem = ({ texts, icon }: { texts: string[], icon: string }) => {
    return (
        <div className={usc(styles, ["sign"])}>
            <div className={usc(styles, ["icon", icon])}></div>
            <div>
                {texts.map((text: string, index: number) => {
                    return (
                        <div className={usc(styles, ["text"])} key={index}>{text}</div>
                    )
                })}
            </div>
        </div>
    )
}