import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import { usb, usc, usw } from '../../utils/helpers';
import styles from '../../styles/headers.module.scss';
import ToolTip from '../ToolTip';

const Header = ({ children }: any) => {
  // bg change when scrolling
  const [transparent, setTransparent] = React.useState<boolean>(false);


  if (typeof window !== 'undefined') {
    const changeColor = () => {
      if (window.scrollY > 1) {
        setTransparent(true)
      } else {
        setTransparent(false)
      }

    }
    window.addEventListener("scroll", changeColor)
  }







  return (
    <div className={(transparent) ? usw(styles, ["Header", "active"], ["container-fluid", "p-0"]) : usw(styles, ["Header"], ["container-fluid"])} >
      <Head>
        <title>Baires navega</title>
        <meta name="description" content="Conectate con el Río de la Plata de la manera más linda: Navegando a vela." />
        <link rel="icon" href="/public/images/barco.ico" />
      </Head>
      <div className={usb(["container"])}>
        <div className={usb(["row"])}>
          <div className={usb(["col-l-6", "col-md-12", "p-0"])}>
            {/*Header Desktop */}
            <div className={usc(styles, ["header-desktop"])}>
              <Logo />
              <Links />
            </div>

            {/*Header Mobile */}
            <div className={usc(styles, ["header-mobile"])}>
              <Logo />
              <a href='#form' className={usc(styles, [(transparent) ? "reserva" : "noDisplay"])}><p>ADQUIRIR VOUCHER</p></a>
              <div className={usc(styles, ["icons"])}>
                <a href="https://www.instagram.com/bairesnavega/?hl=es" target={"_blank"} rel="noreferrer" >
                  <div className={usc(styles, ["linkBtn"])}>
                    <span className="icon-instagram" />
                  </div>
                </a>
                <a href="https://wa.me/+5401121863402" target={"_blank"} rel="noreferrer">
                  <div className={usc(styles, ["linkBtn"])}>
                    <span className="icon-wpp" />
                  </div>
                </a>
                {/*
                <div className={usc(styles, ["linkBtn"])}>
                  <span className="icon-mail" />
                </div>
                */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div >

  )


}




export default Header;


const Links = () => {
  const contactRef = React.useRef<HTMLAnchorElement>(null)
  return (
    <>
      <div className={usc(styles, ["links"])} >
        <a href="#" className={usc(styles, ["reserva"])} >Adquirir Voucher</a>
        <div className={usc(styles, ["icons"])}>
          <a href="https://www.instagram.com/bairesnavega/?hl=es" target={"_blank"} rel="noreferrer" >
            <div className={usc(styles, ["linkBtn"])}>
              <span ref={contactRef} className="icon-instagram" />
            </div>
          </a>
          <a href="https://wa.me/+5401121863402" target={"_blank"} rel="noreferrer">
            <div className={usc(styles, ["linkBtn"])}>
              <span className="icon-wpp" />
            </div>
          </a>
        </div>
      </div>
      <ToolTip topValue={50} leftValue={2} divRef={contactRef}><p className={usc(styles, ["tootlTipText"])}>contactanos para consultar <br /> disponibilidad</p></ToolTip>
    </>
  )
}


const Logo = () => (
  <div className={usc(styles, ["logo"])}>
    <div className={usc(styles, ["logoPic"])} > </div>
  </div>
);

