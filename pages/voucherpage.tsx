import React from "react";
import BackgroundOnly from "../components/BackgroundOnly";
import Waves from "../components/waves";
import { usc, usb, usw } from '../utils/helpers';
import HeaderVoucher from "../components/HeaderVoucher";
import styles from '../styles/voucherPage.module.scss';
import Voucher from "../components/Voucher";
const voucherpage = () => {
  return (
    <>
      <div className={usc(styles, ["pageContainer"])} >
        <HeaderVoucher />
        <Voucher/>
        <div className={usc(styles, ["wavesContainer"])} >
          <Waves />
        </div>
      </div>  
    </>
  )
}
export default voucherpage