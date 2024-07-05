import React, { useEffect, useState } from 'react';
import { usb, usc, usw } from "../utils/helpers";
import styles from '../styles/boats.module.scss';
import Tittles from './Tittles';
import { useTranslation } from "react-i18next";
import SliderCustom from './SliderCustom';

export type TagType = {
  icon: string,
  text: string
}

const Boats = () => {
  const { t, i18n } = useTranslation();
  const tags = [
    {
      icon: "pesca",
      text: t("Boats.signs.fishing")
    },
    {
      icon: "cueva",
      text: t("Boats.signs.cueva")
    },
    {
      icon: "playa",
      text: t("Boats.signs.playa")
    },
    {
      icon: "snorkel",
      text: t("Boats.signs.snorkel")
    },
  ]

  return (
    <div id='ABOUT' className={usc(styles, ["boatsSection"])} >

      <div className={usw(styles, ["textContainer"], ["container-fluid"])}>

        <div className={usb(["container"])}>

          <div className={usb(["row"])}>
            <div className={usb(["col-12"])}>
              <div className={usc(styles, ["company"])}>{t("Boats.company")}</div>
            </div>
          </div>

          <div className={usb(["row"])}>
            <div className={usb(["col-12"])}>
              <div className={usc(styles, ["title"])} >
                <div>{t("Boats.title")}</div>
              </div>
            </div>
          </div>

          <div className={usb(["row"])}>
            <div className={usb(["col-12"])}>
              <div className={usc(styles, ["description"])}>{t("Boats.description")}</div>
            </div>
          </div>


          <div className={usb(["row"])}>
            <div className={usb(["col-12"])}>
              <div className={usc(styles, ["tags"])}>
                {
                  tags.map((tag: TagType, index: number)=>{
                    return <Sign text={tag.text} icon={tag.icon} key={index}/>
                  })
                }
              </div>
            </div>
          </div>

          

        </div>

        <div className={usb(["container-fluid"])}>
        <div className={usb(["row"])}>
            <div className={usb(["col-12"])}>
              <div className={usc(styles, ["slider"])}>
                     <SliderCustom />
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}
export default Boats

const Sign = ({text, icon}:{text: string, icon: string}) => {
  return (
    <div className={usc(styles, ["sign"])}>
      <div className={usc(styles, ["icon", icon])}></div>
      <div className={usc(styles, ["text"])}>{text}</div>
    </div>
  )
}