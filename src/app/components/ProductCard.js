import Button from "./Button";
import Image from "next/image";
import Link from "next/link";

export default function ProductCard({ product }) {
  return (
    <div className="product-card bg-d p-3 gap-3">
      <div
        style={{
          position: "relative",
          width: "100%",
          height: "220px", // Dimensione fissa in altezza come hai chiesto
          overflow: "hidden",
        }}
      >
        <Image
          src={product.image}
          alt={product.name}
          fill
          style={{
            objectFit: "cover",
            objectPosition: "center",
          }}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 350px"
          loading="lazy"
        />
      </div>
      <p
        style={{ height: "60px" }}
        className="d-flex justify-content-center align-items-center fw-normal fs-5 m-0"
      >
        {product.name}
      </p>
      <Link
        aria-label={`Vai ai dettagli per ${product.name}`}
        href={`/prodotti/${product.slug}`}
      >
        <Button className="w-100 bg-c text-light" label="Scopri di più" />
      </Link>
    </div>
  );
}
