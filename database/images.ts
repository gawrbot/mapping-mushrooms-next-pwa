import { sql } from './connect';

export type ImageType = {
  id: number;
  date: number;
  time: number;
  image: string;
  longitude: number;
  latitude: number;
  userId: number;
  usersUsername: string;
  note?: string;
  articleId?: number;
};

export async function getAllImages() {
  const images = await sql<ImageType[]>`
  SELECT
    id,
    image,
    date,
    date_trunc('second', date::timestamp::time) AS time,
    ST_X(ST_TRANSFORM(coordinates,4674)) AS longitude,
    ST_Y(ST_TRANSFORM(coordinates,4674)) AS latitude,
    users_id,
    users_username,
    note,
    articles_Id
  FROM
    images
  `;

  return images;
}

export async function getImagesByUserId(userId: number) {
  const images = await sql<ImageType[]>`
  SELECT
    id,
    image,
    date,
    date_trunc('second', date::timestamp::time) AS time,
    ST_X(ST_TRANSFORM(coordinates,4674)) AS longitude,
    ST_Y(ST_TRANSFORM(coordinates,4674)) AS latitude,
    users_id,
    users_username,
    note,
    articles_Id
  FROM
    images
  WHERE
    users_id = ${userId}
  `;

  return images;
}

export async function getImageByCoordinates(
  longitude: number,
  latitude: number,
) {
  if (!longitude) return undefined;
  if (!latitude) return undefined;

  const [image] = await sql<ImageType[]>`
  SELECT
    *
  FROM
    images
  WHERE
    ST_X(ST_Transform(coordinates, 4326)) = ${longitude} AND
    ST_Y(ST_Transform(coordinates, 4326)) = ${latitude}
  `;

  return image;
}

export async function getImageById(imageId: number) {
  if (!imageId) return undefined;

  const [image] = await sql<ImageType[]>`
  SELECT
    id,
    image,
    date,
    date_trunc('second', date::timestamp::time) AS time,
    ST_X(ST_TRANSFORM(coordinates,4674)) AS longitude,
    ST_Y(ST_TRANSFORM(coordinates,4674)) AS latitude,
    users_id,
    users_username,
    note,
    articles_Id
  FROM
    images
  WHERE
    id = ${imageId}
  `;

  return image;
}

export async function createImage(
  image: string,
  longitude: number,
  latitude: number,
  userId: number,
  userName: string,
  note: string,
  articleId: number,
) {
  // if (!note) {
  const [newImage] = await sql<ImageType[]>`
  INSERT INTO images
    (image, coordinates, users_id, users_username, note, articles_id)
  VALUES
    (${image}, ST_SetSRID(ST_MakePoint(${longitude}, ${latitude}), 4326), ${userId}, ${userName}, ${note}, ${articleId})
  RETURNING
    *
  `;
  return newImage;
}

export async function deleteImageById(imageId: number) {
  const [deletedImage] = await sql<ImageType[]>`
  DELETE FROM
    images
  WHERE
    id = ${imageId}
  RETURNING
    *
  `;

  return deletedImage;
}

export async function updateArticleIdByImage(image: string, articleId: number) {
  const [updatedArticleId] = await sql<ImageType[]>`
  UPDATE
    images
  SET
    article_id = ${articleId}
  WHERE
    image = ${image}
  RETURNING
    *
  `;
  return updatedArticleId;
}

export async function updateNoteByImage(image: string, note: string) {
  const [updatedArticleId] = await sql<ImageType[]>`
  UPDATE
    images
  SET
    note = ${note}
  WHERE
    image = ${image}
  RETURNING
    *
  `;
  return updatedArticleId;
}
