import PageLayout from "@/app/components/PageLayout";
import ContactCTA from "@/app/components/ContactCTA";
import articles from "@/data/articles";
import owner from "@/data/owner";
import Link from "next/link";

export async function generateMetadata({ params }) {
  const resolvedParams = await params;
  const slug = resolvedParams.slug;

  const article = articles.find((p) => p.slug === slug);

  if (!article) {
    return {
      title: `Blog | ${owner.companyName}`,
      description: `Rimani aggiornato con le ultime notizie e consigli su infissi, serramenti e zanzariere a Trapani. Scopri le novità del settore e le migliori soluzioni per la tua casa.`,
    };
  }

  return {
    title: `${article.title} | Blog | ${owner.companyName}`,
    description: `${article.excerpt}`,
    alternates: {
      canonical: `/news/${slug}`,
    },
  };
}

export default async function ArticlePage({ params }) {
  const { slug } = await params;
  const article = articles.find((a) => a.slug === slug);
  const articlesRelated = articles.filter((a) => a.slug !== slug).slice(0, 3);

  if (!article) {
    return <div>Article not found</div>;
  }

  return (
    <>
      <div style={{ height: "20vh" }}></div>
      <PageLayout>
        <section className="row">
          <article id={article.slug} className="col-12 col-md-6">
            <h1>{article.title}</h1>
            <div>
              {article.body.split("\n").map((line, i) => (
                <span key={i}>
                  {line}
                  <br />
                </span>
              ))}
            </div>
          </article>
          <aside className="col-12 col-md-6">
            <h2 className="text-uppercase text-center fs-6 fw-bold mb-4 mt-5 mt-md-0">
              Articoli correlati
            </h2>
            <div className="px-5 pb-5">
              {articlesRelated.map((related) => (
                <article
                  key={related.slug}
                  className="mb-3 d-flex flex-column align-items-center article-card bg-d p-3"
                >
                  <h3 className="fw-normal fs-6 fw-bold mb-2 text-center">
                    {related.title}
                  </h3>
                  <p className="text-muted text-center">{related.excerpt}</p>
                  <Link
                    href={`/news/${related.slug}`}
                    className="btn bg-a text-d"
                  >
                    Leggi di più
                  </Link>
                </article>
              ))}
            </div>
          </aside>
        </section>
        <ContactCTA />
      </PageLayout>
    </>
  );
}
