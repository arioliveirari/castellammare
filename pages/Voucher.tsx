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
    const voucherInfo: Array<voucher> = [{
        name: "john does",
        date: "30/02/2004",
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
                                    <p>date of purchase:{i.date} please remember your purchase is only valid untill 30/02/2005 included</p>
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