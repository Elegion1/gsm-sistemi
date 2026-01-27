import fs from "fs";
import path from "path";
import matter from "gray-matter";

const ARTICLES_DIR = path.join(process.cwd(), "/src/data/articles");

function parseDate(dateStr) {
  const [day, month, year] = dateStr.split("/").map(Number);
  return new Date(year, month - 1, day);
}

export function getAllArticles() {
  const files = fs.readdirSync(ARTICLES_DIR).filter((f) => f.endsWith(".md"));

  const articles = files.map((file) => {
    const fullPath = path.join(ARTICLES_DIR, file);
    const fileContent = fs.readFileSync(fullPath, "utf8");
    const { data, content } = matter(fileContent);

    return {
      ...data,
      body: content,
    };
  });

  // ordina per data discendente correttamente
  articles.sort((a, b) => parseDate(b.date) - parseDate(a.date));

  return articles;
}

export function getArticleBySlug(slug) {
  return getAllArticles().find((a) => a.slug === slug);
}

export function getRecentArticles(count = 3) {
  return getAllArticles().slice(0, count);
}
