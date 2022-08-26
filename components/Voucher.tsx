
import React, { useRef, useState } from "react";
import { useReactToPrint } from "react-to-print";
import styles from '../styles/voucher.module.scss';
import { usb, usc, usw } from "../utils/helpers";
import { useRouter } from 'next/router'

interface voucher {
  date: string,
  id: string,
  people: string,
  total: string,
  code: string,
  validTill: string
  mail: string,
  state: string
}

const _voucherInfo: voucher = {
  date: 'date',
  id: "12",
  mail: "pepito123@gmail.com",
  state: "aprobado",
  people: "2",
  total: "6000",
  code: "123456",
  validTill: 'validDate'
};


const Voucher = () => {
  const [voucherInfo, setVoucherInfo] = React.useState(_voucherInfo)
  const router = useRouter();


  const voucherRef = useRef<HTMLInputElement>(null);
  const handlePrint = useReactToPrint({
    content: () => voucherRef.current,
    documentTitle: "Voucher Baires Navega",
    onAfterPrint: () => alert("felicitaciones, ya estas listo para una experiencia unica")
  })

  const current = new Date()
  const date = `${current.getDate()}/${current.getMonth() + 1}/${current.getFullYear()}`;
  const validDate = `${current.getDate()}/${current.getMonth() + 1}/${current.getFullYear() + 1}`


  React.useEffect(() => {
    const {
      collection_id,
      collection_status,
      payment_id,
      status,
      external_reference,
      payment_type,
      merchant_order_id,
      preference_id,
      site_id,
      processing_mode
    } = router.query;
    
    setVoucherInfo({
      date: `${payment_id}`,
      id: `${payment_id}`,
      mail: `a ver como hacemos`,
      state: `${collection_status}`,
      people: `${payment_id}`,
      total: `${preference_id}`,
      code: `${payment_id}`,
      validTill: `${site_id}`,
    })
  }, [router.query])

  const drawClassForStatus = (status: string) => {
    if(status === "approved") return 'approved'
    if(status === "canceled") return 'canceled'
    if(status === "pending") return 'pending'
    return ''
  }
  return (
    <div ref={voucherRef} className={usw(styles, ["voucherContainer"], ["container-fluid"])}>
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
                    <div key={voucherInfo.id} className={usc(styles, ["purchaseContent"])}>
                      <div className={usb(["row"])} >
                        <div className={usw(styles, ["dataContent"], ["col-12"])} >
                          <div key={voucherInfo.id}>
                            <div className={usc(styles, ["data"])}>
                              <p className={usc(styles, ["left"])} >fecha</p>
                              <p>{voucherInfo.date}</p>
                            </div>
                            <div className={usc(styles, ["data"])}>
                              <p className={usc(styles, ["left"])} >estado:</p>
                              <p className={usc(styles, [drawClassForStatus(voucherInfo.state)])} >{voucherInfo.state}</p>
                            </div>
                            <div className={usc(styles, ["data"])}>
                              <p className={usc(styles, ["left"])} >reserva a nombre de:</p>
                              <p>{voucherInfo.mail}</p>
                            </div>
                            <div className={usc(styles, ["data"])}>
                              <p className={usc(styles, ["left"])} >cantidad de personas:</p>
                              <p>{voucherInfo.people}</p>
                            </div>
                            <div className={usc(styles, ["data"])}>
                              <p className={usc(styles, ["left"])} >total:</p>
                              <p>{voucherInfo.total}</p>
                            </div>
                            <div className={usc(styles, ["data"])}>
                              <p className={usc(styles, ["left"])} >codigo de verificación:</p>
                              <p>{voucherInfo.code}</p>
                            </div>
                            <div className={usc(styles, ["data"])}>
                              <p className={usc(styles, ["left"])} >valido hasta:</p>
                              <p>{voucherInfo.validTill}</p>
                            </div>
                          </div>

                        </div>
                      </div>
                    </div>

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