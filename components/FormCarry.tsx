import React, { useState } from 'react';
import { usb, usc, usw } from "../utils/helpers";
import styles from '../styles/Footer.module.scss';
import { useTranslation } from "react-i18next";
export default function BasicForm() {
    const [name, setName] = useState('')
    const [amount, setAmount] = useState('')
    const [date, setDate] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')
    const { t, i18n } = useTranslation();
    const [error, setError] = useState('')

    function onSubmit(e: any) {
        e.preventDefault();
        e.stopPropagation();

        fetch("https://formcarry.com/s/W1j24bgBsux", {
            method: 'POST',
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ name, email, message, amount, date })
        })
            .then(response => response.json())
            .then(response => {
                if (response.code === 200) {
                    alert("We received your submission, thank you!");
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


    return (

        <form onSubmit={(e) => onSubmit(e)} className={usc(styles, ["parentHolder"])}>
            <div className={usc(styles, ["parent"])}>
                <div className={usc(styles, ["formcarry-block"])}>
                    <label htmlFor="name">{t("Footer.form.name")}</label>
                    <input type="text" value={name} onChange={(e) => setName(e.target.value)} id="name" placeholder="" />
                </div>

                <div className={usc(styles, ["formcarry-block"])}>
                    <label htmlFor="amount">{t("Footer.form.people")}</label>
                    <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} id="amount" placeholder="" min="0" max="12"/>
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
                    <label htmlFor="message">{t("Footer.form.message")}</label>
                    <textarea value={message} onChange={(e) => setMessage(e.target.value)} id="message" placeholder=""></textarea>
                </div>

                <div className={usc(styles, ["formcarry-block","buttonSend"])}>
                    <button type="submit">Send</button>
                </div>
            </div>
        </form>
    )
}