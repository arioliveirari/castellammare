import React from 'react';
import Head from 'next/head';
import { usb, usc, usw } from '../../utils/helpers';
import styles from '../../styles/headers.module.scss';

const Header = ({ children }: any) => (
  <div className={usw(styles, ['Header'], ['container-fluid'])}>
    <Head>
      <title>Baires navega!</title>
      <meta name="description" content="Baires navega" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <div className={usb(["container"])}>
      <div className={usb(["row"])}>
        <div className={usb(["col-l-12"])}>
          {/*Header Desktop */}
          <div className={usc(styles, ["header-desktop"])}>
            <Logo />
            <Links />
          </div>

          {/*Header Mobile */}
          <div className={usc(styles, ["header-mobile"])}>
            <Logo />
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Header;

const Links = () => (
  <div className={usc(styles, ["links"])} >
    <a href="#" className={usc(styles, ["reserva"])} >Reservar</a>
    <a href="#">Sobre nosotros</a>
    <a href="#">Servicios</a>
    <div className={usc(styles, ["icons"])}>
      <a href="#">whatsapp</a>
      <a href="#">Instagram</a>
      <a href="#">Email</a>
    </div>
  </div>
)

const Logo = () => (
  <p className={usc(styles, ["logo"])}>
    Baires Navega
  </p>
);

