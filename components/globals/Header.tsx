import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import { usb, usc, usw } from '../../utils/helpers';
import styles from '../../styles/headers.module.scss';
import { useTranslation } from 'react-i18next';
import { ScrollTo, detectSectionVisible } from '../ScrollTo';
import { redirect } from 'next/dist/server/api-utils';


const Header = ({ children }: any) => {
  // bg change when scrolling
  const [transparent, setTransparent] = React.useState<boolean>(false);
  const [language, setLanguage] = React.useState<string>("es")
  const [sectionActive, setSectionActive] = React.useState<number>(1)
  const { t, i18n } = useTranslation();

  if (typeof window !== 'undefined') {
    const changeColor = () => {
      if (window.scrollY > 1 ) {
        setTransparent(true)
      } else {
        setTransparent(false)
      }
    }
    window.addEventListener("scroll", () => {
      changeColor()
      const sectionActiveNow = detectSectionVisible()
      const sections = ["HOME", "ABOUT", "TOUR", "FAQ", "CONTACT"]
      setSectionActive(sections.indexOf(sectionActiveNow) + 1)
  })
  }

  const goToSection = (sectionId: string, sectionNumber: number) => {
    ScrollTo(sectionId)
    setSectionActive(sectionNumber)
  }

  const changeLanguage = (lang: string) => {
    i18n.changeLanguage(lang)
    setLanguage(lang)
  }

 
  return (
    <div className={(transparent) ? usw(styles, ["Header", "active"], ["container-fluid", "p-0"]) : usw(styles, ["Header"], ["container-fluid"])} >
      <Head>
        <title>{t("Header.company")}</title>
        <meta name="description" content={t("Header.description")} />
        <link rel="icon" href="/public/images/barco.ico" />
      </Head>
      <div className={usb(["container"])}>
        <div className={usb(["row"])}>
          <div className={usb(["col-12"])}>
            <div className={usc(styles, ["headerContainer"])}>

              <div className={usc(styles, ["company"])}>
                <p>{t("Header.company")}</p>
              </div>

              <div className={usc(styles, ["sections"])}>
                <div onClick={() => goToSection("HOME", 1)} className={(sectionActive === 1) ? usc(styles, ["active"]) : usc(styles, [""])}>{t("Header.home")}</div>
                <div onClick={() => goToSection("ABOUT", 2)} className={(sectionActive === 2) ? usc(styles, ["active"]) : usc(styles, [""])}>{t("Header.about")}</div>
                <div onClick={() => goToSection("TOUR", 3)} className={(sectionActive === 3) ? usc(styles, ["active"]) : usc(styles, [""])}>{t("Header.tour")}</div>
                <div onClick={() => goToSection("FAQ", 4)} className={(sectionActive === 4) ? usc(styles, ["active"]) : usc(styles, [""])}>{t("Header.faq")}</div>
                <div onClick={() => goToSection("CONTACT", 5)} className={(sectionActive === 5) ? usc(styles, ["active"]) : usc(styles, [""])}>{t("Header.contact")}</div>
              </div>

              <div className={usc(styles, ["languageSelector"])}>
                <div onClick={() => changeLanguage("es")} className={(language === "es") ? usc(styles, ["es"]) : usc(styles, [""])}>ES</div>
                <div onClick={() => changeLanguage("en")} className={(language === "en") ? usc(styles, ["en"]) : usc(styles, [""])}>EN</div>
                <div onClick={() => changeLanguage("it")} className={(language === "it") ? usc(styles, ["it"]) : usc(styles, [""])}>IT</div>
              </div>

                <a href='https://wa.me/393890475539' rel="noopener noreferrer" target='_blank'>
              <div className={usc(styles, ["wtsp"])}>
              </div>
                </a>
              

            </div>
          </div>
        </div>
      </div>
    </div >

  )


}


export default Header;




