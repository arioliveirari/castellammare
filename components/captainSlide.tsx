import React from 'react';
import { usc, usb, usw } from '../utils/helpers';
import styles from '../styles/slide.module.scss'




const captainSlide = ({ person, algo }: SlideExampleType) => {
    return (
        <div className={"glide__slide " + usw(styles, ["slide"], [])}>
            <div className={usb(["m-auto"])}>
                <div className={usb(["row"])}>
                    <div className={usb(["col-12"])}>
                        <div className={usc(styles, ["slideContainer"])}>
                            <div className={usc(styles, ["textContainer"])}>
                                <div className={usc(styles,["pic"])}>
                                </div>
                            </div>
                            <div className={usc(styles, ["personContainer"])}>
                                <div className={usc(styles, ["pic"])}></div>
                                <div>
                                    <p className={usc(styles, ["captain"])}>
                                        {person}
                                        <br />
                                        {algo}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}