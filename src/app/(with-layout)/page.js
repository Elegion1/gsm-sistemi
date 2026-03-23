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
import { getRecentArticles } from "@/scripts/articlesLoader";
import ReviewCard from "@/app/components/ReviewCard";
import Article from "@/app/components/ArticleCard";
import PartnerCard from "@/app/components/PartnerCard";

const visiblePartners = partners.filter((partner) => partner.show !== false);

const products = productsData.slice(0, 8);

export const metadata = {
  title: `Infissi e Serramenti a Trapani | GSM Sistemi - Alluminio, PVC, Legno`,
  description: owner.seoDescription,
  keywords: owner.seoKeywords,
  alternates: {
    canonical: "/",
  },
};

const recentArticles = getRecentArticles(4);

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
          <section id="chi-siamo" className="py-5">
            {/* Titolo ottimizzato SEO: H2 è meglio di H3 per la sezione principale */}
            <h2 className="text-uppercase fw-bold text-center mb-5">
              Infissi e Serramenti a Trapani
            </h2>
            <h3 className="text-uppercase fw-medium text-center">chi siamo</h3>

            <p className="text-center mt-4 fs-4 fw-normal">
              <span className="fw-bold">{owner.legalName}</span> è il punto di
              riferimento a<span className="fw-bold"> Trapani ed Erice </span>
              per la vendita e l'installazione di
              <span className="fw-bold text-primary">
                {" "}
                <Link href="/infissi-trapani">infissi in PVC, alluminio e legno</Link>
              </span>
              . La nostra sede in{" "}
              <span className="fw-medium">
                {owner.address.street}, {owner.address.streetNumber} –{" "}
                {owner.address.locality} ({owner.address.province})
              </span>
              , ci permette di servire con rapidità tutta la provincia, offrendo
              soluzioni certificate per il risparmio energetico.
            </p>

            <p className="text-center mt-4 fs-4 fw-normal">
              Siamo specializzati in un servizio "chiavi in mano" che include:
              <strong>
                {" "}
                consulenza tecnica, sopralluoghi gratuiti a Trapani e provincia
              </strong>
              , progettazione su misura e posa in opera qualificata di porte
              interne, zanzariere, sistemi oscuranti e grate di sicurezza.
            </p>

            <p className="text-center mt-4 fs-4 fw-normal">
              La nostra missione è garantire il massimo isolamento termico e
              acustico per la tua casa, aiutandoti a usufruire delle{" "}
              <strong>agevolazioni fiscali e dei bonus infissi 2026</strong>.
              Affianchiamo privati e aziende con soluzioni tecniche precise,
              durevoli e dal design moderno.
            </p>

            {/* Un piccolo tocco di Local SEO extra: citare le zone vicine */}
            <p className="text-center mt-3 fs-6 text-muted italic">
              Operiamo con successo a Trapani, Erice, Valderice, Paceco, Marsala
              e comuni limitrofi.
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
              {visiblePartners.map((partner, index) => (
                <PartnerCard
                  key={index}
                  partner={partner}
                  showOverlay={false}
                />
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
