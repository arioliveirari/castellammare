import React from 'react';
import { usc, usb, usw } from '../utils/helpers';
import styles from '../styles/form.module.scss';

const Form = ({ children }: any) => (
  <div className={usw(styles, ['formComponent'], ["container-fluid"])}>
    <div className={usb(['container'])}>
      <div className={usb(["row"])}>
        <div className={usb(["col-lg-11", "col-12", "m-auto"])}>
          {/*<div className={usc(styles, ["content"])}>*/}
          <div className={usw(styles, ["content"], ["row"])}>
            <div className={usb(["col-md-6", "col-12"])}>

              <div className={usc(styles, ["picWrapper"])} >
                <div className={usc(styles, ["picContainer"])} >
                  <div className={usc(styles, ["kiwi", "sailImage"])}></div>
                  <div className={usc(styles, ["mango", "sailImage"])}></div>
                </div>

                <div className={usc(styles, ["picText"])} >
                  <p>asdasdsad</p>
                  <p>asdasdsad</p>
                  <p>asdasdsad</p>
                </div>
              </div>
            </div>

            <div className={usb(["col-md-6", "col-12"])}>
              <div className={usc(styles, ["form"])}>
                <div className={usc(styles, ["form-content", "padding-top-52"])}>

                  <div className={usc(styles, ["formText"])}>
                    <div className={usc(styles, ["formTittle"])} >
                      vivi una experiencia
                    </div>
                    <div className={usc(styles, ["formParagraph"])} >
                      unica
                    </div>

                  </div>
                  <div className={usc(styles, ["formInput", "space-top-52"])} >
                    aaa
                  </div>
                  <div className={usc(styles, ["formInput", "space-top-20"])} >
                    aaa
                  </div>
                  <div className={usc(styles, ["formInput", "space-top-20", "space-bot-52"])} >
                    aaa
                  </div>
                  <p className={usc(styles, ["space-bot-52"])} >
                    Lorem Ipsum dolor sit amet consecteur?
                  </p>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);
export default Form