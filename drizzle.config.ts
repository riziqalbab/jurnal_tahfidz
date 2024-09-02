import { defineConfig } from "drizzle-kit";

export default defineConfig({
  schema: "./src/db/schema",
  out: "./drizzle",
  dialect: "postgresql", // 'postgresql' | 'mysql' | 'sqlite'
});
