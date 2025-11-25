"use client";

import { useState, useEffect } from "react";

export default function HeroTextDynamic() {
  const [scroll, setScroll] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      // aggiorna lo stato con quanto si è scrollato
      setScroll(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const translateY = Math.min(scroll * 0.3, 200);

  return (
    <div
      className="hero-text m-0"
      style={{ transform: `translateY(${translateY}px)` }}
    >
      <h1 className="fw-bold text-shadow">Efficienza, sicurezza, eleganza</h1>
      <div className="d-flex justify-content-center align-items-center flex-column">
        <p className="text-shadow">Call to action</p>
        <a href="" className="btn bg-a">
          Click me
        </a>
      </div>
    </div>
  );
}
