import "bootstrap/dist/css/bootstrap.min.css";
import BootstrapClient from "./components/BootstrapClient";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Head from "next/head";
import owner from "../data/owner.json";

import SeoData from "./components/SeoData";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <meta name="apple-mobile-web-app-title" content="GSM Sistemi" />
      </Head>
      <body className={`${montserrat.variable}`}>
        <SeoData />
        {children}
        <BootstrapClient />
      </body>
    </html>
  );
}
