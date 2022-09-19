import React from "react";
import BackgroundOnly from "../components/BackgroundOnly";
import Waves from "../components/waves";
import { usc, usb, usw } from '../utils/helpers';
import HeaderVoucher from "../components/HeaderVoucher";
import styles from '../styles/voucherPage.module.scss';
const voucherpage = () => {
  return (
    <>
      <div className={usc(styles, ["pageContainer"])} >
        <HeaderVoucher />
        <BackgroundOnly />
        <div className={usc(styles, ["wavesContainer"])} >
          <Waves />
        </div>
      </div>  
    </>
  )
}
export default voucherpage