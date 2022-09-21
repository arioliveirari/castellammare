import React from 'react';
import { usc, usb, usw } from '../utils/helpers';
import Tittles from './Tittles';
import Service from './Service';
import styles from '../styles/services.module.scss';

const serviceData = [
  { inverted: false, title: "Una experiencia unica", paragraph: "Salimos desde San Isidro, la experiencia dura tres horas e incluye paseo en velero por el Río de la Plata más comida y bebida a bordo.", pic: "service3" },
  { inverted: true, title: "Todo un barco para vos y tu grupo", paragraph: "Todos nuestros paseos son privados, o sea que no se comparte el barco con otros clientes.", pic: "service2" },
  { inverted: false, title: "Horarios para tu conveniencia", paragraph: "Salimos todos los dias en todos los horarios,se reserva y cordina previamente por nuestro instagram o whataspp.", pic: "service1" }
]

const Services = () => {
  return (
    <>

      <Tittles styling={{ backgroundColor: "#fff", paddingTop:"70px", paddingBottom:"25px" }} tittle='servicios' />
      <div className={usw(styles, ["servicios"], ["container-fluid"])}>
        {serviceData.map((i,index)=>(
          <Service key={index} tittle={i.title} paragraph={i.paragraph} pic={i.pic} inverted={i.inverted}></Service>
        ))}
      </div>
    </>
  )
}

export default Services