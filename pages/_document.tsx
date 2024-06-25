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
    
    return (
      <Html lang={"ES"}>
        <Head>
          <link rel="shortcut icon" href={'/images/barco.ico'} />
          {/* fonts */}
         
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
