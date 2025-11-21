import "bootstrap/dist/css/bootstrap.min.css";
import BootstrapClient from "./components/BootstrapClient";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Head from "next/head";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

export const metadata = {
  title: "GSM Sistemi",
  description: "Insect Screens & Shutters",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <meta name="apple-mobile-web-app-title" content="GSM Sistemi" />
      </Head>
      <body className={`${montserrat.variable}`}>
        {children}
        <BootstrapClient />
      </body>
    </html>
  );
}
