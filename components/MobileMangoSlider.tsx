import React, { useState } from "react";
import { usb, usw, usc } from '../utils/helpers';
import styles from '../styles/mobileMangoSlider.module.scss';
import Glide from '@glidejs/glide'

const items = [
    "/images/barco_2_01.jpeg",
    "/images/barco_2_02.jpeg",
    "/images/barco_2_03.jpeg",
    "/images/barco_2_04.jpeg",
    "/images/barco_2_05.jpeg"
]
const MobileMangoSlider = () => {
    React.useEffect(() => {
        const glide = new Glide('#mobileMango-slider', {
            type: "slider",
            focusAt: 'center',
            perView: 1,
            startAt: 0,
            gap: 0,
           

        }).mount();
    }, [])

    return (
        <div  className={usw(styles,["mangoSliderMocule"],["container-fluid", "p-0"])}>
            <div>
                <div className="glide" id="mobileMango-slider">
                    <div className="glide__track" data-glide-el="track">
                        <ul className="glide__slides">
                            {items.map((i) => (<img src={i} key={`image-${i}`} className={usc(styles, ["image"])} alt="pic goes here" />))}
                        </ul>
                        <div className="controls">
                            <div className="glide__arrows" data-glide-el="controls">
                                <div className="controlButton" data-glide-dir="<"><span className="icon-chevron_left"></span></div>
                            </div>
                            
                            <div className="glide__arrows" data-glide-el="controls">
                                <div className="controlButton" data-glide-dir=">"><span className="icon-chevron_right"></span></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default MobileMangoSlider