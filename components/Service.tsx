import React from 'react';
import { usc, usb, usw } from '../utils/helpers';
import styles from '../styles/service.module.scss';
import { text } from 'stream/consumers';



type Prop = {
    text: string;
    tittle: string;
    pic: string
}

const Service = (props: Prop) => {
    return (

        <div className={usw(styles, ["service"], ["container-fluid"])} >
            <div className={usb(["container"])} >
                <div className={usb(["row"])} >
                    <div className={usb(["col-md-6", "col-12"])}>
                        <p className={usc(styles, ["tittle"])} >
                            {props.tittle}
                        </p>
                        <p className={usc(styles, ["text"])} >
                            {props.text}
                        </p>
                    </div>
                    <div className={usb(["col-md-6", "col-12"])}>
                        <img src={props.pic} alt="pic goes here" />
                    </div>
                </div>
            </div>
        </div>
    )


}

export default Service