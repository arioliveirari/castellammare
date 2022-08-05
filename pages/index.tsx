import React from 'react';
import Header from '../components/globals/Header';
import OverTheFold from '../components/OverTheFold';
import Form from '../components/Form';
import Footer from '../components/Footer'
import Services from '../components/Services';
import Captains from '../components/captains';
import styles from '../styles/globals.module.scss';
import { usc } from '../utils/helpers';
import Waves from '../components/waves';
import Gallery from '../components/Gallery';
import Slider from '../components/Slider';
import Slide from '../components/slide';
//import { connect } from "react-redux";

const Index = (props: any) => {

  return (
    <div className={usc(styles, ['main'])}>
      <Header />
      <OverTheFold />
      <Waves />
      <Form />
      <Captains />
      <Services />
      <Gallery />
      <Waves />
      <Footer />
     
      <Slide />
    </div>
  )
}

export default Index;


