import products from "@/data/products.json";
import Image from "next/image";
import ContactCTA from "@/app/components/ContactCTA";
import ProductCard from "@/app/components/ProductCard";
import PageLayout from "@/app/components/PageLayout";

export default async function ProductPage({ params }) {
  const { slug } = await params;

  const product = products.find((p) => p.slug === slug);

  if (!product) {
    return <div>Prodotto non trovato</div>;
  }

  const relatedProducts = products.filter((p) => p.slug !== slug).slice(0, 4);

  return (
    <>
      <div style={{ height: "20vh" }}></div>
      <PageLayout>
        <div className="row w-100">
          <section className="col-12 col-md-6">
            <div
              className="w-100 position-relative "
              style={{ height: "300px" }}
            >
              <Image
                alt={product.name}
                src={product.image}
                fill
                style={{ objectFit: "contain", objectPosition: "center" }}
              />
            </div>
            <div className="mt-5">
              <h1 className="text-uppercase fw-medium">{product.name}</h1>
              <p className="mt-3">
                {product.description} Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Natus officia eos sapiente nobis voluptate
                ratione explicabo tempore odit tenetur! Distinctio voluptates
                eveniet eligendi voluptate at aspernatur error et libero velit.
              </p>
            </div>
          </section>
          <section className="col-12 col-md-6">
            <h2 className="text-uppercase fw-medium text-center">
              Prodotti correlati
            </h2>
            <div className="d-flex flex-wrap justify-content-around align-items-center gap-2">
              {relatedProducts.map((product, index) => (
                <ProductCard key={index} product={product} />
              ))}
            </div>
          </section>
        </div>

        <ContactCTA />
      </PageLayout>
    </>
  );
}
