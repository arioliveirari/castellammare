import React, { useState } from 'react';
import { usb, usc, usw } from "../utils/helpers";
import styles from '../styles/Footer.module.scss';
import { useTranslation } from "react-i18next";

export default function BasicForm() {
    const { t, i18n } = useTranslation();
    const information = {
        cellphones: {
            texts: ["389 047 5539 - Antonino", "389 292 6143 - Bruno"],
            icon: "wtsp",
            callBack: [
                () => {
                    window.open('https://wa.me/393890475539', '_blank')
                },
                () => {
                    window.open('https://wa.me/393892926143', '_blank')
                }]
        },
        ig: {
            texts: ["@s.luciapescaturismo"],
            icon: "ig",
            callBack: [() => {
                window.open('https://www.instagram.com/s._lucia_pescaturismo?igsh=MWc0NWxmMGpvcjVsbQ==', '_blank')
            }]
        },
        location: {
            texts: ["Porto di Castellammare, fronte all Restaurante Luxor"],
            icon: "location",
            callBack: [() => {
                window.open('https://www.google.com/maps/place/S.Lucia+Pescaturismo/@38.0304622,12.8811713,20.39z/data=!4m6!3m5!1s0x131983ff1d90a561:0x2e482072b1fed751!8m2!3d38.0301991!4d12.8812804!16s%2Fg%2F11vwx3y151?entry=ttu', '_blank')
            }]
        },
        mail: {
            texts: ["s.luciapescatursmo@gmail.com"],
            icon: "mail",
            callBack: [() => {
                window.open('mailto:oliveiraariel96@gmail.com', '_blank')
            }]
        },
        rights: {
            texts: "All rights reserved @ 2024 - SANTA LUCIA TOUR",
        }
    }

    return (
        <div className={usw(styles, ["info"], ["container-fluid", "p-0"])} >
            <div className={usw(styles, ["parentInfo"], ["row", "p-0"])} >

                <div className={usw(styles, ["texts"], ["col-md-6", "col-12"])} >
                    <DataItem texts={information.cellphones.texts} icon={information.cellphones.icon} callBack={information.cellphones.callBack} />
                    <DataItem texts={information.ig.texts} icon={information.ig.icon} callBack={information.ig.callBack} />
                    <DataItem texts={information.location.texts} icon={information.location.icon} callBack={information.location.callBack} />
                    <DataItem texts={information.mail.texts} icon={information.mail.icon} callBack={information.mail.callBack} />
                </div>
                {/* 
                <div className={usw(styles, ["texts", "right"], ["col-md-3 col-12"])} >
                    
                </div> */}

                <div className={usw(styles, ["icons"], ["col-md-6", "col-12"])} >
                    <div className={usw(styles, ["rights"], ["col-12"])} >
                        {information.rights.texts}
                    </div>

                    {/* <div className={usw(styles, ["icon", "wtsp"], [""])} ></div>
                    <div className={usw(styles, ["icon", "ig"], [""])} ></div>
                    <div className={usw(styles, ["icon", "maps"], [""])} ></div>
                    <div className={usw(styles, ["icon", "mail"], [""])} ></div> */}
                </div>

            </div>
            {/* <div className={usw(styles, ["rights"], ["row", "p-0"])} >
                <div className={usw(styles, [""], ["col-12"])} >
                </div>
            </div> */}

        </div>
    )
}


const DataItem = ({ texts, icon, callBack }: { texts: string[], icon: string, callBack?: Function[] }) => {
    return (
        <div className={usc(styles, ["sign"])} onClick={callBack?.length === 1 ? () => callBack[0]() : () => { }}>
            <div className={usc(styles, ["icon", icon])}></div>
            <div>
                {texts.map((text: string, index: number) => {
                    return (
                        <div onClick={callBack?.length === 2 ? () => callBack[index]() : () => { }} className={usc(styles, ["text"])} key={index}>{text}</div>
                    )
                })}
            </div>
        </div>
    )
}