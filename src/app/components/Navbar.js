"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

const navItems = [
  { name: "prodotti", link: "/prodotti" },
  { name: "partners", link: "/partners" },
  { name: "servizi", link: "/servizi" },
  { name: "contatti", link: "/contatti" },
];

export default function Navbar() {
  const [shrink, setShrink] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const navHeight = isMobile ? (shrink ? 60 : 80) : shrink ? 80 : 120;

  useEffect(() => {
    const checkSize = () => {
      setIsMobile(window.innerWidth < 768); // breakpoint tablet/mobile
    };

    checkSize();
    window.addEventListener("resize", checkSize);

    const handleScroll = () => {
      if (!isMobile) {
        setShrink(window.scrollY > 50);
      } else {
        setShrink(false); // blocca shrink su mobile
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("resize", checkSize);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isMobile]);

  return (
    <nav
      style={{ height: navHeight }}
      className={`navbar fixed-top w-100 d-flex align-items-center justify-content-md-between justify-content-center px-md-4 flex-column flex-md-row gap-2 gap-md-0 ${
        shrink ? "navbar-shrink" : ""
      }`}
    >
      <Link aria-label="Vai alla home" href="/">
        <Image
          src="/images/logo_long.svg"
          alt="logo-gsm-sistemi"
          width={isMobile ? (shrink ? 140 : 180) : shrink ? 180 : 260}
          height={isMobile ? (shrink ? 30 : 40) : shrink ? 40 : 60}
          style={{ objectFit: "contain", transition: "all 0.3s ease" }}
        />
      </Link>

      <div className="m-0">
        <ul className="list-unstyled d-flex gap-4 m-0">
          {navItems.map((item) => (
            <li key={item.name}>
              <Link
                aria-label={`Vai alla pagina ${item.name}`}
                href={item.link}
                className="text-uppercase text-reset text-decoration-none fw-semibold text-c nav-link-size"
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
