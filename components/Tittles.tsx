import React, { CSSProperties } from 'react';
import { usc, usb, usw } from '../utils/helpers';
import styles from '../styles/tittles.module.scss'


type TittleProp = {
    tittle: string,
    styling?: React.CSSProperties
}

const Tittles = ({ tittle, styling }: TittleProp) => {
    return (
        <div style={styling} className={usc(styles, ["exterior"])}>
            <div  className={usc(styles, ["tittleContainer"])}>
                <div className={usc(styles, ["content"])} >
                    <p>
                        {tittle}
                    </p>
                </div>
            </div>
        </div>
    )

}

export default Tittles
