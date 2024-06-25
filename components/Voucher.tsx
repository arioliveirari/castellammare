
import React, { useRef, useState } from "react";
import { useReactToPrint } from "react-to-print";
import styles from '../styles/voucher.module.scss';
import { usb, usc, usw } from "../utils/helpers";
import { useRouter } from 'next/router'
import { useTranslation } from "react-i18next";

const parseDate = (input: Date) => {
  // new Date(year, month [, day [, hours[, minutes[, seconds[, ms]]]]])
  //@ts-ignore
  return `${input.getDate()}-${input.getMonth() + 1}-${input.getFullYear() + 1}`; // Note: months are 0-based
}

interface voucher {
  id: string,
  total?: string,
  code: string,
  people?: string,
  validTill: string
  contact?: string,
  state: string
}

const _voucherInfo: voucher = {
  id: "",
  contact: undefined,
  total: undefined,
  people: undefined,
  state: "",
  code: "",
  validTill: parseDate(new Date())
};

let alreadySend = 1;

const Voucher = () => {
  const { t, i18n } = useTranslation();

  const formRef = React.useRef<HTMLFormElement>(null);

  const [voucherInfo, setVoucherInfo] = React.useState(_voucherInfo)
  const router = useRouter();
  React.useEffect(() => {
    const c = localStorage.getItem("baries-contact");
    const t = localStorage.getItem("baries-price");
    const p = localStorage.getItem("baries-people");
    if (c) { voucherInfo.contact = c; }
    if (t) { voucherInfo.total = `$${t}`; }
    if (p) { voucherInfo.people = p; }
    setVoucherInfo({ ...voucherInfo })
    // sendForm({ ...voucherInfo })
    //@ts-ignore

  }, [])


  const voucherRef = useRef<HTMLInputElement>(null);
  const handlePrint = useReactToPrint({
    content: () => voucherRef.current,
    documentTitle: "Voucher Baires Navega",
    onAfterPrint: () => console.log("felicitaciones, ya estas listo para una experiencia inolvidable")
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
    //@ts-ignore
    voucherInfo.id = payment_id;
    //@ts-ignore
    voucherInfo.code = payment_id;
    //@ts-ignore
    voucherInfo.state = status;
    setVoucherInfo({ ...voucherInfo })
    const send = localStorage.getItem("baries-sendForm");
    if (send == "true") {
      setTimeout(() => {
        if (formRef && formRef.current && alreadySend) {
          localStorage.setItem("baries-sendForm", "false");
          alreadySend = 0;
          formRef.current.submit();
        }
      }, 2000)
    }
  }, [router.query])

  const drawClassForStatus = (status: string) => {
    if (status === "approved") return 'approved'
    if (status === "canceled") return 'canceled'
    if (status === "pending") return 'pending'
    return ''
  }

  return (
    <div ref={voucherRef} className={usw(styles, ["voucherContainer"], ["container-fluid"])}>
      <div className={usb(["container", "position-relative"])}>
        <div className={usb(["row"])}>
          <div className={usb(["col-lg-10", "m-auto"])}>
            <div className={usc(styles, ["content"])} >
              <div id="bannerContainer" className={usc(styles, ["bannerContainer"])}>
                <span className="icon-barco"></span>
                <div className={usc(styles, ["titleContainer"])}>
                  <p>¡Felicitaciones!</p>
                </div>
                <div className={usc(styles, ["bannerTextContainer"])}>
                  <p>
                    Tenes a disposición un paseo en velero por el río de la plata<br />
                    <small>Coordiná la salida a través de nuestro instagram <span className="icon-instagram" /> @bairesnavega</small>
                    <br />
                    <small>O por whatsapp al <span className="icon-wpp" /> 1121863402</small>
                  </p>
                </div>

                <div className={usc(styles, ["purchaseData"])}>
                  <div className={usb(["row"])} >
                    <div className={usb(["col-md-8", "col-12", "m-auto"])} >
                      <div key={voucherInfo.id} className={usc(styles, ["purchaseContent"])}>
                        <div className={usb(["row"])} >
                          <div className={usw(styles, ["dataContent"], ["col-12 mt-3"])} >
                            <form onSubmit={() => alert(2)} action="https://formcarry.com/s/TqGCh0Wyk" method="POST" acceptCharset="UTF-8" ref={formRef}>
                              <input value={voucherInfo.id} type="hidden" name="pagoId" />
                              <div key={voucherInfo.id}>
                                <div className={usc(styles, ["data"])}>
                                  <p className={usc(styles, ["left"])} >Estado:</p>
                                  <p className={usc(styles, [drawClassForStatus(voucherInfo.state)])} >{voucherInfo.state}</p>
                                </div>
                                {voucherInfo.contact && (
                                  <div className={usc(styles, ["data"])}>
                                    <p className={usc(styles, ["left"])} >Info de contact:</p>
                                    <p>{voucherInfo.contact}</p>
                                    <input value={voucherInfo.contact} type="hidden" name="contacto" />

                                  </div>
                                )}
                                {voucherInfo.people && (
                                  <div className={usc(styles, ["data"])}>
                                    <p className={usc(styles, ["left"])} >Cantidad de personas:</p>
                                    <p>{voucherInfo.people}</p>
                                    <input value={voucherInfo.people} type="hidden" name="personas" />

                                  </div>
                                )}
                                {voucherInfo.total && (
                                  <div className={usc(styles, ["data"])}>
                                    <p className={usc(styles, ["left"])} >Total:</p>
                                    <p>{voucherInfo.total}</p>
                                    <input value={voucherInfo.total} type="hidden" name="total" />

                                  </div>
                                )}
                                <div className={usc(styles, ["data"])}>
                                  <p className={usc(styles, ["left"])} >Codigo de verificación:</p>
                                  <p>{voucherInfo.code}</p>
                                  <input value={voucherInfo.code} type="hidden" name="codigo" />

                                </div>
                                <div className={usc(styles, ["data"])}>
                                  <p className={usc(styles, ["left"])} >Valido hasta:</p>
                                  <p>{voucherInfo.validTill}</p>
                                  <input value={voucherInfo.validTill} type="hidden" name="validoHasta" />
                                  <input type="hidden" name="_gotcha" />
                                </div>
                              </div>
                            </form>
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
    </div>

  )
}

export default Voucher