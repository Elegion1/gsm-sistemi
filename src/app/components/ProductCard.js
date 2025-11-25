"use client";

import Button from "./Button";
import Image from "next/image";

export default function ProductCard({ product }) {
  return (
    <div className="product-card bg-d p-3 gap-3">
      <Image
        src={product.image}
        alt={product.name}
        width={240}
        height={220}
        unoptimized
        loading="lazy"
        className="w-100"
      />
      <h5 style={{ height: "44px" }} className="text-center my-2">
        {product.name}
      </h5>
      <Button
        className="w-100"
        label="Acquista"
        onClick={() => (window.location.href = product.link)}
      />
    </div>
  );
}
