import { type } from "os";
import React, { useRef, useState } from "react";
import { useReactToPrint } from "react-to-print";
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
    const voucherRef = useRef<HTMLInputElement>(null);
    const handlePrint = useReactToPrint({
        content: () => voucherRef.current,
        documentTitle: "Voucher Baires Navega",
        onAfterPrint: () => alert("felicitaciones, ya estas listo para una experiencia unica")
    })
  
    const current = new Date()
    const date = `${current.getDate()}/${current.getMonth() + 1}/${current.getFullYear()}`;
    const validDate = `${current.getDate()}/${current.getMonth() + 1}/${current.getFullYear() + 1}`
    const voucherInfo: Array<voucher> = [{
        date: date,
        id: 1,
        mail: "pepito123@gmail.com",
        state: "aprobado",
        people: 2,
        total: 6000,
        code: "123456",
        validTill: validDate
    }
    ]
    return (
        <div ref={voucherRef}  className={usw(styles, ["voucherContainer"], ["container-fluid"])}>
            <div className={usb(["container"])}>
                <div className={usb(["row"])}>
                    <div className={usb(["col-lg-10", "m-auto"])}>
                        <div className={usc(styles, ["content"])} >
                            <div id="bannerContainer" className={usc(styles, ["bannerContainer"])}>
                                <span className="icon-barco"></span>
                                <div className={usc(styles, ["titleContainer"])}>
                                    <p>felicitaciones!</p>
                                </div>
                                <div className={usc(styles, ["bannerTextContainer"])}>
                                    <p>ya tenes tu voucher para vivir una experiencia unica!</p>
                                </div>
                            </div>
                            <div className={usc(styles, ["purchaseData"])}>
                                <div className={usb(["row"])} >
                                    <div className={usb(["col-6", "m-auto"])} >
                                        {voucherInfo.map((i) => (
                                            <div key={i.id} className={usc(styles, ["purchaseContent"])}>
                                                <div className={usb(["row"])} >
                                                    <div className={usw(styles, ["dataContent"], ["col-12"])} >
                                                        {voucherInfo.map((i) => (
                                                            <div key={i.id}>
                                                                <div className={usc(styles, ["data"])}>
                                                                    <p className={usc(styles, ["left"])} >fecha</p>
                                                                    <p>{i.date}</p>
                                                                </div>
                                                                <div className={usc(styles, ["data"])}>
                                                                    <p className={usc(styles, ["left"])} >estado:</p>
                                                                    <p>{i.state}</p>
                                                                </div>
                                                                <div className={usc(styles, ["data"])}>
                                                                    <p className={usc(styles, ["left"])} >reserva a nombre de:</p>
                                                                    <p>{i.mail}</p>
                                                                </div>
                                                                <div className={usc(styles, ["data"])}>
                                                                    <p className={usc(styles, ["left"])} >cantidad de personas:</p>
                                                                    <p>{i.people}</p>
                                                                </div>
                                                                <div className={usc(styles, ["data"])}>
                                                                    <p className={usc(styles, ["left"])} >total:</p>
                                                                    <p>{i.total}</p>
                                                                </div>
                                                                <div className={usc(styles, ["data"])}>
                                                                    <p className={usc(styles, ["left"])} >codigo de verificación:</p>
                                                                    <p>{i.code}</p>
                                                                </div>
                                                                <div className={usc(styles, ["data"])}>
                                                                    <p className={usc(styles, ["left"])} >valido hasta:</p>
                                                                    <p>{i.validTill}</p>
                                                                </div>
                                                            </div>
                                                        ))}
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                            <div className={usc(styles, ["buttonRow"])}>
                                <button onClick={handlePrint} > imprimir </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Voucher