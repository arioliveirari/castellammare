import React from 'react';
import Header from '../components/globals/Header';
import OverTheFold from '../components/OverTheFold';
import Form from '../components/Form';
import styles from '../styles/globals.module.scss';
import { usc } from '../utils/helpers';
//import { connect } from "react-redux";

const Index = (props: any) => {

  return (
    <div className={usc(styles, ['main'])}>
      <Header />
      <OverTheFold />
      <Form />
    </div>
  )
}

export default Index;
