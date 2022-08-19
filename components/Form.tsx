import React, { useEffect } from 'react';
import { useState } from 'react';
import { usc, usb, usw } from '../utils/helpers';
import styles from '../styles/form.module.scss';
import Button from './Button';
const p = 2000;
const max = 4;
const min = 2;


const Form = ({ children }: any) => {
  const [people, setPeople] = useState<number>(min)
  const [total, setTotal] = useState<number>(min * p)
  const [contact, setContact] = useState("")
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
    { "contact": contact },
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
  const handleChange = () => {
    setContact((event?.target as HTMLInputElement).value)
  }



  return (
    <div className={usw(styles, ['formComponent'], ["p-0"])} >

      <div className={usb(['container', 'position-relative'])}>
        <div className={usb(["row"])}>
          <div className={usb(["col-md-12", "m-auto"])}>
            {/*<div className={usc(styles, ["content"])}>*/}
            <div className={usc(styles, ["content"])}>
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
                  <div className={usc(styles, ["formInput", "timeInput", "space-top-20", "contactContainer"])} >
                  <span className='icon-bubbles'></span>
                    <input type="text" className={usc(styles, ["contactInput"])} onChange={handleChange} placeholder={"Mail/telefono de contacto"} />
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

    </div >
  )
};
export default Form;
