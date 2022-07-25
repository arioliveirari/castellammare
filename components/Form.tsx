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
                      <span className="icon-instagram" /> 
                      <span className="icon-mail" /> 
                      <span className="icon-whatsapp" /> 
                    </div>

                  </div>
                  <div className={usc(styles, ["formInput", "space-top-52"])} >

                    - 2 +

                  </div>
                  <div className={usc(styles, ["formInput", "space-top-20"])} >

                    <input type="radio" />kiwi <input type="radio" />mango

                  </div>
                  <div className={usc(styles, ["formInput", "space-top-20", "space-bot-52"])} >

                    <p>
                      Mañana/tarde/noche
                    </p>

                  </div>
                  <p className={usc(styles, ["space-bot-52"])}>
                    <input type="checkbox" className={usc(styles, ["formCheckbox"])}></input>
                    Lorem Ipsum dolor sit amet consecteur?
                  </p>

                  <a className={usc(styles, ["reserva", "space-top-52"])} href="#">
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