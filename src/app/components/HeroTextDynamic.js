"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

export default function HeroTextDynamic() {
  const [scroll, setScroll] = useState(0);
  const [breakpoint, setBreakpoint] = useState("desktop"); // mobile | tablet | desktop

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
        setScroll(0); // niente scroll su mobile/tablet
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("resize", checkSize);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [breakpoint]);

  // movimento dinamico
  const dynamicTranslate =
    breakpoint === "desktop" ? Math.min(scroll / 10, 50) : 0;

  // offset iniziali diversi
  const baseOffset =
    breakpoint === "mobile"
      ? -6 // ad esempio: testo un po' più alto sul mobile
      : breakpoint === "tablet"
      ? 10 // posizione intermedia sul tablet
      : 30; // desktop parte "normale"

  const translateY = baseOffset + dynamicTranslate;

  return (
    <div
      className="hero-text-dynamic m-0"
      style={{ transform: `translateY(${translateY}vh)` }}
    >
      <h1 className="fw-bold text-shadow">Efficienza, sicurezza, eleganza</h1>
      <div className="d-flex justify-content-center align-items-center flex-column">
        <p className="text-shadow m-2">Richiedi un preventivo</p>
        <Link href="/contatti" className="btn bg-a text-d">
          Contattaci
        </Link>
      </div>
    </div>
  );
}
