"use client";
import { useState, useEffect } from "react";
import Image from "next/image";

export default function Hero({
  title,
  description,
  image,
  imagePositionMobile = "center",
  imageHeightMobile = "40vh",
  imagePositionDesktop = "center",
  imageHeightDesktop = "60vh",
}) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkSize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkSize();
    window.addEventListener("resize", checkSize);
    return () => window.removeEventListener("resize", checkSize);
  }, []);

  const currentHeight = isMobile ? imageHeightMobile : imageHeightDesktop;
  const currentPosition = isMobile ? imagePositionMobile : imagePositionDesktop;

  return (
    <section>
      <div className="hero" style={{ position: "relative" }}>
        {/* FIX: Aggiunta position relative al genitore per risolvere il warning di products.png */}
        <div
          className="hero-image"
          style={{
            height: currentHeight,
            position: "relative", // INDISPENSABILE per next/image "fill"
            width: "100%",
            overflow: "hidden",
          }}
        >
          <Image
            src={image}
            alt={title}
            fill
            sizes="100vw"
            style={{
              objectFit: "cover",
              objectPosition: currentPosition,
            }}
            priority // Caricamento immediato per LCP
          />
        </div>

        <div className="hero-text d-flex flex-column justify-content-center align-items-center text-center gap-3 px-md-5">
          <h1 className="text-uppercase fw-bold text-shadow">
            {title}
          </h1>
          <h2 className="fw-normal fs-4 text-shadow text-wrap mx-auto">
            {description}
          </h2>
        </div>
      </div>
    </section>
  );
}
