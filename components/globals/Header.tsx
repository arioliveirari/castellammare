import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import { usb, usc, usw } from '../../utils/helpers';
import styles from '../../styles/headers.module.scss';

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
    <div className={(transparent) ? usw(styles, ["Header", "active"], ["container-fluid"]) : usw(styles, ["Header"], ["container-fluid"])} >
      <Head>
        <title>Baires navega!</title>
        <meta name="description" content="Baires navega" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={usb(["container"])}>
        <div className={usb(["row"])}>
          <div className={usb(["col-l-6", "col-md-12"])}>
            {/*Header Desktop */}
            <div className={usc(styles, ["header-desktop"])}>
              <Logo />
              <Links />
            </div>

            {/*Header Mobile */}
            <div className={usc(styles, ["header-mobile"])}>
              <Logo />
              <a href="#" className={usc(styles, ["reserva"])}><p>Reservar</p></a>
              <div className={usc(styles, ["icons"])}>
                <div className={usc(styles, ["linkBtn"])}>
                  <span className="icon-instagram" />
                </div>
                <div className={usc(styles, ["linkBtn"])}>
                  <span className="icon-wpp" />
                </div>
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

const Links = () => (
  <div className={usc(styles, ["links"])} >
    <a href="#" className={usc(styles, ["reserva"])} >Reservar</a>
    <a href="#" className={usc(styles, ["headerLink"])}>Sobre nosotros</a>
    <a href="#" className={usc(styles, ["headerLink"])}>Servicios</a>
    <div className={usc(styles, ["icons"])}>
      <div className={usc(styles, ["linkBtn"])}>
        <span className="icon-instagram" />
      </div>
      <div className={usc(styles, ["linkBtn"])}>
        <span className="icon-wpp" />
      </div>
      {/*
      <div className={usc(styles, ["linkBtn"])}>
        <span className="icon-mail" />
      </div>
      */}
    </div>
  </div>
)


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

