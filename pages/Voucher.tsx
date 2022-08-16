import { type } from "os";
import React, { useState } from "react";
import styles from '../styles/voucher.module.scss';
import { usb, usc, usw } from "../utils/helpers";


interface voucher {
    name: string;
    date: string,
    id: number
}

const Voucher = () => {
    const current = new Date()
    const date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;
    const voucherInfo: Array<voucher> = [{
        name: "john does",
        date: date,
        id: 1
    }
    ]
    return (
        <div className={usw(styles, ["voucherContainer"], ["container-fluid"])}>
            <div className={usb(["container"])}>
                <div className={usb(["row"])}>
                    <div className={usb(["col-12"])}>
                        <div className={usc(styles, ["content"])}>
                            {voucherInfo.map(i => (
                                <div key={i.id}>
                                    <p>name:{i.name}</p>
                                    <p>date of purchase:{i.date} please remember your purchase is only valid for the next 365</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Voucher