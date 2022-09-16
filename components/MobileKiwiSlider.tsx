import React, { useState } from "react";
import { usb, usw, usc } from '../utils/helpers';
import styles from '../styles/mobileKiwiSlider.module.scss';
import Glide from '@glidejs/glide'

const items = [
    { url: "/images/barco_1_01.jpeg", objectfit: "objectFit:cover", objectPosition: "center" },
    { url: "/images/barco_1_02.jpeg", objectfit: "objectFit:cover", objectPosition: "center" },
    { url: "/images/barco_1_03.jpeg", objectfit: "objectFit:cover", objectPosition: "center" },
    { url: "/images/barco_1_04.jpeg", objectfit: "objectFit:cover", objectPosition: "center" },
    { url: "/images/barco_1_05.jpeg", objectfit: "objectFit:cover", objectPosition: "center" }
]
const MobileKiwiSlider = () => {
    React.useEffect(() => {
        const glide = new Glide('#mobileKiwi-slider', {
            type: "slider",
            focusAt: 'center',
            perView: 1,
            startAt: 0,
            gap: 0,


        }).mount();
    }, [])

    return (
        <div className={usw(styles, ["mangoSliderMocule"], ["container-fluid", "p-0"])}>
            <div>
                <div className="glide" id="mobileKiwi-slider">
                    <div className="glide__track" data-glide-el="track">
                        <ul className="glide__slides">
                            {items.map((i) => (<img src={i.url} key={`image-${i}`} className={usc(styles, ["image"])} alt="pic goes here" />))}
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
export default MobileKiwiSlider