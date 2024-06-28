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

  const handleClick = (index: number) => {
    const newItems = [...items];
    newItems[index].isDown = !newItems[index].isDown;
    setItems(newItems)
  }

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
      <div className={usw(styles, ["faqComponent"], ["container-fluid"])}>
        <div className={usb(["container"])}>
          <div className={usb(["row"])}>
            <div className={usb(["col-md-7 col-12"])}>
              <div className={usc(styles, ["title"])} >
                <p>
                  {t("FaqItem.title")}
                </p>
              </div>
              <div className={usc(styles, ["content"])} >
                {items.map((i, index) => (
                  <div className={usc(styles, ["dropdownItem"])} onClick={() => handleClick(index)} key={i.id}>
                    <div className={usc(styles, ["question"])} >
                      <div className={usc(styles, ["text"])}>
                        <span className={(i.isDown) ? "icon-chevron_right rotatedArrow" : "icon-chevron_right"}>
                        </span>
                        <p>
                          {i.question}
                        </p>
                      </div>
                    </div>
                    <div className={usw(styles, ["answerRow"], ["row"])}>
                      <div className={usb(["col-10"])}>
                        <div className={usc(styles, [(i.isDown) ? "isDown" : "answer"])}>
                          <p className={usc(styles, ["text"])}>
                            {i.answer}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          <div className={usb(["col-md-5 col-12 d-flex justify-content-center align-items-center"])}>
                <div className={usc(styles, ["formCarry"])}>
                  <FormCarry/>
                </div>
          </div>
          </div>
        </div>
      </div >
    </>
  )
}
export default FaqItem