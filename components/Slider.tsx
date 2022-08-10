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
      perView: 3,
      startAt: 1,
      gap: 50,
      breakpoints: {
        768: {
          perView: 1,
          gap: 50,
          startAt: 1,
          peek: 90,
        },
      },

    }).mount();
  }, [])
  const sliderItems = [
    { title: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud"', person: 'antonio gallegos', algo: 'comunicador social' },
    { title: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud"', person: 'antonio gallegos', algo: 'comunicador social' },
    { title: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud"', person: 'antonio gallegos', algo: 'comunicador social' },
    { title: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud"', person: 'antonio gallegos', algo: 'comunicador social' },
    { title: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud"', person: 'antonio gallegos', algo: 'comunicador social' },
    { title: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud"', person: 'antonio gallegos', algo: 'comunicador social' },
    { title: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud"', person: 'antonio gallegos', algo: 'comunicador social' },
    { title: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud"', person: 'antonio gallegos', algo: 'comunicador social' },
    { title: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud"', person: 'antonio gallegos', algo: 'comunicador social' },
    { title: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud"', person: 'antonio gallegos', algo: 'comunicador social' },
    { title: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud"', person: 'antonio gallegos', algo: 'comunicador social' },
  ]
  return (
    <>
      <div className={usw(styles, ["sliderModule"], ["container-fluid"])}>
        <div className={usb(["container"])}>
          <div className={usb(["row"])}>
            <div className={usb(["col-12"])}>
              <div className="glide" id="options-type-2">
                <div className="glide__track" data-glide-el="track">
                  <ul className="glide__slides">
                    {sliderItems.map((i, index) => <Slide key={`slideexample-${index}`} {...i} />)}
                  </ul>
                  <div className="controls" data-glide-el="controls[nav]">
                    <button className="controlButton" data-glide-dir="<"><span className="icon-chevron_left"></span></button>
                    <button className="glide__bullet" data-glide-dir="=0"></button>
                    <button className="glide__bullet" data-glide-dir="=1"></button>
                    <button className="glide__bullet" data-glide-dir="=2"></button>
                    <button className="glide__bullet" data-glide-dir="=3"></button>
                    <button className="glide__bullet" data-glide-dir="=4"></button>
                    <button className="glide__bullet" data-glide-dir="=5"></button>
                    <button className="glide__bullet" data-glide-dir="=6"></button>
                    <button className="glide__bullet" data-glide-dir="=7"></button>
                    <button className="glide__bullet" data-glide-dir="=8"></button>
                    <button className="glide__bullet" data-glide-dir="=9"></button>
                    <button className="glide__bullet" data-glide-dir="=10"></button>
                    <button className="controlButton" data-glide-dir=">"><span className="icon-chevron_right"></span></button>
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


export default Slider
