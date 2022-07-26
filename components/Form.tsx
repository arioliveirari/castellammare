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
                    Ut enim ad minim venim, quis nostud ut labore et dola aliqua.
                  </p>
                </div>
              </div>
            </div>

            <div className={usb(["col-md-6", "col-12"])}>
              <div className={usc(styles, ["form"])}>
                <div className={usc(styles, ["form-content", "padding-top-52"])}>

                  <div className={usc(styles, ["formText"])}>
                    <img src="/images/barco.svg" alt='' className={usc(styles, ["formPic"])} />

                    <div className={usc(styles, ["formTittle"])} >
                      viví una experiencia
                    </div>
                    <div className={usc(styles, ["formParagraph"])} >
                      UNICA
                    </div>

                  </div>
                  <div className={usc(styles, ["formInput", "space-top-52"])} >
                    <div className={usc(styles, ["formInputContant"])} >
                      - 2 +
                    </div>
                    <div className={usc(styles, ["formInputContent"])} >
                      <span className='icon-person icono' ></span>
                      <span className='icon-person  icono' ></span>
                    </div>
                  </div>
                  <div className={usc(styles, ["formInput", "space-top-20"])} >
                    <span className='icon-check icono'>Kiwi</span>
                    <span className='icon-un-check'>Mango</span>
                  </div>
                  <div className={usc(styles, ["formInput", "space-top-20", "space-bot-52"])} >
                    <div className={usc(styles, ["formInputContant"])} >
                      <span className='icon-clock icono' ></span>  Mañana/Tarde/Noche
                    </div>
                  </div>
                  <p className={usc(styles, ["space-bot-52"])}>
                    <span className='icon-check icono' ></span> Lorem Ipsum dolor sit amet consecteur?
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