import Image from "next/image";

export default function Hero({ title, description, image }) {
  return (
    <section>
      <div className="hero">
        <div style={{ width: "100%", height: "60vh" }}>
          <Image
            src={image}
            alt="Hero Image"
            fill
            style={{ objectFit: "cover" }}
            priority
          />
        </div>
        <div className="hero-text">
          <h1 className="text-uppercase fw-bold text-center text-shadow">{title}</h1>
          <h2 className="fw-normal fs-4 text-center mt-3 text-shadow text-wrap w-50 mx-auto">{description}</h2>
        </div>
      </div>
    </section>
  );
}
