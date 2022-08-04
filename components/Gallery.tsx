import React from 'react';
//@ts-ignore
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry"
import { usb, usc, usw } from '../utils/helpers';
import styles from '../styles/gallery.module.scss';

const items = [
  "./images/gallery/2.jpg",
  "./images/gallery/3.jpg",
  "./images/gallery/4.jpg",
  "./images/gallery/11.jpg",
  "./images/gallery/5.jpg",
  "./images/gallery/6.jpg",
  "./images/gallery/7.jpg",
  "./images/gallery/9.jpg",
  "./images/gallery/10.jpg",
  "./images/gallery/1.jpg",
  "./images/gallery/8.jpg",
  "./images/gallery/12.jpg",
  "./images/gallery/13.jpg",
  "./images/gallery/14.jpg",
  "./images/gallery/15.jpg",
]
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
                {items.map((i) => (<img src={i} key={`image-${i}`} alt="pic goes here" />))}
              </Masonry>
            </ResponsiveMasonry>
          </div>
        </div>
      </div>


    </div>
  )
}

export default Gallery