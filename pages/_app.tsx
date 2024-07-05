import '../styles/globals.css'
import '../i18n';

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
