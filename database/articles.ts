import { sql } from './connect';

export type Article = {
  id: number;
  title: string;
  slug: string;
  imagePreview: string;
  content: string;
  type: string;
};

export async function getAllArticles() {
  const articles = await sql<Article[]>`
  SELECT
    *
  FROM
    articles
  `;

  return articles;
}

export async function getArticleBySlug(slug: string) {
  if (!slug) return undefined;

  const [article] = await sql<Article[]>`
  SELECT
    *
  FROM
    articles
  WHERE
    articles.slug = ${slug}
  `;

  return article;
}
