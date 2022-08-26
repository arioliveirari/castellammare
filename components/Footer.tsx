import React from "react";
import { usb, usc, usw } from "../utils/helpers";
import styles from '../styles/Footer.module.scss'

const Footer = () => {
    return (
        <div className={usw(styles, ["footer"], ["container-fluid"])} >
            <div className={usb(["container", "m-auto"])}>
                <div className={usw(styles, ["footerContainer"], ["row"])}>
                    <div className={usb(["col-12"])} >
                        <div className={usc(styles, ["desktopContent"])} >
                            <div className={usc(styles, ["logoContainer"])}>
                                <Logo />
                                <ul>
                                    <a href="#"><li>sobre nosotros</li></a>
                                    <a href="#"><li>servicios</li></a>
                                    <a href="#"><li>reservar</li></a>
                                </ul>
                            </div>
                            <div className={usc(styles, ["iconContainer"])}>
                                <Icons />
                            </div>
                            <div>
                                <p className={usc(styles, ["copyrigth"])}>
                                    © Copyright 2020 by BairesNavega
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
                                © Copyright 2020 by BairesNavega
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
        <img src="/images/logo.svg" alt='' className={usc(styles, ["logoPic"])} />
        <div className={usc(styles, ["logoText"])}>
            Baires
            <br />
            navega
        </div>
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
            <a href="">
                <div className={usc(styles, ["linkBtn"])}>
                    <span className="icon-mail" />
                </div>
            </a>
        </div>

    </div>
)