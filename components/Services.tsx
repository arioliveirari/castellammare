import React from 'react';
import { usc, usb, usw } from '../utils/helpers';
import Tittles from './tittles';
import Service from './Service';
import styles from '../styles/services.module.scss';

const Services = () => {
    return (
        <>

            <Tittles tittle='servicios' />
            <div className={usw(styles, ["servicios"], ["container-fluid"])}>
                <div className={usb(["container"])}>
                    <div className={usb(["row"])}>
                    </div>
                    <div className={usb(["row"])} >
                        <div className={usb(["col-md6", "col-12"])}>
                            <Service
                                tittle='atardecer en el rio de la plata'
                                text='Una vez que subís al barco y salís al río, todos los problemas se quedan en tierra. Vení a navegar y conectate con la naturaleza.'
                                pic='public\images\background.jpg'
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Services