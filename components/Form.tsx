import React from 'react';
import { usc, usb, usw } from '../utils/helpers';
import styles from '../styles/form.module.scss';

const Form = ({ children }: any) => (
    <div className={usw(styles, ['formComponent'], ["container-fluid"])}>
        <div className={usb(['container'])}>
            <div className={usb(["row"])}>
                <div className={usb(["col-md-10", "col-12"])}>
                    <div className={usc(styles, ["content"])}>
                        <div className={usc(styles, ["picContainer"])} >
                            <div className={usc(styles, ["kiwi"])}></div>
                            <div className={usc(styles, ["mango"])}></div>
                        </div>


                        <div className={usc(styles, ["form"])}>
                            <div className={usc(styles, ["formText"])}>
                                <div className={usc(styles, ["formTittle"])} >
                                    vivi una experiencia
                                </div>
                                <div className={usc(styles, ["formParagraph"])} >
                                    unica
                                </div>

                            </div>
                            <div className={usc(styles, ["formInput"])} >
                                aaa
                            </div>
                            <div className={usc(styles, ["formInput"])} >
                                aaa
                            </div>
                            <div className={usc(styles, ["formInput"])} >
                                aaa
                            </div>
                            <p>
                                Lorem Ipsum dolor sit amet consecteur?
                            </p>

                        </div>

                    </div>
                </div>
            </div>
        </div>
    </div>
);
export default Form