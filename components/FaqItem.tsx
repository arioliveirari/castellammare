import React, { useEffect, useState } from 'react';
import { usb, usc, usw } from "../utils/helpers";
import styles from '../styles/faqItem.module.scss';
import Tittles from './Tittles';

interface dropDownInfo {
  question: string,
  answer: string
  id: number
  isDown: boolean
}
const dropDownArray: Array<dropDownInfo> = [
  { id: 1, isDown: false, question: "como reservo un tour con Tu experiencia", answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut quis cursus arcu. Donec mollis sagittis risus at sollicitudin. A fermentum urna pharetra eget. Quisque dictum, tortor eget commodo auctor, urna velit placerat dui, at convallis nunc libero id ipsum." },
  { id: 2, isDown: false, question: "que servicios incluye mi tour", answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam beatae modi exercitationem, quasi veritatis repudiandae possimus alias minima." },
  { id: 3, isDown: false, question: "como reservo un tour com Tu experiencia", answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam beatae modi exercitationem, quasi veritatis repudiandae possimus alias minima." },
  { id: 4, isDown: false, question: "que servicios incluye mi tour", answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam beatae modi exercitationem, quasi veritatis repudiandae possimus alias minima." },
  { id: 5, isDown: false, question: "como me contacto por problemas con mi reserva", answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam beatae modi exercitationem, quasi veritatis repudiandae possimus alias minima." }
]

const FaqItem = () => {
  const [items, setItems] = useState(dropDownArray)

  const handleClick = (index: number) => {
    const newItems = [...items];
    newItems[index].isDown = !newItems[index].isDown;
    setItems(newItems)
  }
  

  return (
    <>
      <Tittles styling={{ backgroundColor: "#f1e6d0" }} tittle='Preguntas Frecuentes' />
      <div className={usw(styles, ["faqComponent"], ["container-fluid"])}>
        <div className={usb(["container"])}>
          <div className={usb(["row"])}>
            <div className={usb(["col-12"])}>
              <div className={usc(styles, ["content"])} >
                {items.map((i, index) => (
                  <div className={usc(styles, ["dropdownItem"])} onClick={() => handleClick(index)} key={i.id}>
                    <div className={usc(styles, ["question"])} >
                      <div className={usc(styles, ["text"])}>
                        <span className={(i.isDown) ? "icon-chevron_right rotatedArrow" : "icon-chevron_right"}>
                        </span>
                        <p>
                          {i.question}
                        </p>
                      </div>
                    </div>
                    <div className={usb(["row"])}>
                      <div className={usb(["col-md-10"])}>
                        <div className={usc(styles, [(i.isDown) ? "isDown" : "answer"])}>
                          <p className={usc(styles, ["text"])}>
                            {i.answer}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div >
    </>
  )
}
export default FaqItem