import React from 'react';
import { usc, usb, usw } from '../utils/helpers';
import styles from '../styles/form.module.scss';

const Form = ({ children }: any) => (
    <div className={usw(styles, ['formComponent'], ["container-fluid"])}>
        <div className={usb(['container'])}>
            <div className={usb(["row"])}>
                <div className={usb(["col-md-10", "col-12", 'm-auto'])}>
                    <div className={usc(styles, ["content"])}>
                        <div className={usc(styles, ["left"])}>
                            <div className={usc(styles, ["kiwi"])}>
                                kiwi
                            </div>
                            <div className={usc(styles, ["mango"])}>
                                mango
                            </div>
                        </div>
                        <div className={usc(styles, ["rigth"])} >
                            <div className={usc(styles,["form"])}>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
);
export default Form