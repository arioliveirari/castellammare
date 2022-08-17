import React, { useEffect, useState } from 'react';
import { usb, usc, usw } from "../utils/helpers";
import styles from '../styles/faq.module.scss';
import FaqItem from './FaqItem';

interface dropDownInfo {
    question: string,
    answer: string
    id: number
}
const FaqComponent = () => {
    // const [isDown, setIsDown] = useState<boolean>(false)
    // const handleClick = () => {
    //     setIsDown(!isDown)
    // }
    // const dropDownArray = [
    //     { id: 1, question: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ut.", answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ut." },
    //     { id: 2, question: "Lorem ipsum dolor sit amet, consectetur adipiscing . Praesent ut.", answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ut." },
    //     { id: 3, question: "Lorem ipsum dolor sit amet,  adipiscing elit. Praesent ut.", answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ut." },
    //     { id: 4, question: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. .", answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ut." },
    //     { id: 5, question: "Lorem sit amet, consectetur adipiscing elit. Praesent ut.", answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ut." }
    // ]


    return (
        <FaqItem />
    )
}

export default FaqComponent