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
                      {title}
                    </q>
                  </p>
                </div>
              </div>
              <div className={usc(styles, ["personContainer"])}>
                <div className={usc(styles, ["pic"])}></div>
                <div>
                  <p className={usc(styles, ["name"])}>
                    {person}
                    <br />
                  </p>
                  <p className={usc(styles,["ocupation"])}>
                    {algo}
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