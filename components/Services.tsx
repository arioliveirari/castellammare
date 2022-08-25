import React from 'react';
import { usc, usb, usw } from '../utils/helpers';
import Tittles from './Tittles';
import Service from './Service';
import styles from '../styles/services.module.scss';

const Services = () => {
  return (
    <>

      <Tittles background={ {backgroundColor: "#fff"}} tittle='servicios'/>
      <div className={usw(styles, ["servicios"], ["container-fluid"])}>
        <Service
          tittle='atardecer en el rio de la plata'
          paragraph='Una vez que subís al barco y salís al río, todos los problemas se quedan en tierra. Vení a navegar y conectate con la naturaleza.'
          pic='service1'
          inverted={false}
        />
        <Service
          tittle='Experiencia única'
          paragraph='Navegar y mirar juntos el atardecer, puede ser una experiencia hermosa para disfrutar en pareja.'
          pic='service2'
          inverted={true}
        />
        <Service
          tittle='Disfrutar de algo g rico'
          paragraph='Nada más lindo que disfrutar un día navegando y acompañarlo con algo rico.'
          pic='service3'
          inverted={false}
        />
      </div>
    </>
  )
}

export default Services