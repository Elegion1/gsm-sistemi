import "bootstrap/dist/css/bootstrap.min.css";
import BootstrapClient from "@/app/components/BootstrapClient";
import { GoogleTagManager, GoogleAnalytics } from "@next/third-parties/google";
import { Montserrat } from "next/font/google";
import "@/app/globals.css";
import Head from "next/head";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import SeoData from "@/app/components/SeoData";
import CookieConsentBanner from "@/app/components/CookieConsentBanner";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  style: ["normal"],
});

export const metadata = { metadataBase: new URL("https://www.gsm-sistemi.it") };

export default function RootLayout({ children }) {
  return (
    <html
      lang="it"
      className={montserrat.variable}
      data-scroll-behavior="smooth"
    >
      <GoogleAnalytics gaId="G-140X47N3ML" />
      <GoogleTagManager gtmId="GTM-K7QSNQTH" />
      <Head>
        <meta name="apple-mobile-web-app-title" content="GSM Sistemi" />
      </Head>
      <body>
        <SeoData />
        <CookieConsentBanner />
        <Navbar />
        {children}
        <Footer />
        <BootstrapClient />
      </body>
    </html>
  );
}
