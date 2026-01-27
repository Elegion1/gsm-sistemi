import Link from "next/link";
import Hero from "@/app/components/Hero";
import PageLayout from "@/app/components/PageLayout";
import { getAllArticles } from "@/scripts/articlesLoader";
import jobs from "@/data/jobs.json";
import Image from "next/image";
import Carousel from "@/app/components/Carousel";
import ContactCTA from "@/app/components/ContactCTA";

export const metadata = {
  title: "News | Blog su infissi, serramenti e zanzariere a Trapani",
  description:
    "Rimani aggiornato con le ultime notizie e consigli su infissi, serramenti e zanzariere a Trapani. Scopri le novità del settore e le migliori soluzioni per la tua casa.",
  keywords:
    "news infissi Trapani, blog serramenti Trapani, aggiornamenti zanzariere Trapani, consigli infissi, novità serramenti, guide zanzariere",
  alternates: {
    canonical: "/news",
  },
};

const articles = getAllArticles();

export default function NewsPage() {
  return (
    <>
      <Hero
        title={"Blog"}
        description={
          "News e aggiornamenti su infissi, serramenti e zanzariere a Trapani"
        }
        image={"/images/news.png"}
      />
      <PageLayout>
        <div className="row gap-3 gap-lg-0">
          <section className="col-12 col-md-6">
            <h3 className="fw-normal fs-4 mb-3">Ultimi articoli</h3>
            <div
              className="d-flex flex-column overflow-y-auto gap-3 pb-3"
              style={{
                maxHeight:"150vh",
                scrollSnapType: "y mandatory",
                WebkitOverflowScrolling: "touch",
              }}
            >
              {articles.map((article) => (
                <article
                  key={article.slug}
                  className="flex-shrink-0 bg-light p-3 rounded"
                  style={{
                    minHeight: "120px", // altezza minima per ciascun articolo
                    scrollSnapAlign: "start",
                  }}
                >
                  <div className="d-flex justify-content-between align-items-center mb-2">
                    <h4 className="fw-medium fs-5">{article.title}</h4>
                    <time className="text-muted">
                      <small>{article.date}</small>
                    </time>
                  </div>
                  <p className="text-muted">{article.excerpt}</p>
                  <Link
                    href={`/news/${article.slug}`}
                    className="btn text-d bg-a mt-2"
                  >
                    Leggi di più
                  </Link>
                </article>
              ))}
            </div>
          </section>
          <article className="col-12 col-md-6">
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
          </article>
        </div>
        <ContactCTA />
      </PageLayout>
    </>
  );
}
