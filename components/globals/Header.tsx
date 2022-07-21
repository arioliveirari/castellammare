import React from 'react';
import Head from 'next/head';
import { usb, usc } from '../../utils/helpers';
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0" />
import styles from '../../styles/headers.module.scss';

const Header = ({ children }: any) => (
  <div className={usc(styles, ['Header'])}>
    <Head>
      <title>Baires navega!</title>
      <meta name="description" content="Baires navega" />
      <link rel="icon" href="/favicon.ico" />
      <script src="https://kit.fontawesome.com/78b8c96f09.js" crossOrigin="anonymous"></script>
    </Head>
    <p className={usc(styles, ["logo"])}>
      Baires Navega
    </p>
    <div className={usc(styles, ["links"])}>
      <div className={usc(styles, ["contentLinks"])}>
        <a href="#">Sobre nosotros</a>
        <a href="#">Servicios</a>
        <a href="#">Reservar</a>
      </div>
    </div>

    <div className={usc(styles, ["icons"])}>
      <div>
        <a href="#">
          {/* <i className={usc(styles, ["fa-brands fa-whatsapp"])}>
        </i> */}
          whatsapp
        </a>
        <a href="#">
          {/* <i className={usc(styles, ["fa-brands fa-instagram"])}>
        </i> */}
          instagram
        </a>
        <a href="#">
          {/* <i className={usc(styles, ["fa-brands fa-envelope"])}>
        </i> */}
          email
        </a>
      </div>
    </div>
  </div>
);

export default Header;