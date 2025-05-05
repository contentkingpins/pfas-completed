import React from 'react';
import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <meta charSet="utf-8" />
          <meta name="theme-color" content="#0A2A4D" />
          <meta
            name="description"
            content="PFAS Claim Center - Were you exposed to toxic PFAS chemicals? You may be entitled to significant compensation."
          />
          <link rel="icon" href="/favicon.ico" />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
          <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />
          
          {/* TrustedForm Script */}
          <script 
            type="text/javascript"
            src="https://api.trustedform.com/trustedform.js"
            data-vendor="PFASClaimCenter"
            data-isolation="on"
          />
          
          {/* Meta Pixel Code */}
          <script
            dangerouslySetInnerHTML={{
              __html: `
                !function(f,b,e,v,n,t,s)
                {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
                n.callMethod.apply(n,arguments):n.queue.push(arguments)};
                if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
                n.queue=[];t=b.createElement(e);t.async=!0;
                t.src=v;s=b.getElementsByTagName(e)[0];
                s.parentNode.insertBefore(t,s)}(window, document,'script',
                'https://connect.facebook.net/en_US/fbevents.js');
                fbq('init', '1191934886045170');
                fbq('track', 'PageView');
              `
            }}
          />
          <noscript>
            <img 
              height="1" 
              width="1" 
              style={{ display: 'none' }}
              src="https://www.facebook.com/tr?id=1191934886045170&ev=PageView&noscript=1"
              alt=""
            />
          </noscript>
          {/* End Meta Pixel Code */}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument 