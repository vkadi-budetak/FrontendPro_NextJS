import { integer, pgTable, timestamp, varchar } from "drizzle-orm/pg-core";
export const postsTable = pgTable("posts", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  title: varchar({ length: 255 }).notNull(),
  text: varchar({ length: 255 }).notNull(),
});

export const reviewsTable = pgTable("reviews", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  title: varchar({ length: 255 }).notNull(),
  content: varchar({ length: 255 }).notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(), // дата свторення створится
});

// npx drizzle-kit generate - згенерирует файл с миграциями SQL (цей файл створится drizzle-> meta -> там файл)
// npx drizzle-kit migrate - застосує до ниших таблиць

// npm run db:generate
// npm run db:migrate
