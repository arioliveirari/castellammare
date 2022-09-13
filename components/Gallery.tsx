import React from 'react';
//@ts-ignore
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry"
import { usb, usc, usw } from '../utils/helpers';
import styles from '../styles/gallery.module.scss';
import Glide from '@glidejs/glide'
import Tittles from './Tittles';

const column1 = [
  "https://dummyimage.com/401x600/000/fff",// "./images/gallery/8.jpg",
  "https://dummyimage.com/404x400/000/fff",// "./images/gallery/16.jpg",
  "https://dummyimage.com/407x600/000/fff",// "./images/gallery/4.jpg",
  "https://dummyimage.com/410x400/000/fff",// "./images/gallery/6.jpg",
  "https://dummyimage.com/413x800/000/fff",// "./images/gallery/1.jpg",
]
const column2 = [
  "https://dummyimage.com/402x800/000/fff",// "./images/gallery/15.jpg",
  "https://dummyimage.com/405x800/000/fff",// "./images/gallery/2.jpg",
  "https://dummyimage.com/408x400/000/fff",// "./images/gallery/12.jpg",
  "https://dummyimage.com/411x400/000/fff",// "./images/gallery/9.jpg",
  "https://dummyimage.com/414x400/000/fff",// "./images/gallery/12.jpg",

]
const column3 = [
  "https://dummyimage.com/403x400/000/fff",// "./images/gallery/7.jpg",
  "https://dummyimage.com/406x400/000/fff",// "./images/gallery/7.jpg",
  "https://dummyimage.com/409x600/000/fff",// "./images/gallery/3.jpg",
  "https://dummyimage.com/412x800/000/fff",// "./images/gallery/11.jpg",
  "https://dummyimage.com/415x600/000/fff",// "./images/gallery/10.jpg",
]

const items: string[] = [];
const items2Col: string[] = [];
for (let index = 0; index < column1.length; index++) {
  const element1 = column1[index];
  const element2 = column2[index];
  const element3 = column3[index];
  items.push(element1)
  items.push(element2)
  items.push(element3)
}

console.log("items", items)
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
        320: {
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
        <div className={usb(["container-fluid", "p-0"])} >
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
        <div className={usw(styles, [], ["container"])}>
          <div className={usb(["row"])}>
            <div className={usb(["col-12"])}>
              <div className={usc(styles, ["galleryContainer"])}>
                <Masonry columnsCount={3}
                  columnsCountBreakPoints={
                    { 990: 3 }
                  }
                  gutter={"10px"}>
                  {items.map((i) => (<img src={i} key={`image-${i}`} className={usc(styles, ["image"])} alt="pic goes here" />))}
                </Masonry>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Gallery