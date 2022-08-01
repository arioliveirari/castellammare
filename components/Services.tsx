import React from 'react';
import { usc, usb, usw } from '../utils/helpers';
import Tittles from './tittles';
import Service from './Service';
import styles from '../styles/services.module.scss';
import { url } from 'inspector';

const Services = () => {
    return (
        <>

            <Tittles tittle='servicios' />
            <div className={usw(styles, ["servicios"], ["container-fluid"])}>
                <Service
                    tittle='atardecer en el rio de la plata'
                    paragraph='Una vez que subís al barco y salís al río, todos los problemas se quedan en tierra. Vení a navegar y conectate con la naturaleza.'
                    pic='../public/images/service1.jpg'
                    inverted={false}
                />
                <Service
                    tittle='Experiencia única'
                    paragraph='Navegar y mirar juntos el atardecer, puede ser una experiencia hermosa para disfrutar en pareja.'
                    pic='../public/images/service1.jpg'
                    inverted={false}
                />
                <Service
                    tittle='Disfrutar de algo g rico'
                    paragraph='Nada más lindo que disfrutar un día navegando y acompañarlo con algo rico.'
                    pic='../public/images/service1.jpg'
                    inverted={false}
                />
            </div>
        </>
    )
}

export default Services