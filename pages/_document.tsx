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
          <link rel="shortcut icon" href={'/bruno/logo.png'} />
          {/* fonts */}
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet" />
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
