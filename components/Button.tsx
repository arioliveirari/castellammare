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
        <p>ADQUIRIR VOUCHER</p>
      </div>
      <ToolTip top={0} left={0}  divRef={buttonRef}><p className={usc(styles,["toolTipText"])} >contactanos para consultar <br /> disponibilidad</p></ToolTip>
    </>
  )
}
export default Button