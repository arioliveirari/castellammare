import React from 'react';
import { usc, usb, usw } from '../utils/helpers';
import Tittles from './Tittles';
import Service from './Service';
import styles from '../styles/services.module.scss';

const serviceData = [
  { inverted: false, title: "Atardecer en el rio de la plata", paragraph: "Una vez que te subis al barco todos los problemas se quedan en tierra, venia a navegar y conectate con la naturaleza", pic: "service1" },
  { inverted: true, title: "Experiencia unica", paragraph: "Navegar y mirar juntos el atardecer, puede ser una experiencia hermosa para disfrutar en pareja.", pic: "service2" },
  { inverted: false, title: "Disfrutar de algo rico", paragraph: "Nada más lindo que disfrutar un día navegando y acompañarlo con algo rico.", pic: "service3" }
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