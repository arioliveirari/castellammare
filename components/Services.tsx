import React from 'react';
import { usc, usb, usw } from '../utils/helpers';
import Tittles from './Tittles';
import Service from './Service';
import styles from '../styles/services.module.scss';

const serviceData = [
  { inverted: false, title: "Una experiencia inolvidable", paragraph: "Salimos desde San Isidro, dura tres horas e incluye paseo en velero por el Río de la Plata más comida y bebida a bordo.", pic: "service3" },
  { inverted: true, title: "Todo un barco para vos y tu grupo", paragraph: "Todos nuestros paseos son privados, no se comparte el barco con otros clientes en ningún caso.", pic: "service2" },
  { inverted: false, title: "Horarios para tu gusto", paragraph: "Salimos todos los dias en todos los horarios, podés elegir el que quieras. Si está disponible, reservamos.", pic: "service1" }
]

const Services = () => {
  return (
    <>
      <Tittles styling={{ backgroundColor: "#F3DDB4", paddingTop: "70px", paddingBottom: "25px" }} tittle='Nuestros Paseos' />
      <div className={usw(styles, ["servicios"], ["container-fluid"])}>
        {serviceData.map((i, index) => (
          <Service key={index} tittle={i.title} paragraph={i.paragraph} pic={i.pic} inverted={i.inverted}></Service>
        ))}
      </div>
    </>
  )
}

export default Services