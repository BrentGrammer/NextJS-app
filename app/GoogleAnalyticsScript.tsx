import Script from "next/script";
import React from "react";

const GoogleAnalyticsScript = () => {
  return (
    <>
      <Script
        async
        src="https://www.googletagmanager.com/gtag/js?id=youranalyticsid"
      />
      <Script id="googleanalyticsscript" strategy="afterInteractive">
        {/* if you get errors about unknown globals, then you can wrap the script in backticks and brackets - this is passing a script as a string which will be parsed as JS code*/}
        {`window.dataLayer = window.dataLayer || [];
        function gtag() {
          dataLayer.push(arguments);
        }
        gtag('js', new Date());
        gtag('config', 'G-E720JHXSJ1')`}
      </Script>
    </>
  );
};

export default GoogleAnalyticsScript;
