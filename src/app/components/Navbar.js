"use client";
import { useEffect, useState } from "react";
import Image from "next/image";

const navItems = [
  { name: "prodotti", link: "/" },
  { name: "partners", link: "/partners" },
  { name: "servizi", link: "/servizi" },
  { name: "contatti", link: "/contatti" },
];

export default function Navbar() {
  const [shrink, setShrink] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const triggerPoint = window.innerHeight * 0.8;
      setShrink(window.scrollY > triggerPoint);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`navbar fixed-top w-100 d-flex align-items-center transition-all ${
        shrink ? "navbar-shrink" : "navbar-large"
      }`}
    >
      <Image
        src="/images/logo_long.svg"
        alt="Logo"
        width={366}
        height={60}
        style={{ objectFit: "contain" }}
        className="navbar-logo"
      />

      <ul className="navbar-links list-unstyled d-flex gap-4 mb-0">
        {navItems.map((item) => (
          <li key={item.name}>
            <a
              href={item.link}
              className="text-uppercase text-reset text-decoration-none fw-semibold text-c"
            >
              {item.name}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
