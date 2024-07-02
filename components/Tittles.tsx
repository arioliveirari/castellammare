import React, { CSSProperties } from 'react';
import { usc, usb, usw } from '../utils/helpers';
import styles from '../styles/tittles.module.scss'


type TittleProp = {
    tittle: string,
    styling?: React.CSSProperties
}

const Tittles = ({ tittle, styling }: TittleProp) => {
    return (
        <div style={styling} className={usw(styles, ["exterior"], ["container-fluid"])}>
            <div className={usb(["container"])} >
                <div className={usb(["row"])} >
                    <div className={usw(styles,["rowContainer"],["col-12", "p-0"])} >
                        <div className={usw(styles, ["tittleContainer"],[""])}>
                            <div className={usc(styles, ["content"])} >
                                <p>
                                    {tittle}
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
