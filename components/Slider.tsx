import React, { useState } from "react";
import { usb, usw, usc } from '../utils/helpers';
import styles from '../styles/slider.module.scss';
import Glide from '@glidejs/glide'

import Slide from "./Slide";

const Slider = () => {
  React.useEffect(() => {
    const glide = new Glide('.glide', {
      type: "slider",
      focusAt: 'center',
      perView: 3,
      startAt: 1,
    }).mount();
  }, [])
  const sliderItems = [
    { title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.', person: 'antonio gallegos', algo: 'comunicador social' },
    { title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.', person: 'antonio gallegos', algo: 'comunicador social' },
    { title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.', person: 'antonio gallegos', algo: 'comunicador social' },
    { title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.', person: 'antonio gallegos', algo: 'comunicador social' },
    { title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.', person: 'antonio gallegos', algo: 'comunicador social' },
    { title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.', person: 'antonio gallegos', algo: 'comunicador social' },
    { title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.', person: 'antonio gallegos', algo: 'comunicador social' },
    { title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.', person: 'antonio gallegos', algo: 'comunicador social' },
    { title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.', person: 'antonio gallegos', algo: 'comunicador social' },
    { title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.', person: 'antonio gallegos', algo: 'comunicador social' },
    { title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.', person: 'antonio gallegos', algo: 'comunicador social' },
  ]
  return (
    <>
      <div className={usw(styles, ["sliderModule"], ["container-fluid"])}>
        <div className={usb(["container"])}>
          <div className={usb(["row"])}>
            <div className={usb(["col-12"])}>
              <div className="glide" id="options-type">
                <div className="glide__track" data-glide-el="track">
                  <ul className="glide__slides">
                    {sliderItems.map((i, index) => <Slide key={`slideexample-${index}`} {...i} />)}
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


export default Slider
