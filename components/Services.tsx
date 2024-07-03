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
    text1: "Salimos todos los días. Podés elegir entre dos turnos de 9:30 a 14 o de 14:30 a 19 ¡Consultanos disponibilidad para reservar!",
    text2: "Partimos del puerto de Castellammare, visitamos las cuevas y nos adentramos a 3km de la costa para pescar durante 40min. Luego recorremos la costa en bote parando para nadar y relajarnos en las playas de Cala Bianca, Riserva dello Zingaro y Tornare di Scopello, durante 40min en cada una. Volvemos al puerto para terminar el recorrido de 25km por la costa.",
    text3: "Todos nuestros paseos son privados y ofrecemos máscara snorkel, fruta y agua fresca para todo el grupo."
  }





  return (
    <div id='TOUR' className={usw(styles, ["servicios"], ["container-fluid"])}>
      <ServiceItem img={"boat"} title={'Horarios a tu gusto'} icon={'calendar'} text={serviceData.text1} />
      <ServiceItem img={"food"} title={'Una experiencia inolvidable'} icon={"foodIcon"} text={serviceData.text2} />
      <ServiceItem img={"friends"} title={'Un barco para vos y tus amigos'} icon={"people"} text={serviceData.text3} />
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

{/* <Tittles styling={{ backgroundColor: "#F3DDB4", paddingTop: "70px", paddingBottom: "25px" }} tittle={t("Services.title")} />
<div className={usw(styles, ["servicios"], ["container-fluid"])}>
  {serviceData.map((i, index) => (
    <Service key={index} tittle={i.title} paragraph={i.paragraph} pic={i.pic} inverted={i.inverted}></Service>
  ))}
</div> */}