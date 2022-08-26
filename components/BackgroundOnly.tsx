import React from 'react';
import { usc, usb, usw } from '../utils/helpers';
import Form from './Form';
import Waves from './waves';
import styles from '../styles/backgroundOnly.module.scss';
import Voucher from './Voucher';
import Header from './globals/Header';

const BackgroundOnly = ({ children }: any) => (
    <>
        <div className={usc(styles, ['OverTheFold'])}>
            <div className={usc(styles, ["mask"])}>
                <Voucher />
            </div>
        </div>
        <div className={usc(styles,["wavesContainer"])} >
            <Waves />
        </div>

    </>

);

export default BackgroundOnly;