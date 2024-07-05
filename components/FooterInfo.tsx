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
            callBack: ()=>{
                window.open('https://wa.me/541136582427', '_blank')
            }
        },
        ig: {
            texts: ["@s.luciapescaturismo"],
            icon: "ig",
            callBack: ()=>{
                window.open('https://www.instagram.com/s._lucia_pescaturismo?igsh=MWc0NWxmMGpvcjVsbQ==', '_blank')
            }
        },
        location: {
            texts: ["Porto di Castellammare, fronte all Restaurante Luxor"],
            icon: "location",
            callBack: ()=>{
                window.open('https://google.com', '_blank')
            }
        },
        mail: {
            texts: ["s.luciapescatursmo@gmail.com"],
            icon: "mail",
            callBack: ()=>{
                window.open('mailto:oliveiraariel96@gmail.com', '_blank')
            }
        },
        rights: {
            texts: "All rights reserved @ 2024 - SANTA LUCIA TOUR",
        }
    }

    return (
        <div className={usw(styles, ["info"], ["container-fluid", "p-0"])} >
            <div className={usw(styles, ["parentInfo"], ["row", "p-0"])} >

                <div className={usw(styles, ["texts"], ["col-md-6", "col-12"])} >
                    <DataItem texts={information.cellphones.texts} icon={information.cellphones.icon} callBack={information.cellphones.callBack}/>
                    <DataItem texts={information.ig.texts} icon={information.ig.icon} callBack={information.ig.callBack}/>
                    <DataItem texts={information.location.texts} icon={information.location.icon} callBack={information.location.callBack}/>
                    <DataItem texts={information.mail.texts} icon={information.mail.icon} callBack={information.mail.callBack}/>
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


const DataItem = ({ texts, icon, callBack }: { texts: string[], icon: string, callBack?: Function }) => {
    return (
        <div className={usc(styles, ["sign"])} onClick={callBack ? () => callBack() : () => { }}>
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