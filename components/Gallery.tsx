import React from 'react';
//@ts-ignore
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry"
import { usb, usc, usw } from '../utils/helpers';
import styles from '../styles/gallery.module.scss';
import Glide from '@glidejs/glide'
import Tittles from './Tittles';

const items = [
  "./images/gallery/8.jpg",
  "./images/gallery/15.jpg",
  "./images/gallery/7.jpg",
  "./images/gallery/16.jpg",
  "./images/gallery/2.jpg",
  "./images/gallery/3.jpg",
  "./images/gallery/4.jpg",
  "./images/gallery/5.jpg",
  "./images/gallery/11.jpg",
  "./images/gallery/6.jpg",
  "./images/gallery/9.jpg",
  "./images/gallery/10.jpg",
  "./images/gallery/1.jpg",
  "./images/gallery/12.jpg",
  "./images/gallery/13.jpg",
]


const Gallery = () => {
  const [activeItem, setActiveItem] = React.useState(items[0]);
  React.useEffect(() => {
    const glide = new Glide('#gallery-image-mobile', {
      type: "slider",
      focusAt: 'center',
      perView: 1.8,
      startAt: 0,
      peek: 0,
      gap: 15,
      breakpoints: {
        475: {
          perView: 1.5
        },
        375: {
          perView: 1.3
        },
        320:{
          perView: 1.2
        }
      }
    })
    glide.on('run', () => {
      // USE STATE
      // @ts-ignore
      setActiveItem(items[glide.index]);
    })
    glide.mount();

  }, [])

  React.useEffect(() => {
    console.log("CAMBGIO EL ACTIVE ITEM", activeItem)
  }, [activeItem])

  return (
    <>
      <div className={usw(styles, ["gallery"], ["container-fluid"])}>

        <Tittles styling={{ paddingTop: "70px" }} tittle='galeria' />
        <div className={usw(styles, [], ["container"])}>
          <div className={usb(["row"])}>
            <div className={usb(["col-12"])}>
              <div className={usc(styles, ["galleryContainer"])}>
                <ResponsiveMasonry>
                  <Masonry columnsCount={3}
                    gutter={"10px"}>
                    {items.map((i) => (<img src={i} key={`image-${i}`} className={usc(styles, ["image"])} alt="pic goes here" />))}
                  </Masonry>
                </ResponsiveMasonry>
              </div>
              <div className={usc(styles, ["galleryContainerMobile"])}>
                <div className="glide" id="gallery-image-mobile">
                  <div className="glide__track" data-glide-el="track">
                    <ul className="glide__slides">
                      {items.map((i, index) => (
                        <div className="glide__slide" key={`image-${i}`}>
                          <img src={i} className={usc(styles, ["sliderImage"])} height="100" alt="pic goes here" />
                        </div>
                      ))}
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
          </div>
        </div>
      </div>
    </>
  )
}

export default Gallery