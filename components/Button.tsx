import React, { ReactElement } from "react";
import { usc, usb, usw } from '../utils/helpers';
import styles from '../styles/button.module.scss';
import ToolTip from "./ToolTip";


export type ButtonProps = {
  onClick: Function,
}
const Button = ({ onClick }: ButtonProps) => {
  const buttonRef = React.useRef<HTMLDivElement>(null)
  return (
    <>
      <div ref={buttonRef} onClick={() => onClick()} className={usc(styles, ["reservar"])} >
        <p>adquirir voucher</p>
      </div>
      <ToolTip  divRef={buttonRef}><p className={usc(styles,["toolTipText"])} >contactanos para consultar disponibilidad</p></ToolTip>
    </>
  )
}
export default Button