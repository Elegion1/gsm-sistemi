import products from "@/data/products.json";
import owner from "@/data/owner.json";
import partners from "@/data/partners.json";
import relevanceData from "@/data/relevance.json";
import Image from "next/image";
import ContactCTA from "@/app/components/ContactCTA";
import PageLayout from "@/app/components/PageLayout";
import RelatedProducts from "@/app/components/RelatedProducts";
import PartnerCard from "@/app/components/PartnerCard";
import ArticleCard from "@/app/components/ArticleCard";
import { getAllArticles } from "@/scripts/articlesLoader";

const visiblePartners = partners.filter((partner) => partner.show !== false);

export async function generateMetadata({ params }) {
  const resolvedParams = await params;
  const slug = resolvedParams.slug;

  const product = products.find((p) => p.slug === slug);

  if (!product) {
    return {
      title: `Prodotti | ${owner.companyName}`,
      description: "Esplora i nostri prodotti",
    };
  }

  const brands = visiblePartners.filter((p) => product.brands.includes(p.name));

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

function getRelatedArticles(product, articles, limit = 2) {
  const predefined = relevanceData.articleRelevance[product.slug] || [];
  const articleMap = new Map(articles.map((article) => [article.slug, article]));

  const scoredArticles = predefined
    .map((entry) => ({
      article: articleMap.get(entry.slug),
      score: entry.score,
      reasons: [entry.reason],
    }))
    .filter(({ article }) => article)
    .sort((a, b) => {
      if (b.score !== a.score) return b.score - a.score;
      return a.article.title.localeCompare(b.article.title);
    });

  if (scoredArticles.length > 0) {
    return scoredArticles.slice(0, limit);
  }

  const keywords = [
    product.name,
    product.slug,
    ...(product.materials || []),
    ...(product.features || []),
    ...(product.useCases || []),
  ]
    .filter(Boolean)
    .map((value) => value.toLowerCase());

  const fallbackArticles = articles
    .map((article) => {
      const title = (article.title || "").toLowerCase();
      const excerpt = (article.excerpt || "").toLowerCase();
      const body = (article.body || "").toLowerCase();
      const reasons = [];

      let score = 0;

      keywords.forEach((keyword) => {
        const normalizedKeyword = keyword.trim();
        if (!normalizedKeyword) return;

        if (title.includes(normalizedKeyword)) {
          score += 6;
          reasons.push(`titolo contiene “${keyword}”`);
        }
        if (excerpt.includes(normalizedKeyword)) {
          score += 3;
          reasons.push(`estratto contiene “${keyword}”`);
        }
        if (body.includes(normalizedKeyword)) {
          score += 1;
          reasons.push(`contenuto contiene “${keyword}”`);
        }
      });

      return { article, score, reasons };
    })
    .sort((a, b) => {
      if (b.score !== a.score) return b.score - a.score;
      return a.article.title.localeCompare(b.article.title);
    });

  return fallbackArticles.slice(0, limit);
}

function getRelatedProducts(product, productsList) {
  const predefined = relevanceData.productRelevance[product.slug] || [];
  const productMap = new Map(productsList.map((item) => [item.slug, item]));

  const scoredProducts = predefined
    .map((entry) => ({
      product: productMap.get(entry.slug),
      score: entry.score,
      reasons: [entry.reason],
    }))
    .filter(({ product }) => product)
    .sort((a, b) => {
      if (b.score !== a.score) return b.score - a.score;
      return a.product.name.localeCompare(b.product.name);
    });

  if (scoredProducts.length > 0) {
    return scoredProducts;
  }

  return productsList
    .filter((item) => item.slug !== product.slug)
    .map((item) => {
      const reasons = [];
      let score = 0;

      const sharedMaterials = (item.materials || []).filter((material) =>
        (product.materials || []).includes(material),
      );
      const sharedFeatures = (item.features || []).filter((feature) =>
        (product.features || []).includes(feature),
      );
      const sharedUseCases = (item.useCases || []).filter((useCase) =>
        (product.useCases || []).includes(useCase),
      );
      const sharedBrands = (item.brands || []).filter((brand) =>
        (product.brands || []).some(
          (productBrand) => productBrand.name === brand.name,
        ),
      );

      score += sharedMaterials.length * 6;
      score += sharedFeatures.length * 5;
      score += sharedUseCases.length * 4;
      score += sharedBrands.length * 7;

      if (sharedMaterials.length > 0) {
        reasons.push(`materiali condivisi: ${sharedMaterials.join(", ")}`);
      }
      if (sharedFeatures.length > 0) {
        reasons.push(`caratteristiche condivise: ${sharedFeatures.join(", ")}`);
      }
      if (sharedUseCases.length > 0) {
        reasons.push(`casi d’uso condivisi: ${sharedUseCases.join(", ")}`);
      }
      if (sharedBrands.length > 0) {
        reasons.push(`brand condivisi: ${sharedBrands.map((b) => b.name).join(", ")}`);
      }

      if (
        item.name.toLowerCase().includes(product.name.toLowerCase()) ||
        product.name.toLowerCase().includes(item.name.toLowerCase())
      ) {
        score += 8;
        reasons.push(`nome molto simile al prodotto corrente`);
      }

      return { product: item, score, reasons };
    })
    .sort((a, b) => {
      if (b.score !== a.score) return b.score - a.score;
      return a.product.name.localeCompare(b.product.name);
    });
}

export default async function ProductPage({ params }) {
  const { slug } = await params;

  const product = products.find((p) => p.slug === slug);

  if (!product) {
    return <div>Prodotto non trovato</div>;
  }

  const brands = visiblePartners.filter((p) =>
    product.brands.some((b) => b.name === p.name),
  );
  const productText = buildProductText(product);
  const allArticles = getAllArticles();
  const articleRelevanceList = getRelatedArticles(product, allArticles);
  const relatedArticles = articleRelevanceList.map(({ article }) => article);
  const productRelevanceList = getRelatedProducts(product, products);
  const relatedProducts = productRelevanceList.map(({ product }) => product);

  return (
    <>
      <div style={{ height: "20vh" }}></div>
      <PageLayout>
        <div className="row">
          <section className="col-12 col-md-6">
            <div
              className="w-100 position-relative"
              style={{ height: "300px" }}
            >
              <Image
                alt={product.name}
                src={product.image}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
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
                    <PartnerCard partner={partner} showOverlay={false} />
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
              <section className="mt-3 text-center text-md-start">
                <p>{product.description}</p>

                {productText.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </section>
            </div>
          </section>
          <section className="col-12 col-md-6">
            <div className="my-5 order-1 order-md-2">
              <h2 className="text-uppercase fw-medium text-center mb-4">
                Articoli correlati
              </h2>
              <div className="row g-3">
                {relatedArticles.map((article) => (
                  <div key={article.slug} className="col-12">
                    <ArticleCard article={article}  />
                  </div>
                ))}
              </div>
            </div>
            <div className="order-2 order-md-1">
              <RelatedProducts items={relatedProducts} />
            </div>
          </section>
        </div>
        <div className="my-5">
          <ContactCTA />
        </div>
      </PageLayout>
    </>
  );
}
