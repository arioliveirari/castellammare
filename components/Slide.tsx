import React from 'react';
import { usc, usb, usw } from '../utils/helpers';
import styles from '../styles/slide.module.scss'


export type SlideExampleType = {
  title: string, 
  person: string, 
  algo: string
}

const Slide = ({ title, person, algo }: SlideExampleType) => {
  return (
    <div className={"glide__slide " + usw(styles, ["slide"], [])}>
      <div className={usb(["m-auto"])}>
        <div className={usb(["row"])}>
          <div className={usb(["col-12"])}>
            <div className={usc(styles, ["slideContainer"])}>
              <div className={usc(styles, ["textContainer"])}>
                <div>
                  <p>
                    <q>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore
                      magna aliqua. Ut enim ad minim veniam, quis nostrud.

                    </q>
                  </p>
                </div>
              </div>
              <div className={usc(styles, ["personContainer"])}>
                <div className={usc(styles, ["pic"])}></div>
                <div>
                  <p className={usc(styles, ["name"])}>
                    antonio gallegos
                    <br />
                    comunicador social
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Slide