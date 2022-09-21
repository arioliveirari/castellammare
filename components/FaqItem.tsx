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
  { id: 1, isDown: false, question: "¿Tienen menú vegetariano? ¿Y vegano?", answer: "Si, ofrecemos opciones de comida vegetariana y vegana." },
  { id: 2, isDown: false, question: "¿En qué horarios son los paseos?", answer: "Salimos en todos los horarios, podés elegir el que quieras. Si está disponible, reservamos." },
  { id: 3, isDown: false, question: "¿Pueden ir menores?", answer: "La actividad es solo para mayores de 18" },
  { id: 4, isDown: false, question: "¿Con cuanta anticipacion debo reservar?", answer: "No hay un tiempo estipulado de anticipacion.depende solamente de la disponibilidad" },
  { id: 5, isDown: false, question: "¿Podemos llevar comida y/o bebida?", answer: "¡Claro que si!, pueden traer lo que quieran para comer,beber o lo que sea" }
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
        {/* <Tittles styling={{ paddingTop: "70px", backgroundColor: "#f1e6d0" }} tittle='Preguntas Frecuentes' /> */}
      <div className={usc(styles, ["title"])} >
        <p>
          Preguntas Frecuentes
        </p>
      </div>
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
                    <div className={usw(styles,["answerRow"],["row"])}>
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