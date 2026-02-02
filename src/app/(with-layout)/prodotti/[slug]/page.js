import products from "@/data/products.json";
import owner from "@/data/owner.json";
import partners from "@/data/partners.json";
import Image from "next/image";
import ContactCTA from "@/app/components/ContactCTA";
import PageLayout from "@/app/components/PageLayout";
import RelatedProducts from "@/app/components/RelatedProducts";

export async function generateMetadata({ params }) {
  const resolvedParams = await params;
  const slug = resolvedParams.slug;

  const product = products.find((p) => p.slug === slug);
  const brands = partners.filter((p) => product.brands.includes(p.name));

  if (!product) {
    return {
      title: `Prodotti | ${owner.companyName}`,
      description: "Esplora i nostri prodotti",
    };
  }

  return {
    title: `${product.name} | ${owner.companyName}`,
    description: `Marchi: ${brands.map((brand) => brand.name).join(", ")} | ${
      product.description
    }`,
    alternates: {
      canonical: `/prodotti/${slug}`,
    },
  };
}

export function buildProductText(product) {
  const parts = [];

  if (product.materials?.length) {
    parts.push(
      `Realizzato in ${product.materials.join(", ")}, questo prodotto garantisce qualità e durata nel tempo.`,
    );
  }

  if (product.features?.length) {
    parts.push(
      `Tra le principali caratteristiche troviamo ${product.features.join(
        ", ",
      )}, pensate per offrire prestazioni elevate e affidabilità.`,
    );
  }

  if (product.useCases?.length) {
    parts.push(
      `È una soluzione ideale per ${product.useCases.join(
        ", ",
      )}, adattandosi a contesti diversi con grande versatilità.`,
    );
  }

  if (product.automation) {
    parts.push(
      `Il prodotto è compatibile con sistemi di automazione, permettendo una gestione comoda, moderna e programmabile.`,
    );
  }

  return parts;
}

export default async function ProductPage({ params }) {
  const { slug } = await params;

  const product = products.find((p) => p.slug === slug);
  const brands = partners.filter((p) =>
    product.brands.some((b) => b.name === p.name),
  );

  const productText = buildProductText(product);

  if (!product) {
    return <div>Prodotto non trovato</div>;
  }

  const relatedProducts = products.filter((p) => p.slug !== slug);

  return (
    <>
      <div style={{ height: "20vh" }}></div>
      <PageLayout>
        <div className="row">
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
            {brands.length > 0 && (
              <div className="row row-cols-1 row-cols-md-2 g-4 justify-content-center">
                {brands.map((partner, index) => (
                  <div
                    key={index}
                    className="col d-flex justify-content-center"
                  >
                    <div
                      className="d-flex justify-content-center align-items-center"
                      style={{ width: 200, height: 100 }}
                    >
                      <div
                        className={partner.background}
                        style={{ padding: "10px", display: "inline-block" }}
                      >
                        <Image
                          src={partner.logo}
                          alt={partner.name}
                          width={200}
                          height={100}
                          style={{ objectFit: "contain" }}
                          loading="lazy"
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
            <div className="my-5">
              {product.price ? (
                <div className="d-flex justify-content-md-between justify-content-center align-items-center pe-md-5 pe-0">
                  <h1 className="text-uppercase fw-medium text-center text-md-start">
                    {product.name}
                  </h1>
                  <span className="text-uppercase">
                    a partire da <span className="fs-4">{product.price} €</span>
                  </span>
                </div>
              ) : (
                <h1 className="text-uppercase fw-medium text-center text-md-start">
                  {product.name}
                </h1>
              )}
              <p className="mt-3 text-center text-md-start">
                {product.description}
                {productText.length > 0 && (
                  <>
                    {productText.map((paragraph, index) => (
                      <p key={index}>{paragraph}</p>
                    ))}
                  </>
                )}
              </p>
            </div>
          </section>
          <RelatedProducts items={relatedProducts} />
        </div>
        <div className="my-5">
          <ContactCTA />
        </div>
      </PageLayout>
    </>
  );
}
