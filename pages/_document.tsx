// react
import React from 'react';
// third-party
import Document, {
  Head,
  Html,
  Main,
  NextScript,
} from 'next/document';
// application

class MyDocument extends Document {
  render() {
    const googleCode = "-";
    return (
      <Html lang={"ES"}>
        <Head>
          <link rel="shortcut icon" href={'/images/barco.ico'} />
          {/* fonts */}
          <script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=G-${googleCode}`}
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-${googleCode}', { page_path: window.location.pathname });
            `,
            }}
          />
        </Head>
        <body>
          { /* analytics HERE */}
          <div className="site-preloader">
            <style
              dangerouslySetInnerHTML={{
                __html: `
                    #__next *,
                    #__next *:before,
                    #__next *:after {
                        // transition-duration: 0s !important;
                    }

                    body {
                        height: 100% !important;
                    }
                `,
              }}
            />
          </div>

          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
