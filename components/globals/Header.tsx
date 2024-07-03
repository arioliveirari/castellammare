import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import { usb, usc, usw } from '../../utils/helpers';
import styles from '../../styles/headers.module.scss';
import ToolTip from '../ToolTip';
import { useTranslation } from 'react-i18next';
import { ScrollTo } from '../ScrollTo';


const Header = ({ children }: any) => {
  // bg change when scrolling
  const [transparent, setTransparent] = React.useState<boolean>(false);
  const [language, setLanguage] = React.useState<string>("es")
  const [sectionActive, setSectionActive] = React.useState<number>(1)
  const { t, i18n } = useTranslation();

  if (typeof window !== 'undefined') {
    const changeColor = () => {
      if (window.scrollY > 1) {
        setTransparent(true)
      } else {
        setTransparent(false)
      }
    }
    window.addEventListener("scroll", changeColor)
  }

  const goToSection = (sectionId: string, sectionNumber: number) => {
    console.log("entró aca")
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
                <p>SANTA LUCIA TOUR</p>
              </div>

              <div className={usc(styles, ["sections"])}>
                <div onClick={() => goToSection("HOME", 1)} className={(sectionActive === 1) ? usc(styles, ["active"]) : usc(styles, [""])}>Home</div>
                <div onClick={() => goToSection("ABOUT", 2)} className={(sectionActive === 2) ? usc(styles, ["active"]) : usc(styles, [""])}>About Us</div>
                <div onClick={() => goToSection("TOUR", 3)} className={(sectionActive === 3) ? usc(styles, ["active"]) : usc(styles, [""])}>Tour</div>
                <div onClick={() => goToSection("FAQ", 4)} className={(sectionActive === 4) ? usc(styles, ["active"]) : usc(styles, [""])}>FAQs</div>
                <div onClick={() => goToSection("CONTACT", 5)} className={(sectionActive === 5) ? usc(styles, ["active"]) : usc(styles, [""])}>Contact Us</div>
              </div>

              <div className={usc(styles, ["languageSelector"])}>
                <div onClick={() => changeLanguage("es")} className={(language === "es") ? usc(styles, ["es"]) : usc(styles, [""])}>ES</div>
                <div onClick={() => changeLanguage("en")} className={(language === "en") ? usc(styles, ["en"]) : usc(styles, [""])}>EN</div>
                <div onClick={() => changeLanguage("it")} className={(language === "it") ? usc(styles, ["it"]) : usc(styles, [""])}>IT</div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div >

  )


}


export default Header;


const Links = () => {
  const { t, i18n } = useTranslation();
  const contactRef = React.useRef<HTMLAnchorElement>(null)
  return (
    <>
      <div className={usc(styles, ["links"])} >
        <a href="#" className={usc(styles, ["reserva"])} >{t("Header.buyService")}</a>
        <div className={usc(styles, ["icons"])}>
          <a href="https://www.instagram.com/bairesnavega/?hl=es" target={"_blank"} rel="noreferrer" >
            <div className={usc(styles, ["linkBtn"])}>
              <span ref={contactRef} className="icon-instagram" />
            </div>
          </a>
        </div>
      </div>
      <ToolTip topValue={50} leftValue={2} divRef={contactRef}><p className={usc(styles, ["tootlTipText"])}>{t("Header.contactUsText")}</p></ToolTip>
    </>
  )
}


const Logo = () => (
  <div className={usc(styles, ["logo"])}>
    <div className={usc(styles, ["logoPic"])} > </div>
  </div>
);

