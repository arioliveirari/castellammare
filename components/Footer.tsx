import React from "react";
import { usb, usc, usw } from "../utils/helpers";
import styles from '../styles/Footer.module.scss'
import { useTranslation } from "react-i18next";
import FormCarry from "./FormCarry";
import FooterInfo from "./FooterInfo";


const Footer = () => {
    const { t, i18n } = useTranslation();
    return (
        <footer>
            <div id="CONTACT" className={usw(styles, ["footer"], ["container-fluid ", "p-0", "m-0"])} >
                <div className={usb(["container-fluid", "m-0 ", "p-0"])}>
                    <div className={usw(styles, ["formContainer"], ["row ", "p-0", "m-0"])}>
                        <div className={usb(["col-12", "p-0"])}>
                            <div className={usc(styles, ["formCarry", "m-3"])}>
                                <FormCarry />
                            </div>
                        </div>
                    </div>
                    <div className={usw(styles, ["footerContainer"], ["row ", "p-0"])}>
                        <div className={usb(["col-12", "p-0"])}>
                            {/* <div className={usc(styles, ["formCarry", "m-3"])}>
                            <FormCarry />
                        </div> */}
                            <div className={usc(styles, ["footerContent"])}>
                                <FooterInfo />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>

    )
}

export default Footer

