import React, { useState } from "react";
import { usb, usw, usc } from '../utils/helpers';
import styles from '../styles/slider.module.scss';
import Glide from '@glidejs/glide'

const Slider = () => {
    const glide = new Glide('#options-type', {
        type: "carousel",
        focusAt: 'center',
        perView: 3,
        startAt: 1,
        autoplay: false
    })
    return (
        <>


            <div className={usw(styles, ["sliderModule"], ["container-fluid"])}>
                <div className={usb(["container"])}>
                    <div className={usb(["row"])}>
                        <div className={usb(["col-12"])}>
                            <div className="glide-contain mutiple">
                                <h1>experiencias</h1>


                                <div className="glider-prev">PREV</div>

                                <div className="glider">
                                    <figure>
                                        <blockquote>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, id!</blockquote>
                                        <figcaption>Jane Doe</figcaption>
                                    </figure>
                                    <figure>
                                        <blockquote>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, id!</blockquote>
                                        <figcaption>Jane Doe</figcaption>
                                    </figure>
                                    <figure>
                                        <blockquote>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, id!</blockquote>
                                        <figcaption>Jane Doe</figcaption>
                                    </figure>
                                    <figure>
                                        <blockquote>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, id!</blockquote>
                                        <figcaption>Jane Doe</figcaption>
                                    </figure>
                                    <figure>
                                        <blockquote>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, id!</blockquote>
                                        <figcaption>Jane Doe</figcaption>
                                    </figure>
                                </div>
                                <div className="glider-next">NEXT</div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}


export default Slider