import PageLayout from "@/app/components/PageLayout";
import ContactCTA from "@/app/components/ContactCTA";
import { getAllArticles, getArticleBySlug } from "@/scripts/articlesLoader";
import owner from "@/data/owner";
import products from "@/data/products";
import RelatedProducts from "@/app/components/RelatedProducts";
import Link from "next/link";
import Article from "@/app/components/ArticleCard";
import ArticleBody from "@/app/components/ArticleBody";

export async function generateMetadata({ params }) {
  const resolvedParams = await params;
  const slug = resolvedParams.slug;

  const article = getArticleBySlug(slug);

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
  const article = getArticleBySlug(slug);
  const articlesRelated = getAllArticles()
    .filter((a) => a.slug !== slug)
    .sort(() => Math.random() - 0.5)
    .slice(0, 3);

  if (!article) {
    return (
      <div
        className="d-flex justify-content-center align-items-center flex-column gap-4"
        style={{ height: "60vh" }}
      >
        <h1 className="text-center text-uppercase">Articolo non trovato</h1>
        <Link className="btn bg-a text-d" href="/news">
          Torna al blog
        </Link>
      </div>
    );
  }

  return (
    <>
      <div style={{ height: "15vh" }}></div>
      <PageLayout>
        <section className="row">
          <article id={article.slug} className="col-12 col-md-6">
            <h1>{article.title}</h1>
            <ArticleBody body={article.body} />
          </article>
          <aside className="col-12 col-md-6">
            <h2 className="text-uppercase text-center fs-6 fw-bold mb-4 mt-5 mt-md-0 w-100 w-md-auto">
              Articoli correlati
            </h2>
            <div className="px-2 px-md-5">
              {articlesRelated.map((related) => (
                <Article key={related.slug} article={related} />
              ))}
            </div>
            <div className="">
              <h3 className="text-uppercase text-center fs-6 fw-bold mb-4 mt-5 mt-md-0 w-100 w-md-auto">
                Scopri i nostri prodotti
              </h3>
              <RelatedProducts items={products} title={false} />
            </div>
          </aside>
        </section>
        <ContactCTA />
      </PageLayout>
    </>
  );
}
