"use client";
import { useState, useEffect } from "react";
import Image from "next/image";

export default function Hero({
  title,
  description,
  image,

  // default mobile
  imagePositionMobile = "center",
  imageHeightMobile = "40vh",

  // default desktop
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
      <div className="hero">
        <div style={{ height: currentHeight }} className="hero-image">
          <Image
            src={image}
            alt={title}
            fill
            style={{ objectFit: "cover", objectPosition: currentPosition }}
            priority
          />
        </div>

        <div className="hero-text">
          <h1 className="text-uppercase fw-bold text-center text-shadow">
            {title}
          </h1>
          <h2 className="fw-normal fs-4 text-center mt-3 text-shadow text-wrap mx-auto">
            {description}
          </h2>
        </div>
      </div>
    </section>
  );
}
