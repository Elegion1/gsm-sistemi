"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

export default function HeroTextDynamic() {
  const [scroll, setScroll] = useState(0);
  const [breakpoint, setBreakpoint] = useState("desktop"); // mobile | tablet | desktop
  const [navbarHeight, setNavbarHeight] = useState(0);

  useEffect(() => {
    const checkSize = () => {
      const w = window.innerWidth;
      if (w < 576) setBreakpoint("mobile");
      else if (w < 992) setBreakpoint("tablet");
      else setBreakpoint("desktop");
    };
    checkSize();
    window.addEventListener("resize", checkSize);

    const handleScroll = () => {
      if (breakpoint === "desktop") {
        setScroll(window.scrollY);
      } else {
        setScroll(0);
      }
    };
    window.addEventListener("scroll", handleScroll);

    // altezza navbar
    const navbar = document.querySelector(".navbar");
    if (navbar) setNavbarHeight(navbar.offsetHeight);

    return () => {
      window.removeEventListener("resize", checkSize);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [breakpoint]);

  // dimensioni del testo in base al breakpoint
  const titleSize =
    breakpoint === "mobile"
      ? "fs-4"
      : breakpoint === "tablet"
      ? "fs-2"
      : "fs-1";

  const subtitleSize =
    breakpoint === "mobile"
      ? "fs-6"
      : breakpoint === "tablet"
      ? "fs-5"
      : "fs-4";

  // comportamento differenziato
  let translateY;
  if (breakpoint === "desktop") {
    const baseOffset = 40; // offset originale desktop
    const dynamicTranslate = Math.min(scroll / 10, 50);
    translateY = baseOffset + dynamicTranslate;
  } else {
    // mobile/tablet: subito sotto la navbar
    translateY = (navbarHeight / window.innerHeight) * 100 + 5;
  }

  return (
    <div
      className="hero-text-dynamic m-0 text-center"
      style={{
        transform: `translateY(${translateY}vh)`,
        top: 0,
        position: "absolute",
        width: "100%",
      }}
    >
      <h1 className={`fw-bold text-shadow ${titleSize}`}>
        Efficienza, sicurezza, eleganza
      </h1>
      <div className="d-flex justify-content-center align-items-center flex-column">
        <p className={`text-shadow m-2 ${subtitleSize}`}>
          Richiedi un preventivo
        </p>
        <Link aria-label="Vai alla pagina contatti" href="/contatti" className="btn bg-a text-d">
          Contattaci
        </Link>
      </div>
    </div>
  );
}
