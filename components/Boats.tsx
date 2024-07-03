import React, { useEffect, useState } from 'react';
import { usb, usc, usw } from "../utils/helpers";
import styles from '../styles/boats.module.scss';
import Tittles from './Tittles';
import KiwiSlider from './KiwiSlider';
import { useTranslation } from "react-i18next";

export type TagType = {
  icon: string,
  text: string
}

const Boats = () => {
  const { t, i18n } = useTranslation();
  const tags = [
    {
      icon: "pesca",
      text: "Pesca con red en altamar"
    },
    {
      icon: "cueva",
      text: "Visita a cuevas"
    },
    {
      icon: "playa",
      text: "Paradas en playas paradisíacas"
    },
    {
      icon: "snorkel",
      text: "Nado con snorkel"
    },
  ]

  return (
    <div id='ABOUT' className={usc(styles, ["boatsSection"])} >

      <div className={usw(styles, ["textContainer"], ["container-fluid"])}>

        <div className={usb(["container"])}>

          <div className={usb(["row"])}>
            <div className={usb(["col-12"])}>
              <div className={usc(styles, ["company"])}>SANTA LUCIA TOUR</div>
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
              <div className={usc(styles, ["description"])}>Disfruta una experiencia única a bordo del Santa Lucia, un tradicional bote peschereccio. Comenzamos nuestra aventura en el puerto de Castellammare, visitamos cuevas y luego pescamos con red en alta mar. Continúa el viaje recorriendo la costa, con paradas en Cala Bianca, la Reserva dello Zingaro y Tonnara di Scopello para nadar y disfrutar del paisaje paradisíaco. Te ofrecemos fruta fresca, agua y equipo de snorkel para que tu experiencia sea inolvidable.</div>
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

          <div className={usb(["row"])}>
            <div className={usb(["col-12"])}>
              <div className={usc(styles, ["slider"])}>
                     {/* <KiwiSlider /> */}
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