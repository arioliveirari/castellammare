import React, { useEffect } from 'react';
import { useState } from 'react';
import { usc, usb, usw } from '../utils/helpers';
import styles from '../styles/form.module.scss';
import Button from './Button';
import Glide from '@glidejs/glide'


const Form = ({ children }: any) => {
  const [checkedKiwi, setCheckedKiwi] = useState<boolean>(false);
  const [checkedMango, setCheckedMango] = useState<boolean>(false);
  const [people, setPeople] = useState<number>(1)
  const [time, setTime] = useState("")
  const [boat, setBoat] = useState("")
  const [tittle, setTittle] = useState("")
  const [iconkiwi, setIconKiwi] = useState("icon-un-check")
  const [iconMango, setIconMango] = useState("icon-un-check")
  const travelData = [
    { "people": people },
    { "boat": boat },
    { "time": "" }
  ]
  const plus = () => {
    if (people < 5) {
      setPeople(people + 1)
    }
  }
  const minus = () => {
    if (people >= 1) {
      setPeople(people - 1)
    }
  }
  const kiwi = () => {
    setCheckedKiwi(true)
    setCheckedMango(false)
    setTittle("kiwi")
    setIconKiwi("icon-check")
    setIconMango("icon-un-check")
    setBoat("kiwi")
  }
  const mango = () => {
    setBoat("mango")
    setCheckedKiwi(false)
    setCheckedMango(true)
    setTittle("mango")
    setIconMango("icon-check")
    setIconKiwi("icon-un-check")
  }
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTime(e.currentTarget.value)
  }
  useEffect(() => {
    console.log(boat, people, time)
  }, [boat, people, time])
  React.useEffect(() => {
    const glide = new Glide('.glide', {
      type: "slider",
      focusAt: 'center',
      perView: 1,
      startAt: 1,
    }).mount();
  }, [])

  const items = [
    "./images/kiwi.jpg",
    "./images/mango.jpg",
  ]

  return (
    <div className={usw(styles, ['formComponent'], ["container-fluid"])} >
      <div className={usb(['container'])}>
        <div className={usb(["row"])}>
          <div className={usb(["col-lg-11", "col-12", "m-auto"])}>
            {/*<div className={usc(styles, ["content"])}>*/}
            <div className={usw(styles, ["content"], ["row"])}>
              <div className={usb(["col-md-6", "col-12"])}>
                <div className={usc(styles, ["gliderContainer"])}>
                  <div className="glide" id="options-type">
                    <div className="glide__track" data-glide-el="track">
                      <ul className="glide__slides">
                        {items.map((i, index) => (<img src={i} key={`image-${i}`} className={usc(styles, ["image"])} alt="pic goes here" />))}
                      </ul>
                    </div>
                  </div>
                </div>
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
                          <span className='icon-menos' onClick={minus}></span>
                          <p>{people}</p>
                          <span className='icon-mas' onClick={plus} ></span>
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
                          <span className={iconMango} /> <p>Mango</p>
                        </label>
                      </div>
                    </div>
                    <div className={usc(styles, ["formInput", "timeInput", "space-top-20"])} >
                      <div className={usc(styles, ["clock"])}>
                        <span className='icon-clock' />
                        <input type="text" onChange={handleInputChange} className={usc(styles, ["timeInputer"])} placeholder="Mañana/Tarde/Noche" />
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