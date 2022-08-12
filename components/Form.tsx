import React, { useEffect } from 'react';
import { useState } from 'react';
import { usc, usb, usw } from '../utils/helpers';
import styles from '../styles/form.module.scss';
import Button from './Button';
import Glide from '@glidejs/glide'
import { RiveAnimation } from './RiveAnimation';
import Captains from './captains';
import Coast from './Coast';

const p = 2000;
const max = 4;
const min = 2;


const Form = ({ children }: any) => {
  const [people, setPeople] = useState<number>(min)
  const [total, setTotal] = useState<number>(min * p)
  /*
  const [checkedKiwi, setCheckedKiwi] = useState<boolean>(false);
  const [checkedMango, setCheckedMango] = useState<boolean>(false);
  const [tittle, setTittle] = useState("")
  const [iconkiwi, setIconKiwi] = useState("icon-un-check")
  const [iconMango, setIconMango] = useState("icon-un-check")
  */

  const travelData = [
    { "people": people },
    { "total": total },
    { "price": "" }
  ]
  const plus = () => {
    if (people < max) {
      const newPeople = people + 1;
      setPeople(newPeople)
      setTotal(newPeople * p)
    }
  }
  const minus = () => {
    if (people > min) {
      const newPeople = people - 1;
      setPeople(newPeople)
      setTotal(newPeople * p)
    }
  }
  /*
  const morning = () => {
    setPrice(1550)
  }
  const noon = () => {
    setPrice(3000)
  }
  const nigth = () => {
    setPrice(2000)
  }
  */
  return (
    <div className={usw(styles, ['formComponent'], ["container-fluid", "p-0"])} >
      <RiveAnimation bottom={800} left={0} animationName="water_2" extraClassName="rotationAnimation" />
      <RiveAnimation top={50} right={0} animationName="water_1" />
      <RiveAnimation top={0} bottom={0} left={0} right={0} animationName="sailing" className="sailing" extraClassName="sailingAnimation" />
      <div className={usb(['container', 'position-relative'])}>
        <div className={usb(["row"])}>
          <div className={usb(["col-lg-11", "col-12", "m-auto"])}>
            {/*<div className={usc(styles, ["content"])}>*/}
            <div className={usw(styles, ["content"], ["row"])}>
              <div className={usb(["col-md-6", "col-12"])}>
                <Captains />
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
                    <div className={usc(styles, ["formInput", "space-top-40", "inputCounter"])} >
                      <div className={usc(styles, ["counter"])}>
                        <div>
                          <span className='icon-menos' onClick={minus}></span>
                          <p>{people}</p>
                          <span className='icon-mas' onClick={plus} ></span>
                        </div>
                      </div>
                      <div className={usc(styles, ["persons"])} >
                        {new Array(max).fill({ active: false }).map((d, index) => ({ active: (index < people) })).reverse().map((d, index) => (<span key={`icon-${index}`} className={usc(styles, ["person", d.active ? 'active' : '']) + " icon-person"} />))}
                      </div>
                    </div>

                    <div className={usc(styles, ["formInput", "timeInput", "space-top-20"])} >
                      <div className={usc(styles, ["clock"])}>
                        <span className='icon-clock' />
                        {/* <input type="text" className={usc(styles, ["timeInputer"])} placeholder="Mañana/Tarde/Noche" /> */}
                      </div>
                    </div>
                    <div className={usc(styles, ["formInput", "timeInput", "space-top-20"])} >
                      <div className={usc(styles, ["clock"])}>
                        <p>
                          $ {total}
                        </p>
                      </div>
                    </div>
                    <div className={usc(styles, ["formCheck"])}>
                      <p>al reservar estas aceptando los <b>terminos y condiciones</b></p>
                    </div>
                    <Button onClick={() => window.location.href = "https://mpago.la/2BxpUJA"} />
                    <div className={usc(styles, ["formInput", "formPayment"])} >
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Coast />
    </div >
  )
};
export default Form;
