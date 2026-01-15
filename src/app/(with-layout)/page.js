import Image from "next/image";
import Link from "next/link";
import PageLayout from "@/app/components/PageLayout";
import HeroHome from "@/app/components/HeroHome";
import ProductCard from "@/app/components/ProductCard";
import ContactCTA from "@/app/components/ContactCTA";
import owner from "@/data/owner.json";
import productsData from "@/data/products.json";
import Button from "@/app/components/Button";
import InfoCard from "@/app/components/InfoCard";
import partners from "@/data/partners.json";
import jobs from "@/data/jobs.json";
import Carousel from "@/app/components/Carousel";
import reviews from "@/data/reviews.json";
import articles from "@/data/articles.json";
import ReviewCard from "@/app/components/ReviewCard";
import Article from "@/app/components/Article";

const products = productsData.slice(0, 8);

export const metadata = {
  title: `${owner.companyName} | Infissi, Serramenti, Porte e Zanzariere a ${owner.address.city}`,
  description: owner.seoDescription,
  keywords: owner.seoKeywords,
  alternates: {
    canonical: "/",
  },
};

const recentArticles = articles
  .slice()
  .sort((a, b) => {
    const [da, ma, ya] = a.date.split("/").map(Number);
    const [db, mb, yb] = b.date.split("/").map(Number);

    const dateA = new Date(ya, ma - 1, da);
    const dateB = new Date(yb, mb - 1, db);

    return dateB - dateA;
  })
  .slice(0, 4);

const cta = [
  "consulenza & progettazione",
  "preventivi",
  "sopralluoghi & posa in opera",
  "consegna",
  "agevolazioni fiscali",
  "forniture per aziende",
];

export default function Home() {
  return (
    <>
      <HeroHome />
      <main>
        <PageLayout>
          <section id="chi-siamo">
            <h3 className="text-uppercase fw-medium text-center">Chi siamo</h3>
            <p className="text-center mt-4 fs-4 fw-normal">
              <span className="fw-bold">{owner.legalName},</span> con sede in{" "}
              <span className="fw-bold">
                {owner.address.street}, {owner.address.streetNumber} –{" "}
                {owner.address.locality} ({owner.address.province}),
              </span>{" "}
              è un’azienda giovane specializzata in infissi, serramenti, porte,
              zanzariere e sistemi oscuranti.
            </p>
            <p className="text-center mt-4 fs-4 fw-normal">
              Offriamo un servizio completo: consulenza, sopralluoghi,
              progettazione, posa in opera e assistenza, con attenzione alla
              qualità dei materiali e alle normative sulle agevolazioni fiscali.
            </p>
            <p className="text-center mt-4 fs-4 fw-normal">
              La nostra missione è fornire soluzioni tecniche affidabili,
              precise e durevoli, affiancando privati e aziende con
              professionalità e trasparenza.
            </p>
          </section>
          <section id="blog">
            <h3 className="text-uppercase fw-medium text-center">blog</h3>
            <div className="row g-4 mt-4 justify-content-center">
              {recentArticles.map((article) => (
                <div key={article.slug} className="col-12 col-lg-6">
                  <Article article={article} height={25} />
                </div>
              ))}
            </div>
            <div className="d-flex justify-content-center align-items-center mt-4">
              <Link className="btn bg-a text-d text-center" href="/news">
                Vai al blog
              </Link>
            </div>
          </section>
          <section id="prodotti">
            <h3 className="text-uppercase fw-medium text-center">Prodotti</h3>
            <div className="d-flex flex-wrap justify-content-center align-items-center gap-4 mt-4">
              {products.map((product) => (
                <ProductCard key={product.slug} product={product} />
              ))}
            </div>
            <div className="w-100 d-flex justify-content-center align-items-center mt-3">
              <Link aria-label="Vai alla pagina prodotti" href="/prodotti">
                <Button
                  className="bg-a text-light"
                  label="Vedi tutti i prodotti"
                />
              </Link>
            </div>
          </section>

          <section id="perche-sceglierci">
            <h3 className="text-uppercase fw-medium text-center">
              Perché sceglierci
            </h3>
            <div className="d-flex flex-wrap justify-content-center align-items-center gap-5 mt-4">
              {cta.map((item, index) => (
                <InfoCard key={index} title={item} />
              ))}
            </div>
          </section>

          <section id="partners">
            <h3 className="text-uppercase fw-medium text-center">Partners</h3>
            <div className="d-flex flex-wrap justify-content-center align-items-center gap-2 gap-md-5 mt-4">
              {partners.map((partner, index) => (
                <div
                  key={index}
                  className="d-flex justify-content-center align-items-center p-3"
                  style={{ width: 200, height: 200 }}
                >
                  <div
                    className={`${partner.background}`}
                    style={{ padding: "10px", display: "inline-block" }}
                  >
                    <Image
                      src={partner.logo}
                      alt={partner.name}
                      width={200} // dimensione desiderata
                      height={100} // mantiene proporzioni
                      style={{ objectFit: "contain" }}
                      loading="lazy"
                    />
                  </div>
                </div>
              ))}
            </div>
          </section>

          {jobs.length > 0 && (
            <section id="realizzazioni">
              <h3 className="text-uppercase fw-medium text-center">
                Realizzazioni
              </h3>
              <div className="d-flex justify-content-center align-items-center mt-4 gap-5 flex-wrap">
                {jobs.map((job, index) => (
                  <div
                    key={index}
                    className="d-flex justify-content-center align-items-center flex-wrap"
                  >
                    {job.images.length > 1 ? (
                      <Carousel
                        key={index}
                        id={`carouselJob${index}`}
                        images={job.images}
                        width={300}
                        height={200}
                        objectFit="contain"
                      />
                    ) : (
                      <div style={{ width: 300, height: 200 }}>
                        <Image
                          src={job.images[0].path}
                          alt={job.images[0].description || "installazione"}
                          width={300}
                          height={200}
                          style={{ objectFit: "contain" }}
                          loading="lazy"
                        />
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </section>
          )}

          {reviews.length > 0 && (
            <section id="clienti">
              <h3 className="text-uppercase fw-medium text-center">Clienti</h3>
              <div className="d-flex justify-content-center align-items-center mt-4 gap-5 flex-wrap">
                {reviews.map((item, index) => (
                  <ReviewCard key={index} review={item} />
                ))}
              </div>
            </section>
          )}

          <ContactCTA />
        </PageLayout>
      </main>
    </>
  );
}
