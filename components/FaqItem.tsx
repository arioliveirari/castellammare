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
        { id: 1, question: "como reservo un tour con Tu experiencia", answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam beatae modi exercitationem, quasi veritatis repudiandae possimus alias minima." },
        { id: 2, question: "que servicios incluye mi tour", answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam beatae modi exercitationem, quasi veritatis repudiandae possimus alias minima." },
        { id: 3, question: "como reservo un tour com Tu experiencia", answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam beatae modi exercitationem, quasi veritatis repudiandae possimus alias minima." },
        { id: 4, question: "que servicios incluye mi tour", answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam beatae modi exercitationem, quasi veritatis repudiandae possimus alias minima." },
        { id: 5, question: "como me contacto por problemas con mi reserva", answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam beatae modi exercitationem, quasi veritatis repudiandae possimus alias minima." }
    ]

    return (
        <>
            <div className={usw(styles, ["faqComponent"], ["container-fluid"])}>
                <Tittles tittle='Preguntas Frecuentes' />
                <div className={usb(["container"])}>
                    <div className={usb(["row"])}>
                        <div className={usb(["col-12"])}>
                            <div className={usc(styles, ["content"])} >
                                {dropDownArray.map((i => (
                                    <div className={usc(styles, ["dropdownItem"])} key={i.id}>
                                        <div className={usc(styles, ["question"])}>
                                            <div className={usc(styles, ["text"])}>
                                                <span onClick={handleClick} className={(isDown)? "icon-chevron_right rotatedArrow" : "icon-chevron_right" }>
                                                </span>
                                                {i.question}
                                            </div>
                                        </div>
                                        <div className={usb(["row"])}>
                                            <div className={usb(["col-md-9"])}>
                                                <div className={usc(styles, [(isDown) ? "isDown" : "answer"])}>
                                                    <p className={usc(styles, ["text"])}>
                                                        {i.answer}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )))}
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </>
    )
}
export default FaqItem