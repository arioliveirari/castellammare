import React, { useEffect } from 'react';
import { useState } from 'react';
import { usc, usb, usw } from '../utils/helpers';
import styles from '../styles/form.module.scss';
import Button from './Button';
import { useTranslation } from "react-i18next";
const prices = ["60", "90", "120", "150", "180"]
const max = 6;
const min = 2;

const Form = ({ children }: any) => {
  const [people, setPeople] = useState<number>(min);
  const [contact, setContact] = useState("");
  const [isValid, setIsValid] = useState(true)
  const [isDisabled, setDisabled] = useState(true)
  const { t, i18n } = useTranslation();
  /*
  const [checkedKiwi, setCheckedKiwi] = useState<boolean>(false);
  const [checkedMango, setCheckedMango] = useState<boolean>(false);
  const [tittle, setTittle] = useState("")
  const [iconkiwi, setIconKiwi] = useState("icon-un-check")
  const [iconMango, setIconMango] = useState("icon-un-check")
  */

  const travelData = [
    { "people": people },
    { "contact": contact },
    { "price": "" },
  ]

  const plus = () => {
    if (people < max) {
      const newPeople = people + 1;
      setPeople(newPeople)
    }
  }
  const minus = () => {
    if (people > min) {
      const newPeople = people - 1;
      setPeople(newPeople)
    }
  }

  const emailError = t("Form.emailError")

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const tempEmail = event.target.value;
    setDisabled((tempEmail == ""))
    setIsValid(!(tempEmail == ""));
    setContact(tempEmail)
  }

  const handleClick = () => {
    if (isDisabled) {
      setIsValid(false);
    } else {
      setIsValid(true);
      localStorage.setItem("baries-contact", contact);
      localStorage.setItem("baries-price", prices[people - min]);
      localStorage.setItem("baries-people", people.toString());
      localStorage.setItem("baries-sendForm", "true");

      if (people == 2) window.location.href = "https://mpago.la/1zoThhe" // 2
      else if (people == 3) window.location.href = "https://mpago.la/2Hq4M26" // 3
      else if (people == 4) window.location.href = "https://mpago.la/1Fv8uBc" // 4
      else if (people == 5) window.location.href = "https://mpago.la/2v42SaS" // 5
      else if (people == 6) window.location.href = "https://mpago.la/23X2f5A" // 6
      

      //window.location.href = "https://mpago.la/1QuSW4D"
    }
  }

  return (
    <div className={usw(styles, ['formComponent'], ["p-0"])} >
      <div className={usb(['container', 'position-relative'])}>
        <div className={usb(["row"])}>
          <div className={usb(["col-lg-12", "m-auto"])}>
            {/*<div className={usc(styles, ["content"])}>*/}
            <div className={usc(styles, ["content"])}>
              <form className={usc(styles, ["form"])}>
                <div className={usc(styles, ["form-content", "padding-top-52"])}>
                  <div className={usc(styles, ["formText"])}>
                    <img src="/images/barco.svg" alt='' className={usc(styles, ["formPic"])} />
                    <div className={usc(styles, ["formParagraph"])} >
                      {t("Form.buy")}
                    </div>
                    <div className={usc(styles, ["formTittle"])} >
                      {t("Form.description")}
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
                    <label htmlFor={usc(styles, ["contact"])}></label>
                    <span className='icon-bubbles'></span>
                    <input type="text" name={usc(styles, ["contact"])} onChange={handleChange} value={contact} className={usc(styles, ["contactInput"])} placeholder={t("Form.placeholder")} />
                  </div>
                  <div className={usc(styles, [(isValid) ? "noError" : "displayError"])}>{emailError}</div>
                  <div className={usc(styles, ["formInput", "timeInput", "space-top-20"])} >
                    <div className={usc(styles, ["clock"])}>
                      <p>
                        <span className={usb(["mx-2"])}>€</span> {prices[people - 2]}
                      </p>
                    </div>
                  </div>
                  <div className={usc(styles, [(isDisabled) ? "grayButtonContainer" : "buttonContainer"])} >
                    <Button onClick={handleClick} />
                  </div>

                  <div className={usc(styles, ["formInput", "formPayment"])} >
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

    </div >
  )
};
export default Form;
