import Script from "next/script";
import Head from "next/head";
import "@/styles/scss/styles.scss";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
    </>
  );
}
