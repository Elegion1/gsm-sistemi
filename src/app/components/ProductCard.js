import Button from "./Button";
import Image from "next/image";
import Link from "next/link";

export default function ProductCard({ product }) {
  console.log(product.slug);
  return (
    <div className="product-card bg-d p-3 gap-3">
      <Image
        src={product.image}
        alt={product.name}
        width={240}
        height={220}
        loading="lazy"
        className="bg-c"
      />
      <p style={{ height: "44px" }} className="text-center my-2">
        {product.name}
      </p>

      <Link href={`/prodotti/${product.slug}`}>
        <Button className="w-100 bg-c text-light" label="Scopri di più" />
      </Link>
    </div>
  );
}
