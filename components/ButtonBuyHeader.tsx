import React from 'react';
import { usc, usb, usw } from '../utils/helpers';
import Form from './Form';
import styles from '../styles/buttonHeader.module.scss';
import { useTranslation } from "react-i18next";


const ButtonHeader = ({ children }: any) => {
    const { t, i18n } = useTranslation();

    const goToForm = () => {

    }

    return (
        <div className='container'>
            <div className='row'>
                <div className={usc(styles, ["parentConteiner"])}>
                    <div className={usc(styles, ["containerButton", "col-12"])}>
                        <div onClick={goToForm} className={usc(styles, ["buttonHeader"])}>
                            Contactanos!
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default ButtonHeader;