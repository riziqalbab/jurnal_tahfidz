import { pgTable, serial, text, varchar } from "drizzle-orm/pg-core";
import { drizzle } from "drizzle-orm/node-postgres";
import { Client } from "pg";

export const client = new Client({
  connectionString: process.env.DRIZZLE_DATABASE_URL,
});

client.connect();
const db = drizzle(client);
export default db;
