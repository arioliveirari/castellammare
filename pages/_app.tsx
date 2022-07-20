import '../styles/globals.css'
import '../styles/font.css'

import { wrapper } from "../redux/store";
import React from 'react';

const App = ({ Component, pageProps }: any) => {
  return (
    <div>
      <Component {...pageProps}/>
    </div>
  )
}

export default wrapper.withRedux(App);