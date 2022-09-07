import React, { CSSProperties, ReactElement, useEffect, useState } from "react";
import { usc, usb, usw } from '../utils/helpers';
import styles from '../styles/button.module.scss';




const ToolTip = ({ divRef, children, topValue, leftValue }: { divRef: React.RefObject<any>, children: ReactElement, topValue:number, leftValue:number }) => {
   

const top = topValue
const left = leftValue
    const [active, setActive] = React.useState(false);
    React.useEffect(() => {
        if (divRef && divRef.current) {
            divRef.current.addEventListener("mouseenter", () => {
                setActive(true)
            })
            divRef.current.addEventListener("mouseout", () => {
                setActive(false)
            })
        }
    }, [divRef])

    const buildPosition = () => {
        if (active && divRef && divRef.current) {
            return {
                top: divRef.current.getBoundingClientRect().top + top,
                left: divRef.current.getBoundingClientRect().left + ((divRef.current.getBoundingClientRect().right - divRef.current.getBoundingClientRect().left) / left ),
            }
        } else {
            return {
            }
        }
    }
    return (
        <div className={usc(styles, ["ToolTip", active ? "shown" : 'hide'])} style={buildPosition()} >
            {children}
        </div>
    )
}

export default ToolTip