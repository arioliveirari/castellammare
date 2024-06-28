import React from 'react';
import { usc, usb, usw } from '../utils/helpers';
import Tittles from './Tittles';
import Service from './Service';
import styles from '../styles/services.module.scss';
import { useTranslation } from "react-i18next";




const Services = () => {
  const { t, i18n } = useTranslation();
  const serviceData = [
    {
      inverted: false,
      title: t("Services.first.title"),
      paragraph: t("Services.first.description"),
      pic: t("Services.first.photo"),
    },
    {
      inverted: true,
      title: t("Services.second.title"),
      paragraph: t("Services.second.description"),
      pic: t("Services.second.photo"),
    },
    {
      inverted: false,
      title: t("Services.third.title"),
      paragraph: t("Services.third.description"),
      pic: t("Services.third.photo"),
    }
  ]

  const onSeeMore = () => {
    console.log("ari entro")
  }

  return (
    <div className={usw(styles, ["servicios"], ["container-fluid"])}>
      <ServiceItem img={"boat"} title={'Horarios a tu gusto'} icon={'calendar'} onClick={[onSeeMore]}/>
      <ServiceItem img={"food"} title={'Una experiencia inolvidable'} icon={"foodIcon"} onClick={[onSeeMore]}/>
      <ServiceItem img={"friends"} title={'Un barco para vos y tus amigos'}  icon={"people"} onClick={[onSeeMore]}/>
    </div>
  )
}

export default Services

const ServiceItem = ({ img, title, icon, onClick }: { img: string, title: string, icon: string, onClick: Function[] }) => {
  
  return (
    <div className={usc(styles, ["parent"])}>
      <div className={usc(styles, ["servicio", img])}>
      </div>
      <div className={usc(styles, ["title", "icon", icon])}></div>
      <div className={usc(styles, ["title", "titleService"])}>
        <div>{title}</div>
      </div>
      <div onClick={()=>onClick[0]()} className={usc(styles, ["title", "vermas"])}></div>
    </div>
  )
}

{/* <Tittles styling={{ backgroundColor: "#F3DDB4", paddingTop: "70px", paddingBottom: "25px" }} tittle={t("Services.title")} />
<div className={usw(styles, ["servicios"], ["container-fluid"])}>
  {serviceData.map((i, index) => (
    <Service key={index} tittle={i.title} paragraph={i.paragraph} pic={i.pic} inverted={i.inverted}></Service>
  ))}
</div> */}