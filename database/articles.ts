import { sql } from './connect';

export type Article = {
  id: number;
  title: string;
  slug: string;
  imagePreview: string;
  type: string;
};

export async function createAllArticles(
  title: string,
  slug: string,
  image: string,
  type: string,
) {
  const [article] = await sql<Article[]>`
  INSERT INTO articles
    (title, slug, image_preview, type)
  VALUES
    (${title}, ${slug}, ${image}, ${type})
  `;
  return article;
}

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
