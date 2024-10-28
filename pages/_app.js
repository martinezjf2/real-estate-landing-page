import Script from "next/script";
import "@/styles/scss/styles.scss";
import { GoogleAnalytics } from "@next/third-parties/google";

export default function App({ Component, pageProps }) {
  return (
    <>
      <GoogleAnalytics gaId="G-T94Q6D7ZC3" debug />
      <Component {...pageProps} />
    </>
  );
}
