import React from 'react';
import { usc, usb, usw } from '../utils/helpers';
import styles from '../styles/service.module.scss';
import { text } from 'stream/consumers';



type Prop = {
    paragraph: string;
    tittle: string;
    pic: string
}

const Service = (props: Prop) => {
    return (

        <div className={usw(styles, ["service"], ["container-fluid"])} >
            <div className={usb(["container"])} >
                <div className={usb(["row"])}>
                    <div className={usc(styles,["serviceContainer"])} >
                        <div className={usb(["col-md-6", "col-12"])} >
                            <div className={usc(styles,["text"])}>
                                <p className={usc(styles,["tittle"])} >
                                    {props.tittle}
                                </p>
                                <p className={usc(styles,["paragraph"])} >
                                    {props.paragraph}
                                </p>
                            </div>
                        </div>
                        <div className={usb(["col-md-6", "col-12"])} >
                            <div className={usc(styles,["image"])}>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )


}

export default Service