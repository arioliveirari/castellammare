import React from "react";
import BackgroundOnly from "../components/BackgroundOnly";
import Header from "../components/globals/Header";
import Voucher from "../components/Voucher";
import Waves from "../components/waves";
import { usc, usb, usw } from '../utils/helpers';
import styles from '../styles/voucherPage.module.scss';
const voucherpage = () => {
  return (
    <>
      <div className={usc(styles, ["pageContainer"])} >
        <Header />
        <BackgroundOnly />
        
      </div>
    </>
  )
}
export default voucherpage