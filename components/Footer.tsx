import React from "react";
import { usb, usc, usw } from "../utils/helpers";
import styles from '../styles/Footer.module.scss'
import { useTranslation } from "react-i18next";
const Footer = () => {
    const { t, i18n } = useTranslation();
    return (
        <div className={usw(styles, ["footer"], ["container-fluid"])} >
            <div className={usb(["container", "m-auto"])}>
                <div className={usw(styles, ["footerContainer"], ["row"])}>
                    <div className={usb(["col-12"])} >
                        <div className={usc(styles, ["desktopContent"])} >
                            <div className={usc(styles, ["logoContainer"])}>
                                <Logo />
                                <a href='#form' className={usc(styles, ["reserva"])}><p>{t("Footer.getExperience")}</p></a>
                            </div>
                            <div className={usc(styles, ["iconContainer"])}>
                                <Icons />
                            </div>
                            <div>
                                <p className={usc(styles, ["copyrigth"])}>
                                {t("Footer.copyrigth")}
                                </p>
                            </div>
                        </div>

                        <div className={usc(styles, ["mobileContent"])} >
                            <div className={usc(styles, ["iconContainer"])}>
                                <Icons />
                            </div>
                            <div className={usc(styles, ["logoContainer"])}>
                                <Logo />
                            </div>
                            <p className={usc(styles, ["copyrigth"])}>
                            {t("Footer.copyrigth")}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer

const Logo = () => (
    <div className={usc(styles, ["logo"])}>
        <div className={usc(styles, ["logoPic"])} > </div>
    </div>
);
const Icons = () => (
    <div className={usc(styles, ["links"])} >
        <div className={usc(styles, ["icons"])}>
            <a href="#">
                <div className={usc(styles, ["linkBtn"])}>
                    <span className="icon-instagram" />
                </div>
            </a>
            <a href="">
                <div className={usc(styles, ["linkBtn"])}>
                    <span className="icon-wpp" />
                </div>
            </a>

        </div>

    </div>
)