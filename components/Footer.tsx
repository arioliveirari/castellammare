import React from "react";
import { usb, usc, usw } from "../utils/helpers";
import styles from '../styles/Footer.module.scss'
import { useTranslation } from "react-i18next";
import FormCarry from "./FormCarry";
import FooterInfo from "./FooterInfo";
const Footer = () => {
    const { t, i18n } = useTranslation();
    return (
        <div className={usw(styles, ["footer"], ["container-fluid "])} >
            <div className={usb(["container", "m-auto "])}>
                <div className={usw(styles, ["footerContainer"], ["row "])}>
                    <div className={usb(["col-12 "])}>
                        <div className={usc(styles, ["formCarry"])}>
                            <FormCarry />
                        </div>
                        <div className={usc(styles, ["footerContent"])}>
                            <FooterInfo />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer

