export async function up(sql) {
  await sql`
  CREATE TABLE images (
    id integer PRIMARY KEY GENERATED BY DEFAULT AS IDENTITY,
    date timestamp NOT NULL DEFAULT NOW(),
    image varchar NOT NULL,
    longitude decimal NOT NULL,
    latitude decimal NOT NULL,
    note varchar,
    users_userName varchar REFERENCES users (username) ON DELETE CASCADE,
		users_id integer REFERENCES users (id) ON DELETE CASCADE,
    articles_id integer REFERENCES articles (id) ON DELETE CASCADE
  )
  `;
}

export async function down(sql) {
  await sql`
    DROP TABLE images
  `;
}
