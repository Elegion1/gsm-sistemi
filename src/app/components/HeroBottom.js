"use client";

import { useEffect, useState } from "react";

export default function HeroBottom({ items }) {
  const [isMobile, setIsMobile] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const checkSize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkSize();
    window.addEventListener("resize", checkSize);

    return () => window.removeEventListener("resize", checkSize);
  }, []);

  // Ciclo automatico su mobile
  useEffect(() => {
    if (!isMobile) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % items.length);
    }, 2500);

    return () => clearInterval(interval);
  }, [isMobile, items.length]);

  return (
    <div
      className={`hero-bottom bg-d d-flex justify-content-center align-items-center gap-5 py-5 px-2 ${
        isMobile ? "flex-column" : ""
      }`}
      style={{ position: "relative", overflow: "hidden" }}
    >
      {isMobile ? (
        <h3
          key={currentIndex}
          className="text-a text-uppercase text-center fw-bold m-0 fade-slide"
          style={{
            width: "100%",
            transition: "opacity 0.6s, transform 0.6s",
          }}
        >
          {items[currentIndex]}
        </h3>
      ) : (
        items.map((text, index) => (
          <h3
            style={{ width: "250px" }}
            key={index}
            className="text-a text-uppercase text-center fw-bold m-0"
          >
            {text}
          </h3>
        ))
      )}
    </div>
  );
}
