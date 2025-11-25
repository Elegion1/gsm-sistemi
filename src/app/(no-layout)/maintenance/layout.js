import "bootstrap/dist/css/bootstrap.min.css";
import BootstrapClient from "@/app/components/BootstrapClient";
import { Montserrat } from "next/font/google";
import "@/app/globals.css";
import Head from "next/head";
import SeoData from "@/app/components/SeoData";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  style: ["normal"],
});


export default function MaintenanceLayout({ children }) {
  return (
    <html lang="en" className={montserrat.variable}>
      <Head>
        <meta name="apple-mobile-web-app-title" content="GSM Sistemi" />
      </Head>
      <body className="bg-d">
        <SeoData />
        {children}
        <BootstrapClient />
      </body>
    </html>
  );
}
