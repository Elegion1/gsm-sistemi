import Link from "next/link";
import Hero from "@/app/components/Hero";
import PageLayout from "@/app/components/PageLayout";
import articles from "@/data/articles";
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
};

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
        <div className="row">
          <section className="col-12 col-md-6">
            {articles.map((article) => (
              <article key={article.slug} className="mb-5">
                <div className="d-flex justify-content-between align-items-center mb-3">
                  <h3 className="fw-normal fs-4">{article.title}</h3>
                  <time className="text-muted">{article.date}</time>
                </div>
                <p className="text-muted">{article.excerpt}</p>
                <Link
                  href={`/news/${article.slug}`}
                  className="btn text-d bg-a"
                >
                  Leggi di più
                </Link>
              </article>
            ))}
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
