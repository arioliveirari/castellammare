import React, { useEffect, useState } from 'react';
import { usb, usc, usw } from "../utils/helpers";
import styles from '../styles/faqItem.module.scss';
import Tittles from './Tittles';
import { useTranslation } from "react-i18next";
import FormCarry from './FormCarry';

interface dropDownInfo {
  question: string,
  answer: string
  id: number
  isDown: boolean
}

const FaqItem = () => {
  const { t, i18n } = useTranslation();

  return (
    <>
      <div id='FAQ' className={usw(styles, ["faqComponent"], ["container-fluid"])}>

        <div className={usw(styles, ["textContainer"], ["container-fluid"])}>

          <div className={usb(["container"])}>

            <div className={usb(["row "])}>

              <div className={usb(["row"])}>
                <div className={usb(["col-12"])}>
                  <div className={usc(styles, ["title"])} >
                    <div>{t("FaqItem.title")}</div>
                  </div>
                </div>
              </div>

              <div className={usb(["col-12"])}>
                <div className={usc(styles, ["content"])} >
                  <FAQelement />
                </div>
              </div>

            </div>
          </div>
        </div>
      </div >
    </>
  )
}
export default FaqItem


const FAQelement = () => {

  const { t, i18n } = useTranslation();

  const handleClick = (index: number) => {
    if (items[index].isDown) {
      setItems(dropDownArray)
    } else {
      const newItems = [...dropDownArray];
      newItems[index].isDown = !newItems[index].isDown;
      setItems(newItems)
    }
  }

  React.useEffect(()=>{
    setItems(dropDownArray)
  }, [i18n.language])

  const dropDownArray: Array<dropDownInfo> = [
    {
      id: 1,
      isDown: false,
      question: t("FaqItem.items.first.question"),
      answer: t("FaqItem.items.first.answer"),
    },
    {
      id: 2,
      isDown: false,
      question: t("FaqItem.items.second.question"),
      answer: t("FaqItem.items.second.answer"),
    },
    {
      id: 3,
      isDown: false,
      question: t("FaqItem.items.third.question"),
      answer: t("FaqItem.items.third.answer"),
    },
    {
      id: 4,
      isDown: false,
      question: t("FaqItem.items.fourth.question"),
      answer: t("FaqItem.items.fourth.answer"),
    },
    {
      id: 5,
      isDown: false,
      question: t("FaqItem.items.fifth.question"),
      answer: t("FaqItem.items.fifth.answer"),
    }
  ]
  const [items, setItems] = useState(dropDownArray)
  return (
    <>
      {items.map((i, index) => (
        <div className={usc(styles, [(i.isDown) ? "isDown" : "", "dropdownItem"])} onClick={() => handleClick(index)} key={i.id}>

          <div className={usw(styles, ["question"], ["row"])} >
            <div className={usw(styles, ["text"], ["col-12"])}>
              <div className={usc(styles, ["icon"])}></div>
              <p>
                {i.question}
              </p>
            </div>
          </div>

          <div className={usw(styles, ["answerRow"], ["row"])}>
            <div className={usb(["col-12"])}>
              <div className={usc(styles, ["answer"])}>
                <p className={usc(styles, ["text"])}>
                  {i.answer}
                </p>
              </div>
            </div>
          </div>

        </div>
      ))}
    </>
  )
}