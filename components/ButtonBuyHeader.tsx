import React from 'react';
import { usc, usb, usw } from '../utils/helpers';
import Form from './Form';
import styles from '../styles/overTheFold.module.scss';
import { useTranslation } from "react-i18next";
import { ScrollTo } from './ScrollTo';


const ButtonHeader = ({ extraClassName }: { extraClassName?: string }) => {
    const { t, i18n } = useTranslation();

    const goToForm = () => {
        ScrollTo('CONTACT')
    }
    
    const a = "serviceButton";
    const b = "active"

    const caso = extraClassName === "serviceButton" ? 1 : extraClassName === "serviceButtonActive" ? 2 : 3

    return (
        <div className='container'>
            <div className='row'>
                <div className={caso === 3 ? usc(styles, ["parentConteiner"]) : caso === 2 ? usc(styles, ["parentConteiner", "serviceButton", "active"]) : usc(styles, ["parentConteiner", "serviceButton"])}>
                    <div className={usc(styles, ["containerButton", "col-12"])}>
                        <div onClick={goToForm} className={usc(styles, ["buttonHeader"])}>
                            {t("ButtonContact.contact")}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default ButtonHeader;