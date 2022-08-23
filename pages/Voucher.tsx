import { type } from "os";
import React, { useState } from "react";
import styles from '../styles/voucher.module.scss';
import { usb, usc, usw } from "../utils/helpers";


interface voucher {
    date: string,
    id: number,
    people: number,
    total: number,
    code: string,
    validTill: string
    mail: string,
    state: string
}

const Voucher = () => {
    const current = new Date()
    const date = `${current.getDate()}/${current.getMonth() + 1}/${current.getFullYear()}`;
    const voucherInfo: Array<voucher> = [{
        date: date,
        id: 1,
        mail: "pepito123@gmail.com",
        state: "aprobado",
        people: 2,
        total: 6000,
        code: "123456",
        validTill: "23 / 8 / 2023"
    }
    ]
    return (
        <div className={usw(styles, ["voucherContainer"], ["container-fluid"])}>
            <div className={usb(["container"])}>
                <div className={usb(["row"])}>
                    <div className={usb(["col-8", "m-auto"])}>
                        <div className={usc(styles, ["content"])}>
                            <div className={usc(styles, ["tittleContainer"])}>
                                <div className={usc(styles, ["tittlePic"])}>
                                </div>
                                <div className={usc(styles, ["tittle"])}>
                                    Felicitaciones!
                                </div>
                                <div className={usc(styles, ["tittleText"])} >
                                    Ya tenes tu voucher para vivir una experiencia unica
                                </div>
                            </div>
                            {voucherInfo.map((i) => (
                                <div key={i.id} className={usc(styles, ["purchaseDataContainer"])}>
                                    <div className={usb(["row"])} >
                                        <div className={usb(["col-8", "m-auto", "p-0"])} >
                                            <div className={usc(styles, ["purchaseData"])}>
                                                <div className={usc(styles, ["leftData"])} >
                                                    <p>
                                                        fecha:
                                                    </p>
                                                    <p>
                                                        estado:
                                                    </p>
                                                    <p>
                                                        reserva a nombre de:
                                                    </p>
                                                    <p>
                                                        cantidad de personas:
                                                    </p>
                                                    <p>
                                                        total:
                                                    </p>
                                                    <p>
                                                        codigo de verificacion:
                                                    </p>
                                                    <p>
                                                        voucher valido hasta:
                                                    </p>
                                                </div>
                                                <div className={usc(styles, ["rightData"])}>
                                                    <p>
                                                        {date}
                                                    </p>
                                                    <p>
                                                        {i.state}
                                                    </p>
                                                    <p>
                                                        {i.mail}
                                                    </p>
                                                    <p>
                                                        {i.people}
                                                    </p>
                                                    <p>
                                                        {i.total}
                                                    </p>
                                                    <p>
                                                        {i.code}
                                                    </p>
                                                    <p>
                                                        {i.validTill}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                            <div className={usc(styles, ["buttonRow"])} >
                                <button className={usc(styles,["print"])} >imprimir</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Voucher