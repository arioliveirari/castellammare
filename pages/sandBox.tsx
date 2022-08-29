import { type } from 'os';
import React, { useState } from 'react';
import Header from '../components/globals/Header';
import OverTheFold from '../components/OverTheFold';
import styles from '../styles/sandBox.module.scss';
import { usc } from '../utils/helpers';
//import { connect } from "react-redux";



const SandBox = (props: any) => {
    return (
        <div className={usc(styles, ["container"])}>
            <div className={usc(styles, ["mask"])} >

            </div>
        </div>
    )
}

export default SandBox;
