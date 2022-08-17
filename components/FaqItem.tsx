import React, { useEffect, useState } from 'react';
import { usb, usc, usw } from "../utils/helpers";
import styles from '../styles/faqItem.module.scss';
import Tittles from './Tittles';

interface dropDownInfo {
    question: string,
    answer: string
    id: number
}

const FaqItem = () => {
    const [isDown, setIsDown] = useState<boolean>(false)
    const handleClick = () => {
        setIsDown(!isDown)
    }
    const dropDownArray: Array<dropDownInfo> = [
        { id: 1, question: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ut.", answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ut." },
        { id: 2, question: "Lorem ipsum dolor sit amet, consectetur adipiscing . Praesent ut.", answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ut." },
        { id: 3, question: "Lorem ipsum dolor sit amet,  adipiscing elit. Praesent ut.", answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ut." },
        { id: 4, question: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. .", answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ut." },
        { id: 5, question: "Lorem sit amet, consectetur adipiscing elit. Praesent ut.", answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ut." }
    ]

    return (
        <div className={usw(styles, ["faqComponent"], ["container-fluid"])}>
            <div className={usb(["container"])}>
                <div className={usb(["row"])}>
                    <div className={usb(["col-12"])}>
                        <div className={usc(styles, ["content"])} >
                            {dropDownArray.map((i => (
                                <div className={usc(styles, ["dropdownItem"])} key={i.id}>
                                    <div className={usc(styles, ["question"])}>
                                        <div className={usc(styles, ["text"])}>
                                            {i.question}
                                            <img src='../images/downArrow' onClick={handleClick} className={usc(styles, [(isDown ? "rotatedArrow": "arrow")])}>
                                            </img>
                                        </div>
                                    </div>
                                    <div className={usc(styles, [(isDown) ? "isDown" : "answer"])}>
                                        <p className={usc(styles, ["text"])}>
                                            {i.answer}
                                        </p>
                                    </div>
                                </div>
                            )))}
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}
export default FaqItem