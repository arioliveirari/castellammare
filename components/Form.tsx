import React from 'react';
import { useState } from 'react';
import { usc, usb, usw } from '../utils/helpers';
import styles from '../styles/form.module.scss';
import Button from './Button';


const Form = ({ children }: any) => {
  const [checkedKiwi, setCheckedKiwi] = useState<boolean>(false);
  const [checkedMango, setCheckedMango] = useState<boolean>(false);
  const [tittle, setTittle] = useState("")
  const [iconkiwi, setIconKiwi] = useState("icon-un-check")
  const [iconMango, setIconMango] = useState("icon-un-check")

  const kiwi = () => {
    setCheckedKiwi(true)
    setCheckedMango(false)
    setTittle("kiwi")
    setIconKiwi("icon-check")
    setIconMango("icon-un-check")
  }
  const mango = () => {
    setCheckedKiwi(false)
    setCheckedMango(true)
    setTittle("mango")
    setIconMango("icon-check")
    setIconKiwi("icon-un-check")
  }
  return (


    <div className={usw(styles, ['formComponent'], ["container-fluid"])} >
      <div className={usb(['container'])}>
        <div className={usb(["row"])}>
          <div className={usb(["col-lg-11", "col-12", "m-auto"])}>
            {/*<div className={usc(styles, ["content"])}>*/}
            <div className={usw(styles, ["content"], ["row"])}>
              <div className={usb(["col-md-6", "col-12"])}>

                <div className={usc(styles, ["picWrapper"])} >
                  <div className={usc(styles, ["picContainer"])} >
                    <div className={usc(styles, [(checkedKiwi) ? "kiwi" : "kiwi", "blured"])}></div>
                    <div className={usc(styles, [(checkedMango) ? "mango" : "mango", "blured"])}></div>
                  </div>

                  <div className={usc(styles, ["picText"])} >
                    <div className={usb(["row"])} >
                      <div className={usb(["col-l-6", "col-md-12"])} >
                        <p className={usc(styles, ["picTittle"])} >{tittle}</p>
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
                          <span className='icon-mas' ></span>
                        </div>
                      </div>
                      <div className={usc(styles, ["persons"])} >
                        <span className='icon-person' />
                        <span className='icon-person' />
                      </div>
                    </div>
                    <div className={usc(styles, ["formInput", "radioButtons", "space-top-20"])} >
                      <div className={usc(styles, ["checked"])}>
                        <input type={"checkbox"} onClick={kiwi} className={usc(styles, ["checker"])}></input>
                        <label className={usc(styles, ["label"])} htmlFor="checker">
                          <span className={iconkiwi} /> <p>Kiwi</p>
                        </label>
                      </div>
                      <div className={usc(styles, ["unchecked"])}>
                        <input type={"checkbox"} onClick={mango} className={usc(styles, ["checker"])}></input>
                        <label className={usc(styles, ["label"])} htmlFor="checker">
                          <span className={iconMango} /> <p>mango</p>
                        </label>
                      </div>
                    </div>
                    <div className={usc(styles, ["formInput", "timeInput", "space-top-20"])} >
                      <div className={usc(styles, ["clock"])}>
                        <span className='icon-clock' />
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
                    <div className={usc(styles, ["formCheck",])}>
                      <p>al reservar aceptas los <b>terminos y condiciones</b></p>
                    </div>
                    <div className={usc(styles, ["formInput", "formPayment", "space-bot-52"])} >
                    </div>
                    <Button></Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div >
  )




};
export default Form