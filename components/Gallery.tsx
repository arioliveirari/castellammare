import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry"
import { usb, usc, usw } from '../utils/helpers';
import styles from '../styles/gallery.module.scss';


const Gallery = () => {
    return (
        <div className={usw(styles, ["gallery"], ["container-fluid"])}>

            <div className={usb(["container"])}>
                <div className={usb(["row"])}>
                    <div className={usb(["col-12"])}>

                        <ResponsiveMasonry
                            columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}
                        >
                            <Masonry columnsCount={3}
                                gutter={"10px"}>
                                <img src="/images/gallery/2.jpg" alt="pic goes here" />
                                <img src="/images/gallery/3.jpg" alt="pic goes here" />
                                <img src="/images/gallery/4.jpg" alt="pic goes here" />
                                <img src="/images/gallery/11.jpg" alt="pic goes here" />
                                <img src="/images/gallery/5.jpg" alt="pic goes here" />
                                <img src="/images/gallery/6.jpg" alt="pic goes here" />
                                <img src="/images/gallery/7.jpg" alt="pic goes here" />
                                <img src="/images/gallery/9.jpg" alt="pic goes here" />
                                <img src="/images/gallery/10.jpg" alt="pic goes here" />
                                <img src="/images/gallery/1.jpg" alt="pic goes here" />
                                <img src="/images/gallery/8.jpg" alt="pic goes here" />
                                <img src="/images/gallery/12.jpg" alt="pic goes here" />
                                <img src="/images/gallery/13.jpg" alt="pic goes here" />
                                <img src="/images/gallery/14.jpg" alt="pic goes here" />
                                <img src="/images/gallery/15.jpg" alt="pic goes here" />
                               
                            </Masonry>
                        </ResponsiveMasonry>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default Gallery