import React from 'react';
import { usc, usb, usw } from '../utils/helpers';
import Tittles from './Tittles';
import Service from './Service';
import styles from '../styles/services.module.scss';
import { useTranslation } from "react-i18next";
import ButtonHeader from './ButtonBuyHeader';




const Services = () => {
  const { t, i18n } = useTranslation();
  const serviceData =
  {
    text1: t("Services.first.description"),
    text2: t("Services.second.description"),
    text3: t("Services.third.description"),
  }





  return (
    <div id='TOUR' className={usw(styles, ["servicios"], ["container-fluid"])}>
      <ServiceItem img={"boat"} title={t("Services.first.title")} icon={'calendar'} text={serviceData.text1} />
      <ServiceItem img={"food"} title={t("Services.second.title")} icon={"foodIcon"} text={serviceData.text2} />
      <ServiceItem img={"friends"} title={t("Services.third.title")} icon={"people"} text={serviceData.text3} />
    </div>
  )
}

export default Services

const ServiceItem = ({ img, title, icon, text }: { img: string, title: string, icon: string, text: string }) => {
  const [showMore, setShowMore] = React.useState(false)
  return (
    <div className={showMore ? usc(styles, ["parent", "active"]) : usc(styles, ["parent", ""])}>
      <div className={usc(styles, ["servicio", img])}>
      </div>
      <div className={usc(styles, ["title", "icon", icon])}></div>
      <div className={usc(styles, ["title", "titleService"])}>
        <div>{title}</div>
      </div>

      <div className={usc(styles, ["title", "text"])}>{text}</div>
      <div onClick={() => setShowMore(!showMore)} className={usc(styles, ["title", "vermas"])}></div>
      <ButtonHeader  extraClassName={`${!showMore ? "serviceButton" : "serviceButtonActive"}`} />
    </div>
  )
}