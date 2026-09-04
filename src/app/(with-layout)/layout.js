import "bootstrap/dist/css/bootstrap.min.css";
import Script from "next/script";
import BootstrapClient from "@/app/components/BootstrapClient";
import { Montserrat } from "next/font/google";
import "@/app/globals.css";
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

export const metadata = {
  metadataBase: new URL("https://www.gsm-sistemi.it"),
  title: {
    default: "Infissi e Serramenti a Trapani | GSM Sistemi",
    template: "%s | GSM Sistemi",
  },
  description:
    "Vendita e installazione di infissi, serramenti in alluminio, PVC e legno a Trapani. Soluzioni su misura per isolamento termico e acustico.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="it"
      className={montserrat.variable}
      data-scroll-behavior="smooth"
    >
      <body>
        {/* Impostazione di default per Consent Mode v2 */}
        <Script id="google-consent-default" strategy="beforeInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('consent', 'default', {
              'analytics_storage': 'denied',
              'ad_storage': 'denied',
              'ad_user_data': 'denied',
              'ad_personalization': 'denied'
            });
          `}
        </Script>

        {/* Google Tag Manager */}
        <Script id="gtm-script" strategy="afterInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});
              var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';
              j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;
              f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-K7QSNQTH');`}
        </Script>

        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-K7QSNQTH"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>

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
