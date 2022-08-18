import React from 'react';
import { usc, usb, usw } from '../utils/helpers';
import styles from '../styles/tittles.module.scss'


type TittleProp = {
    tittle: string
}

const Tittles = (props: TittleProp) => {
    return (
        <div className={usw(styles,["exterior"],["container-fluid"])}>
            <div className={usb(["container"])} >
                <div className={usb(["row"])} >
                    <div className={usb(["col-md-8", "col-xs-12"])} >
                        <div className={usc(styles, ["tittleContainer"])}>
                            <div className={usc(styles, ["contentent"])} >
                                <p>
                                    {props.tittle}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )

}

export default Tittles
