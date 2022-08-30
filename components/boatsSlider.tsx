import React, { useEffect } from 'react';
import { useState } from 'react';
import styles from '../styles/boatSlider.module.scss';
import { usc, usb, usw } from '../utils/helpers';
import Glide from '@glidejs/glide'
import BoatsSlide from './BoatSlide';


const items = [
  { src: "./images/kiwi.jpg", years: 1, travels: 1 },
  { src: "./images/mango.jpg", years: 1, travels: 7 },
]

const BoatsSlider = () => {
  const [activeSlide, setActiveSlide] = useState(0)
  React.useEffect(() => {
    const glide = new Glide('#boatSlider', {
      type: "slider",
      focusAt: 'center',
      perView: 1,
      startAt: 1,
    })
    console.log("glide", glide)
    glide.on(['run', 'mount.after'], () => {
      // @ts-ignore
      setActiveSlide(glide.index)
    })
    glide.mount();
  }, [])

  return (
    <div className={usw(styles, ["sliderModule"], ["container-fluid"])}>
      <div className={usb(["container"])}>
        <div className={usb(["row"])}>
          <div className={usb(["col-12"])}>
            <div className="glide" id="boatSlider">
              <div className="glide__track" data-glide-el="track">
                <ul className="glide__slides">
                  {items.map((i, index) => <BoatsSlide
                    key={index}
                    src={i.src}
                  />)}
                </ul>
                <div className={usc(styles, ["slideText"])}>
                  <p> Viajes {items[activeSlide].travels}</p>
                  <p> Años {items[activeSlide].years}</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  )

}

export default BoatsSlider
