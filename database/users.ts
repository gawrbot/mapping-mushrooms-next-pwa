import { sql } from './connect';

export type User = {
  id: number;
  username: string;
  passwordHash?: string;
};

export async function getUserByUsername(username: string) {
  if (!username) return undefined;

  const [user] = await sql<{ id: number; username: string }[]>`
  SELECT
    id,
    username
  FROM
    users
  WHERE
    users.username = ${username}
  `;

  return user!;
}

export async function getUserWithPasswordHashByUsername(username: string) {
  if (!username) return undefined;

  const [user] = await sql<User[]>`
  SELECT
    *
  FROM
    users
  WHERE
    users.username = ${username}
  `;

  return user!;
}

export async function getUserBySessionToken(token: string) {
  if (!token) return undefined;

  const [user] = await sql<{ id: number; username: string }[]>`
  SELECT
    users.id,
    users.username
  FROM
    users,
    sessions
  WHERE
    sessions.token = ${token} AND
    sessions.user_id = users.id AND
    sessions.expiry_timestamp > now();
  `;

  return user!;
}

export async function createUser(username: string, passwordHash: string) {
  const [newUser] = await sql<{ id: number; username: string }[]>`
  INSERT INTO users
    (username, password_hash)
  VALUES
    (${username}, ${passwordHash})
  RETURNING
    id,
    username
  `;

  return newUser!;
}

export async function deleteUser(username: string, passwordHash: string) {
  const [deletedUser] = await sql<{ id: number; username: string }[]>`
  DELETE FROM users
  WHERE
    username = ${username} AND
    password_hash = ${passwordHash}
  RETURNING
    id,
    username
  `;

  return deletedUser!;
}

export async function getUserByUserId(userId: number) {
  if (!userId) return undefined;

  const [user] = await sql<{ id: number; username: string }[]>`
  SELECT
    id,
    username
  FROM
    users
  WHERE
    users.id = ${userId}
  `;

  return user!;
}

export async function getAllUsers() {
  const users = await sql<{ id: number; username: string }[]>`
  SELECT
    *
  FROM
    users

  `;

  return users;
}
