import Script from "next/script";
import "@/styles/scss/styles.scss";

export default function App({ Component, pageProps }) {
  return (
    <>
      {/* Google Analytics Script */}
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-T94Q6D7ZC3"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-T94Q6D7ZC3');
        `}
      </Script>
      <Component {...pageProps} />
    </>
  );
}
