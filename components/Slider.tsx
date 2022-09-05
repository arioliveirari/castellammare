import React, { useState } from "react";
import { usb, usw, usc } from '../utils/helpers';
import styles from '../styles/slider.module.scss';
import Glide from '@glidejs/glide'
import Slide from "./Slide";

const Slider = () => {
  React.useEffect(() => {
    const glide = new Glide('#options-type-2', {
      type: "slider",
      focusAt: 'center',
      perView: 3.2,
      startAt: 0,
      gap: 140,
      breakpoints: {
        1440: {
          perView: 3.2,
          gap: 50
        },
        1200:{
          perView:2.8,
          gap:50
        },
        1024: {
          perView: 2,
          peek:100,
          gap: 30
        },
        768: {
          perView: 1.5,
          gap: 30
        },
        425: {
          perView: 1.4,
          gap: 25
        },
        375: {
          perView: 1.3,
          gap:20
        },
        320: {
          perView: 1.3,
          gap: 20
        }
      }

    }).mount();
  }, [])
  const sliderItems = [
    { title: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud"', person: 'antonio gallegos', algo: 'comunicador social' },
    { title: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud"', person: 'antonio gallegos', algo: 'comunicador social' },
    { title: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud"', person: 'antonio gallegos', algo: 'comunicador social' },
    { title: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud"', person: 'antonio gallegos', algo: 'comunicador social' },
    { title: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud"', person: 'antonio gallegos', algo: 'comunicador social' },
  ]
  return (
    <>
      <div className={usw(styles, ["sliderModule"], ["container-fluid", "p-0"])}>

        <div className="glide" id="options-type-2">
          <div className="glide__track" data-glide-el="track">
            <ul className="glide__slides">
              {sliderItems.map((i, index) => <Slide key={`slideexample-${index}`} {...i} />)}
            </ul>
            <div className="controls">
              <div className="glide__arrows" data-glide-el="controls">
                <div className="controlButton" data-glide-dir="<"><span className="icon-chevron_left"></span></div>
              </div>
              <div className="glide__bullets" data-glide-el="controls[nav]">
                {sliderItems.map((i, index) => (<button key={`${index}`} className="glide__bullet" data-glide-dir={`=${index}`}></button>))}
              </div>
              <div className="glide__arrows" data-glide-el="controls">
                <div className="controlButton" data-glide-dir=">"><span className="icon-chevron_right"></span></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}


export default Slider
// style={{width: "10px" ,height:"10px", marginRight:"5px", background:"white" ,borderRadius:"100%" }}