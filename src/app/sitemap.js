import { getAllArticles } from "@/scripts/articlesLoader";
import products from "@/data/products.json";

export const dynamic = "force-dynamic";
export const revalidate = 0;

const BASE_URL = "https://gsm-sistemi.it";
// Questa costante viene valutata una sola volta all'avvio del server/build
const LAST_MODIFIED_GLOBAL = new Date();

export default async function sitemap() {
  const articles = getAllArticles();

  const articleUrls = articles.map((article) => {
    let articleDate;
    try {
      // Prova a invertire il formato DD/MM/YYYY in YYYY-MM-DD
      const formattedDate = article.date.split("/").reverse().join("-");
      articleDate = new Date(formattedDate);

      // Se la data non è valida (NaN), usa la data globale
      if (isNaN(articleDate.getTime())) throw new Error();
    } catch (e) {
      articleDate = LAST_MODIFIED_GLOBAL;
    }

    return {
      url: `${BASE_URL}/news/${article.slug}`,
      lastModified: articleDate,
      changefreq: "weekly",
      priority: 0.6,
    };
  });

  const productsUrls = products.map((product, index) => ({
    url: `${BASE_URL}/prodotti/${product.slug || index}`,
    lastModified: product.date ? new Date(product.date) : LAST_MODIFIED_GLOBAL,
    changefreq: "monthly",
    priority: 0.8,
  }));

  const pagesUrls = [
    {
      url: `${BASE_URL}`,
      lastModified: LAST_MODIFIED_GLOBAL,
      changefreq: "weekly",
      priority: 1.0,
    },
    {
      url: `${BASE_URL}/infissi-trapani`,
      lastModified: LAST_MODIFIED_GLOBAL,
      changefreq: "weekly",
      priority: 1.0,
    },
    {
      url: `${BASE_URL}/servizi`,
      lastModified: LAST_MODIFIED_GLOBAL,
      changefreq: "yearly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/partners`,
      lastModified: LAST_MODIFIED_GLOBAL,
      changefreq: "yearly",
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/contatti`,
      lastModified: LAST_MODIFIED_GLOBAL,
      changefreq: "yearly",
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/privacy-terms`,
      lastModified: LAST_MODIFIED_GLOBAL,
      changefreq: "yearly",
      priority: 0.3,
    },
  ];

  return [...articleUrls, ...productsUrls, ...pagesUrls];
}
