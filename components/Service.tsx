import React from 'react';
import { usc, usb, usw } from '../utils/helpers';
import styles from '../styles/service.module.scss';
// import { text } from 'stream/consumers';

type Prop = {
  paragraph: string;
  tittle: string;
  pic: string;
  inverted: boolean;
}

const Service = ({ tittle, paragraph, inverted }: Prop) => {
  return (

    <div className={usw(styles, ["service"], ["container-fluid"])} >
      <div className={usb(["container"])} >
        <div className={usw(styles, ['serviceContainer'], ["row", (inverted) ? 'justify-content-reverse' : ''])}>
          <div className={usb(["col-md-6", "col-12"])} >
            <div className={usc(styles, ["text"])}>
              <p className={usc(styles, ["tittle"])} >
                {tittle}
              </p>
              <p className={usc(styles, ["paragraph"])} >
                {paragraph}
              </p>
            </div>
          </div>
          <div className={usb(["col-md-6", "col-12"])} >
            <div className={usc(styles, ["image"])}>
            </div>
          </div>
        </div>
      </div>
    </div>
  )


}

export default Service