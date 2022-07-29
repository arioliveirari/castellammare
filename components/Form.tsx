import React from 'react';
import { usc, usb, usw } from '../utils/helpers';
import styles from '../styles/form.module.scss';
import Tittles from './tittles';
import Button from './Button';


const Form = ({ children }: any) => (

  <>
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
                    <div className={usb(["row"])} >
                      <div className={usb(["col-l-6", "col-md-12"])} >

                        <p className={usc(styles, ["picTittle"])} >Kiwi</p>
                      </div>
                    </div>
                    <div className={usb(["row"])} >
                      <div className={usb(["col-md-9", "col-sm-12"])} >
                        <p className={usc(styles, ["picParagraph"])} >
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                          sed do eiusmod tempor incididunt ut labore et dola aliqua.
                          Ut enim ad minim venim, quis nostud exercitation ullamco.
                          Ut enim ad minim venim, quis nostud ut labore et dola aliqua.
                        </p>
                      </div>
                    </div>
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
                    <div className={usc(styles, ["formInput", "space-top-52", "inputCounter"])} >
                      <div className={usc(styles, ["counter"])}>
                        <div>
                          <span className='icon-menos'></span>
                          <p>2</p>
                          <span className='icon-plus' ></span>
                        </div>
                      </div>
                      <div className={usc(styles, ["persons"])} >
                        <span className='icon-person' />
                        <span className='icon-person' />
                      </div>
                    </div>
                    <div className={usc(styles, ["formInput", "radioButtons", "space-top-20"])} >
                      <div className={usc(styles, ["checked"])}>
                        <span className='icon-radio-checked' /> Kiwi
                      </div>
                      <div className={usc(styles, ["unchecked"])}>
                        <span className='icon-radio-unchecked' /> Mango
                      </div>
                    </div>
                    <div className={usc(styles, ["formInput", "timeInput", "space-top-20"])} >
                      <div className={usc(styles, ["clock"])}>
                        <span className='icon-radio-checked' />
                        <p>
                          mañana/tarde/noche
                        </p>
                      </div>
                    </div>
                    <div className={usc(styles, ["formInput", "timeInput", "space-top-20", "space-bot-52"])} >
                      <div className={usc(styles, ["clock"])}>
                        <p>
                          $ total
                        </p>
                      </div>
                    </div>
                    <div className={usc(styles, ["formCheck", ])}>
                      <span className='icon-check' /><p>Quiero recibir avisos de promociones</p>
                    </div>
                    <div className={usc(styles, ["formInput", "formPayment","space-bot-52" ])} >
                    </div>
                    <Button></Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  </>


);
export default Form