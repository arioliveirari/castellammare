import React, { useState } from 'react';
import { usb, usc, usw } from "../utils/helpers";
import styles from '../styles/Footer.module.scss';
import { useTranslation } from "react-i18next";
export default function BasicForm() {
    const [name, setName] = useState('')
    const [amount, setAmount] = useState('')
    const [date, setDate] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [errorMessageActive, setErrorMessageActive] = useState(false)
    const [message, setMessage] = useState('')
    const [lang, setLang] = useState({
        es: false,
        en: false,
        it: false
    })
    const { t, i18n } = useTranslation();
    const [error, setError] = useState('')

    function onSubmit(e: any) {
        e.preventDefault();
        e.stopPropagation();
        let idiomas = Object.values(lang)
        let idiomasKeys = Object.keys(lang)
        let Lingua = ""
        let Nome = name
        let Messaggio = message
        let Quantita = amount
        let Email = email
        let Data = date
        let Telefono = phone
        for (let i = 0; i < 3 ; i++){
            if (idiomas[i]) Lingua = Lingua + " " + idiomasKeys[i]
        }
        
        const validation = validateForm()
        if (validation){

        fetch("https://formcarry.com/s/0APAe0Ciky8", {
            method: 'POST',
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ Nome, Email, Messaggio, Quantita, Data,  Lingua, Telefono})
        })
            .then(response => response.json())
            .then(response => {
                if (response.code === 200) {
                    scrollTo(0, 0)
                    location.reload();
                }
                else if (response.code === 422) {
                    // Field validation failed
                    setError(response.message)
                }
                else {
                    // other error from formcarry
                    setError(response.message)
                }
            })
            .catch(error => {
                // request related error.
                setError(error.message ? error.message : error);
            });
        }

    }

    const lenguages = ["ES", "EN", "IT"];
    const [active, setActive] = React.useState({
        es: false,
        en: false,
        it: false
    })

    React.useEffect(() => {
        setLang(active)
    }, [active])

    React.useEffect(() => {
        setTimeout(()=>{
            setErrorMessageActive(false)
        }, 3000)
    }, [errorMessageActive])

    const validateForm = ()=>{
        if (name !== "" &&
            email !== "" &&
            phone !== ""){
                setErrorMessageActive(false)
                return true
            } else {
                setErrorMessageActive(true)
                return false
            }
    }

    return (

        <form onSubmit={(e) => onSubmit(e)} className={usc(styles, ["parentHolder"])}>
            <div className={usc(styles, ["parent"])}>


                <div className={usc(styles, ["formcarry-block", "lang"])}>
                    <p>{t("Footer.form.lang")}</p>
                    <div className={usc(styles, ["lenguages"])}>

                        <div className={usc(styles, ["holder"])}>
                            <div onClick={() => { setActive({ ...active, es: !active.es }) }} className={active.es ? usc(styles, ["selector", "active"]) : usc(styles, ["selector"])}></div>
                            <div className={usc(styles, ["text"])}>
                                {lenguages[0]}
                            </div>
                        </div>

                        <div className={usc(styles, ["holder"])}>
                            <div onClick={() => { setActive({ ...active, en: !active.en }) }} className={active.en ? usc(styles, ["selector", "active"]) : usc(styles, ["selector"])}></div>
                            <div className={usc(styles, ["text"])}>
                                {lenguages[1]}
                            </div>
                        </div>

                        <div className={usc(styles, ["holder"])}>
                            <div onClick={() => { setActive({ ...active, it: !active.it }) }} className={active.it ? usc(styles, ["selector", "active"]) : usc(styles, ["selector"])}></div>
                            <div className={usc(styles, ["text"])}>
                                {lenguages[2]}
                            </div>
                        </div>

                    </div>
                </div>

                <div className={usc(styles, ["formcarry-block"])}>
                    <label htmlFor="name">{t("Footer.form.name")}</label>
                    <input type="text" value={name} onChange={(e) => setName(e.target.value)} id="name" placeholder="" />
                </div>

                <div className={usc(styles, ["formcarry-block"])}>
                    <label htmlFor="amount">{t("Footer.form.people")}</label>
                    <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} id="amount" placeholder="" min="0" max="12" />
                </div>

                <div className={usc(styles, ["formcarry-block"])}>
                    <label htmlFor="date">{t("Footer.form.data")}</label>
                    <input type="date" value={date} onChange={(e) => setDate(e.target.value)} id="date" placeholder="" />
                </div>

                <div className={usc(styles, ["formcarry-block"])}>
                    <label htmlFor="email">{t("Footer.form.mail")}</label>
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} id="email" placeholder="" />
                </div>

                <div className={usc(styles, ["formcarry-block"])}>
                    <label htmlFor="number">{t("Footer.form.phone")}</label>
                    <input type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} id="phone" placeholder="" />
                </div>

                <div className={usc(styles, ["formcarry-block"])}>
                    <label htmlFor="message">{t("Footer.form.message")}</label>
                    <textarea value={message} onChange={(e) => setMessage(e.target.value)} id="message" placeholder=""></textarea>
                </div>

                <div className={usc(styles, ["formcarry-block", "buttonSend"])}>
                    <div className={errorMessageActive ? usc(styles, ["errorMessage", "active"]) : usc(styles, ["errorMessage"])}>{t("Footer.form.errorMessage")}</div>
                    <button type="submit">Send</button>
                </div>
            </div>
        </form >
    )
}

