import React from 'react';
import Head from 'next/head';
import { usb, usc } from '../../utils/helpers';
import styles from '../../styles/headers.module.scss';

const Header = ({ children }: any) => (
  <div className={usc(styles, ['Header'])}>
    <Head>
      <title>Baires navega!</title>
      <meta name="description" content="Baires navega" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <p className={usc(styles, ["logo"])}>
      Baires Navega
    </p>
    <div className={usc(styles,["links"])} >
      <a href="#">Sobre nosotros</a>
      <a href="#">Servicios</a>
      <a href="#">Reservar</a>
    </div>

    <div className={usc(styles, ["icons"])}>
      <a href="#">whatsapp</a>
      <a href="#">Instagram</a>
      <a href="#">Email</a>
    </div>
  </div>
);

export default Header;