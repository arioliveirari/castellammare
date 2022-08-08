import React from 'react';
//@ts-ignore
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry"
import { usb, usc, usw } from '../utils/helpers';
import styles from '../styles/gallery.module.scss';
import Glide from '@glidejs/glide'
import Tittles from './Tittles';



const Gallery = () => {

  React.useEffect(() => {
    const glide = new Glide('.glide', {
      type: "slider",
      focusAt: 'center',
      perView: 1,
      startAt: 1,
    }).mount();
  }, [])


  const items = [
    "./images/gallery/8.jpg",
    "./images/gallery/15.jpg",
    "./images/gallery/11.jpg",
    "./images/gallery/16.jpg",
    "./images/gallery/2.jpg",
    "./images/gallery/3.jpg",
    "./images/gallery/4.jpg",
    "./images/gallery/5.jpg",
    "./images/gallery/6.jpg",
    "./images/gallery/7.jpg",
    "./images/gallery/9.jpg",
    "./images/gallery/10.jpg",
    "./images/gallery/1.jpg",
    "./images/gallery/12.jpg",
    "./images/gallery/13.jpg",

  ]

  return (
    <>
      <div className={usw(styles, ["gallery"], ["container-fluid"])}>
        <Tittles tittle='galeria' />
        <div className={usw(styles, [], ["container"])}>
          <div className={usb(["row"])}>
            <div className={usb(["col-12"])}>
              <div className={usc(styles, ["galleryContainer"])}>
                <ResponsiveMasonry

                  columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}
                >
                  <Masonry columnsCount={3}
                    gutter={"10px"}>
                    {items.map((i) => (<img src={i} key={`image-${i}`} className={usc(styles, ["image"])} alt="pic goes here" />))}
                  </Masonry>
                </ResponsiveMasonry>
              </div>
              <div className="glide" id="options-type">
                <div className="glide__track" data-glide-el="track">
                  <ul className="glide__slides">
                    {items.map((i, index) => (<img src={i} key={`image-${i}`} className={usc(styles, ["sliderImage"])} alt="pic goes here" />))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Gallery