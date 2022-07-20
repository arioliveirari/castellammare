import React from 'react';
import Head from 'next/head';
import { usc } from '../../utils/helpers';
import styles from '../../styles/headers.module.scss';

const Header = ({ children }: any) =>  (
  <div className={usc(styles,['Header'])}>
    <Head>
      <title>Baires navega!</title>
      <meta name="description" content="Baires navega" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
  </div>
);

export default Header;