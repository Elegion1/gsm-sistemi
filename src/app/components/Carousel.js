import Image from "next/image";

export default function Carousel({
  id,
  images,
  width = 300,
  height = 200,
  objectFit = "cover",
}) {
  if (!images || images.length === 0) return null;

  // Se c'è solo un'immagine, non mostriamo il carosello
  if (images.length === 1) {
    return (
      <div style={{ width, height, position: "relative", overflow: "hidden" }}>
        <Image
          src={images[0].path}
          alt={images[0].description}
          fill
          sizes={`${width}px`}
          style={{ objectFit, objectPosition: "center" }}
          loading="lazy"
        />
      </div>
    );
  }

  return (
    <div
      id={id}
      className="carousel slide"
      data-bs-ride="carousel"
      style={{ width, height, position: "relative", overflow: "hidden" }}
    >
      <div className="carousel-inner" style={{ width: "100%", height: "100%" }}>
        {images.map((image, index) => (
          <div
            key={index}
            className={`carousel-item ${index === 0 ? "active" : ""}`}
            style={{ width: "100%", height: "100%" }}
          >
            <div style={{ position: "relative", width: "100%", height: "100%" }}>
              <Image
                src={image.path}
                alt={image.description || "installazione"}
                fill
                sizes={`${width}px`}
                style={{ objectFit, objectPosition: "center" }}
                loading="lazy"
              />
            </div>
          </div>
        ))}
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target={`#${id}`}
        data-bs-slide="prev"
      >
        <span
          className="carousel-control-prev-icon bg-c rounded-circle"
          aria-hidden="true"
        ></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target={`#${id}`}
        data-bs-slide="next"
      >
        <span
          className="carousel-control-next-icon bg-c rounded-circle"
          aria-hidden="true"
        ></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}

