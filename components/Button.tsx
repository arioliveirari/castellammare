import React from "react";
import { usc, usb, usw } from '../utils/helpers';
import styles from '../styles/button.module.scss';
import { type } from "os";

const Button = ({ onClick }: { onClick: Function }) => {
  return (
    <div className={usc(styles, ["reservar"])} >
      <a href="#" onClick={() => onClick()} >Reservar</a>
    </div>
  )
}

export default Button