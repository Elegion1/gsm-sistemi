import Image from "next/image";
import Link from "next/link";
import owner from "@/data/owner.json";
import links from "@/data/links.json";
import Social from "./Social";

export default function Footer() {
  return (
    <footer className="bg-b vw-100 p-4 p-md-5 pb-3 footer">
      <div className="row gap-2 gap-md-0">
        <div className="col-md-4 col-12 d-flex justify-content-between flex-column mb-0 mb-md-4">
          <Image
            src="/images/logo_long.svg"
            alt="logo-gsm-sistemi"
            width={366} // serve solo per Next.js Image optimization
            height={75} // serve solo per Next.js Image optimization
            style={{ width: "100%", height: "auto", maxWidth: "366px" }}
            loading="eager"
            className="mb-2"
          />
          <p className="text-d">Qualità, design e sicurezza per la tua casa</p>
        </div>
        <div className="col-md-4 col-12 d-flex flex-column align-items-start align-items-md-center text-start text-md-center">
          <p className="text-uppercase text-d m-0 fw-medium">navigazione</p>

          {links.map((link, index) => (
            <Link
              key={index}
              className="text-d text-reset text-decoration-none text-uppercase"
              href={link.href}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href={"/sitemap.xml"}
            className="text-d text-reset text-decoration-none text-uppercase"
          >
            sitemap
          </Link>
        </div>
        <div className="col-md-4 col-12 text-d text-md-end text-start">
          <p className="m-0 fw-medium">{owner.legalName}</p>
          <p className="m-0">
            {owner.address.street}, {owner.address.streetNumber} <br />
            {owner.address.city}, {owner.address.locality} {owner.address.zip}{" "}
            {owner.address.province}
          </p>
          <p className="m-0 text-uppercase">p.iva: {owner.vatNumber}</p>
          <p className="m-0 text-uppercase">sdi: {owner.sdiCode}</p>
          <p className="m-0 text-uppercase">tel: {owner.phone}</p>
          <p className="m-0 text-uppercase">
            pec: <span className="text-lowercase">{owner.pec}</span>
          </p>
          <p className="m-0 text-uppercase">
            email: <span className="text-lowercase">{owner.email}</span>
          </p>
          <div className="gap-3 d-flex justify-content-md-end justify-content-center align-items-center">
            <Social item={owner.socials} />
          </div>
        </div>
      </div>
      <div className="container mt-md-5 mt-2">
        <p className="text-d text-center m-0">
          © {new Date().getFullYear()} {owner.companyName} All rights reserved.
        </p>
        <p className="text-d text-center m-0">
          Sito realizzato e ottimizzato da{" "}
          <a
            className="text-reset text-decoration-none"
            href="https://www.elegion.it"
          >
            Giovanni Sugamiele
          </a>
        </p>
      </div>
    </footer>
  );
}
