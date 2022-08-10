import React from 'react';
import { usc, usb, usw } from '../utils/helpers';
import styles from '../styles/BoatSlide.module.scss'

export type props = {
    src: string,
}

const BoatsSlide = ({ src }: props) => {
    return (
        <div className={usc(styles, ["slideContainer"])}>
            <div className={usc(styles, ["picContainer"])}>
                <img src={src} alt="pic's running late" />
            </div>
            <div >

            </div>
        </div>

    )
}
export default BoatsSlide