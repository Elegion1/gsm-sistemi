import Image from "next/image";

export default function Hero({
  title,
  description,
  image,
  imagePosition = "center",
  imageHeight = "50vh",
}) {
  return (
    <section>
      <div className="hero">
        <div style={{ height: imageHeight }} className="hero-image">
          <Image
            src={image}
            alt={title}
            fill
            style={{ objectFit: "cover", objectPosition: imagePosition }}
            priority
          />
        </div>
        <div className="hero-text">
          <h1 className="text-uppercase fw-bold text-center text-shadow">
            {title}
          </h1>
          <h2 className="fw-normal fs-4 text-center mt-3 text-shadow text-wrap w-md-50 mx-auto">
            {description}
          </h2>
        </div>
      </div>
    </section>
  );
}
