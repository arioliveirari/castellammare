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
    <div className={usc(styles, ["slideContainer"])}>
      <div className={usc(styles, ["textContainer"])}>
        <p>{title}</p>
      </div>
      <div className={usc(styles, ["personContainer"])}>
        <div className={usc(styles, ["pic"])}></div>
        <div>
          <p className={usc(styles, ["name"])}>{person}</p>
          <p className={usc(styles, ["ocupation"])}>{algo}</p>
        </div>
      </div>
    </div>

  )
}
export default Slide