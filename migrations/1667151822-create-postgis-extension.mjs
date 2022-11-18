export async function up(sql) {
  await sql`
  CREATE EXTENSION postgis
  `;
}

export async function down(sql) {
  await sql`
    DROP EXTENSION postgis
  `;
}
