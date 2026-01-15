import Link from "next/link";

export default function Article({ article, height }) {
  return (
    <article
      style={{ "--card-height": `${height}dvh` }}
      key={article.slug}
      className="mb-3 d-flex flex-column align-items-center justify-content-center article-card bg-d p-3"
    >
      <h3 className="fw-normal fs-6 fw-bold mb-2 text-center">
        {article.title}
      </h3>
      <p className="text-muted text-center">{article.excerpt}</p>
      <Link href={`/news/${article.slug}`} className="btn bg-a text-d">
        Leggi di più
      </Link>
    </article>
  );
}
