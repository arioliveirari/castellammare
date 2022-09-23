import React from 'react';
//@ts-ignore
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry"
import { usb, usc, usw } from '../utils/helpers';
import styles from '../styles/gallery.module.scss';
import Glide from '@glidejs/glide'
import Gallery from "react-photo-gallery";
import Tittles from './Tittles';

const photos = [
  {
    src: "/images/gallery/alternative.jpeg",
    width: 3,
    height: 3
  },

  {
    src: "/images/gallery/4.jpeg",
    width: 3,
    height: 4
  },
  {
    src: "/images/gallery/6.jpeg",
    width: 4,
    height: 4
  },
  {
    src: "images/gallery/1.jpeg",
    width: 3,
    height: 4
  },

  {
    src: "/images/gallery/2.jpeg",
    width: 4,
    height: 4
  },

  {
    src: "/images/gallery/9.jpeg",
    width: 3,
    height: 3
  },

  {
    src: "/images/gallery/7.jpeg",
    width: 3,
    height: 3
  },
  {
    src: "/images/gallery/3.jpeg",
    width: 2.6,
    height: 3
  },
  {
    src: "/images/gallery/14.jpg",
    width: 4,
    height: 3
  },
  {
    src: "/images/gallery/16.jpg",
    width: 3.2,
    height: 3
  },
  {
    src: "/images/gallery/17.jpg",
    width: 2.5,
    height: 3
  },
  {
    src: "/images/gallery/12.jpg",
    width: 3.5,
    height: 3
  }
];


const column1 = [
  "https://dummyimage.com/401x600/000/fff",// "./images/gallery/8.jpeg",
  "https://dummyimage.com/404x400/000/fff",// ".
  "https://dummyimage.com/407x600/000/fff",// ".
  "https://dummyimage.com/410x400/000/fff",// ".",
  "https://dummyimage.com/413x800/000/fff",// "./",
]
const column2 = [
  "https://dummyimage.com/402x800/000/fff",// ".",
  "https://dummyimage.com/405x800/000/fff",// ".",
  "https://dummyimage.com/408x400/000/fff",// "./",
  "https://dummyimage.com/411x400/000/fff",// ".",
  "https://dummyimage.com/414x400/000/fff",// ".",

]
const column3 = [
  "https://dummyimage.com/403x400/000/fff",// ".",
  "https://dummyimage.com/406x400/000/fff",// ".",
  "https://dummyimage.com/409x600/000/fff",// ".",
  "https://dummyimage.com/412x800/000/fff",// ".",
  "https://dummyimage.com/415x600/000/fff",// ".",
]

const items: string[] = [];

for (let index = 0; index < column1.length; index++) {
  const element1 = column1[index];
  const element2 = column2[index];
  const element3 = column3[index];
  items.push(element1)
  items.push(element2)
  items.push(element3)
}

console.log("items", items)
const GalleryFunction = () => {
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
        <Tittles styling={{ paddingTop: "70px", paddingLeft: "25px" }} tittle='galeria' />
        <div className={usb(["container-fluid", "p-0"])} >
        <div className={usc(styles, ["galleryContainerMobile"])}>
            <div className="glide" id="gallery-image-mobile">
              <div className="glide__track" data-glide-el="track">
                <ul className="glide__slides">
                  {photos.map((i, index) => (
                    <div className="glide__slide" key={`image-${i}`}>
                      <img src={i.src} className={usc(styles, ["sliderImage"])} height="100" alt="pic goes here" />
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
        <div className={usw(styles, ["desktopContainer"], ["container"])}>
          <div className={usb(["row"])}>
            <div className={usb(["col-12"])}>
              <div className={usc(styles, ["galleryContainer"])}>
                {/* <Masonry columnsCount={3}
                  columnsCountBreakPoints={
                    { 990: 3 }
                  }
                  gutter={"10px"}>
                  {items.map((i) => (<img src={i} key={`image-${i}`} className={usc(styles, ["image"])} alt="pic goes here" />))}
                </Masonry> */}
                <Gallery direction='row' photos={photos} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default GalleryFunction