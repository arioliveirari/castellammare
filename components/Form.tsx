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
                  <p>Velero</p>
                  <p className={usc(styles, ["picTittle"])} >KIWI</p>
                  <p className={usc(styles, ["picParagraph"])} >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt ut labore et dola aliqua.
                    Ut enim ad minim venim, quis nostud exercitation ullamco.
                  </p>
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
                      UNICA
                    </div>

                  </div>
                  <div className={usc(styles, ["formInput", "space-top-52"])} >
                    <div className={usc(styles, ["formInputContant"])} >
                      - 2 +
                    </div>
                    <div className={usc(styles, ["formInputContant"])} >
                      <span className='icon-person' ></span>
                      <span className='icon-person' ></span>
                    </div>
                  </div>
                  <div className={usc(styles, ["formInput", "space-top-20"])} >
                    <span className='icon-check'>kiwi</span>
                    <span className='icon-un-check'>mango</span>
                  </div>
                  <div className={usc(styles, ["formInput", "space-top-20", "space-bot-52"])} >
                    <div className={usc(styles, ["formInputContant"])} >
                      <p>
                        <span className='icon-clock' ></span>  Mañana/tarde/noche
                      </p>
                    </div>
                  </div>
                  <p className={usc(styles, ["space-bot-52"])}>
                    <span className='icon-check' ></span> Lorem Ipsum dolor sit amet consecteur?
                  </p>
                  <a className={usc(styles, ["reserva", "space-top-20"])} href="#">
                    reservar
                  </a>
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