import React from 'react';
import Header from '../components/globals/Header';
import OverTheFold from '../components/OverTheFold';
import Form from '../components/Form';
import Footer from '../components/Footer'
import Services from '../components/Services';
import Captains from '../components/captains';
import styles from '../styles/globals.module.scss';
import { usc } from '../utils/helpers';
import Gallery from '../components/Gallery';
import Slider from '../components/Slider';
//import { connect } from "react-redux";

const Index = (props: any) => {

  return (
    <div className={usc(styles, ['main'])}>
      {/* <Header />
      <OverTheFold />
      <Wales />
      <Form />
      <Captains />
      <Services />
      <Gallery/>
      <Wales />
      <Footer /> */}
      <Slider/>
    </div>
  )
}

export default Index;


export const Wales = () => {
  return (
    <div className={usc(styles, ["wales"])}>
    </div>
  )
}