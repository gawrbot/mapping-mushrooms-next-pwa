import { sql } from './connect';

export type Comment = {
  id: number;
  comment: string;
  date: number;
  userId: number;
  imageId: number;
};

export async function getCommentsByUserId(userId: number) {
  const comments = await sql<Comment[]>`
  SELECT
    *
  FROM
    comments
  WHERE
    comments.user_id = ${userId}
  `;

  return comments;
}

export async function getCommentsByImageId(imageId: number) {
  const comments = await sql<Comment[]>`
  SELECT
    *
  FROM
    comments
  WHERE
    comments.image_id = ${imageId}
  `;

  return comments;
}

export async function createComment(
  comment: string,
  date: number,
  userId: number,
  imageId: number,
) {
  const [newComment] = await sql<Comment[]>`
  INSERT INTO comments
    (comment, date, userId, imageId)
  VALUES
    (${comment}, ${date}, ${userId}, ${imageId})
  `;
  return newComment;
}

export async function updateComment(commentId: number, comment: string) {
  const [updatedComment] = await sql<Comment[]>`
  UPDATE
    comments
  SET
    comment = ${comment}
  WHERE
    comments.id = ${commentId}
  `;
  return updatedComment;
}

export async function deleteComment(commentId: number) {
  const [deletedComment] = await sql<Comment[]>`
  DELETE FROM
    comments
  WHERE
    comments.id = ${commentId}
  `;
  return deletedComment;
}

// from here on: copied from users --> maybe useful later
// export async function getUserWithPasswordHashByUsername(username: string) {
//   if (!username) return undefined;

//   const [user] = await sql<User[]>`
//   SELECT
//     *
//   FROM
//     users
//   WHERE
//     users.username = ${username}
//   `;

//   return user;
// }

// export async function getUserBySessionToken(token: string) {
//   if (!token) return undefined;

//   const [user] = await sql<{ id: number; username: string }[]>`
//   SELECT
//     users.id,
//     users.username
//   FROM
//     users,
//     sessions
//   WHERE
//     sessions.token = ${token} AND
//     sessions.user_id = users.id AND
//     sessions.expiry_timestamp > now();
//   `;

//   return user;
// }

// export async function createUser(username: string, password_hash: string) {
//   const [userWithoutPassword] = await sql<{ id: number; username: string }[]>`
//   INSERT INTO users
//     (username, password_hash)
//   VALUES
//     (${username}, ${password_hash})
//   RETURNING
//     id,
//     username
//   `;

//   return userWithoutPassword!;
// }
