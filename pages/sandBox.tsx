import { type } from 'os';
import React, { useState } from 'react';
import Header from '../components/globals/Header';
import OverTheFold from '../components/OverTheFold';
import styles from '../styles/sandBox.module.scss';
import { usc } from '../utils/helpers';
//import { connect } from "react-redux";

interface Props{
    text:string
}

const SandBox = (text: Props) => {
    return (
        <div className={usc(styles, ["container"])} >
            <div className={usc(styles, ["image"])} data-tooltip="persona 1" >
            </div>
        </div>
    )
}

export default SandBox;
