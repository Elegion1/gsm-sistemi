import { getAllArticles } from "@/scripts/articlesLoader";
import products from "@/data/products.json";

export const dynamic = "force-dynamic";
export const revalidate = 0;

const BASE_URL = "https://gsm-sistemi.it";

export default async function sitemap() {
  const articles = getAllArticles();

  const articleUrls = articles.map((article) => ({
    url: `${BASE_URL}/news/${article.slug}`,
    lastModified: new Date(article.date.split("/").reverse().join("-")),
    changefreq: "weekly",
    priority: 0.6,
  }));

  const productsUrls = products.map((product, index) => ({
    url: `${BASE_URL}/prodotti/${product.slug || index}`,
    lastModified: product.date ? new Date(product.date) : new Date(),
    changefreq: "monthly",
    priority: 0.8,
  }));

  const pagesUrls = [
    {
      url: `${BASE_URL}`,
      lastModified: new Date(),
      changefreq: "weekly",
      priority: 1.0,
    },
    {
      url: `${BASE_URL}/servizi`,
      lastModified: new Date(),
      changefreq: "yearly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/partners`,
      lastModified: new Date(),
      changefreq: "yearly",
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/contatti`,
      lastModified: new Date(),
      changefreq: "yearly",
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/privacy-terms`,
      lastModified: new Date(),
      changefreq: "yearly",
      priority: 0.3,
    },
  ];

  return [...articleUrls, ...productsUrls, ...pagesUrls];
}
