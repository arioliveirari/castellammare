import React, { CSSProperties, ReactElement } from "react";
import { usc, usb, usw } from '../utils/helpers';
import styles from '../styles/button.module.scss';


const ToolTip = ({ divRef, children }: { divRef: React.RefObject<any>, children: ReactElement }) => {
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
                top: divRef.current.getBoundingClientRect().top + 50,
                left: divRef.current.getBoundingClientRect().left + ((divRef.current.getBoundingClientRect().right - divRef.current.getBoundingClientRect().left) / 2),
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