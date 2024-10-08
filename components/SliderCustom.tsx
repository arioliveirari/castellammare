import React, { useState } from "react";
import { usb, usw, usc } from '../utils/helpers';
import styles from '../styles/kiwiSlider.module.scss';
import Glide from '@glidejs/glide';


const items = [
    { url: "/bruno/image1.jpeg", objectfit: "objectFit:cover", objectPosition: "center" },
    { url: "/bruno/image2.jpeg", objectfit: "objectFit:cover", objectPosition: "center" },
    { url: "/bruno/image3.jpeg", objectfit: "objectFit:cover", objectPosition: "center" },
    
]
const SliderCustom = () => {

    React.useEffect(() => {
        const glide = new Glide('#kiwi-slider', {
            type: 'carousel',
            startAt: 0,
            perView: 3,
            gap: 30,
            focusAt: 0,
            // autoplay: 3000,
            breakpoints: {
                1200: {
                    perView: 2,
                },
                550: {
                    perView: 1,
                }
            },
            swipeThreshold: 80,
        }).mount();
    }, [])


    return (
        <div className={usw(styles, ["customSlider"], ["container-fluid", "m-0", "p-0"])}>
            <div>
                <div className="glide" id="kiwi-slider">
                    <div className="glide__track" data-glide-el="track">

                        <ul className="glide__slides">
                            {items.map((i) => (<img src={i.url} key={`image-${i}`} className={usc(styles, ["image"])} alt="" />))}
                        </ul>

                        <div className="controls">

                            <div className={usc(styles, ["glide__arrows", "left"])} data-glide-el="controls">
                                <div className={usc(styles, ["controlButton"])} data-glide-dir="<">
                                    <span className="icon-chevron_left"></span>
                                </div>
                            </div>

                            <div className={usc(styles, ["glide__bullets"])} data-glide-el="controls[nav]">
                                {items.map((i, index) => (<button key={`${index}`} className="glide__bullet" data-glide-dir={`=${index}`}></button>))}
                            </div>

                            <div className={usc(styles, ["glide__arrows", "right"])} data-glide-el="controls">
                                <div className={usc(styles, ["controlButton"])} data-glide-dir=">"><span className="icon-chevron_right"></span></div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default SliderCustom