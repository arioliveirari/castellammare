import React, { useState } from "react";
import { usb, usw, usc } from '../utils/helpers';
import styles from '../styles/slider.module.scss';
import Glide from '@glidejs/glide'
import Slide from "./Slide";
import BoatsSlide from "./BoatSlide";


const items = [
    "./images/mango.jpg",
    "./images/mango.jpg",
    "./images/mango.jpg",
    "./images/mango.jpg"
]
const MangoSlider = () => {
    React.useEffect(() => {
        const glide = new Glide('#mango-slider', {
            type: "slider",
            focusAt: 'center',
            perView: 3.2,
            startAt: 0,
            gap: 140,
            breakpoints: {
                1440: {
                    perView: 3.2,
                    gap: 50
                },
                1024: {
                    perView: 2.2,
                    gap: 30
                },
                768: {
                    perView: 2.2,
                    gap: 30
                },
                425: {
                    perView: 1.4,
                    gap: 25
                },

                320: {
                    perView: 1.3,
                    gap: 20
                }
            }

        }).mount();
    }, [])





    return (
        <div className="glide" id="mango-slider">
            <div className="glide__track" data-glide-el="track">
                <ul className="glide__slides">
                    {items.map((i) => (<img src={i} key={`image-${i}`} className={usc(styles, ["image"])} alt="pic goes here" />))}
                </ul>
                <div className="controls">
                    <div className="glide__arrows" data-glide-el="controls">
                        <div className="controlButton" data-glide-dir="<"><span className="icon-chevron_left"></span></div>
                    </div>
                    <div className="glide__bullets" data-glide-el="controls[nav]">
                        {items.map((i, index) => (<button key={`${index}`} className="glide__bullet" data-glide-dir={`=${index}`}></button>))}
                    </div>
                    <div className="glide__arrows" data-glide-el="controls">
                        <div className="controlButton" data-glide-dir=">"><span className="icon-chevron_right"></span></div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default MangoSlider