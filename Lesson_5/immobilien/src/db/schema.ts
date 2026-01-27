import { integer, pgTable, varchar } from "drizzle-orm/pg-core";
export const postsTable = pgTable("posts", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  title: varchar({ length: 255 }).notNull(),
  text: varchar({ length: 255 }).notNull(),
});

// npx drizzle-kit generate - згенерирует файл с миграциями SQL (цей файл створится drizzle-> meta -> там файл)
// npx drizzle-kit migrate - застосує до ниших таблиць
