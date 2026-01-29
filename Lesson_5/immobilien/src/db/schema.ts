import {
  boolean,
  integer,
  pgTable,
  serial,
  text,
  timestamp,
  varchar,
} from "drizzle-orm/pg-core";

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

//? Ми створюємо таюлицю для зберігання інофрмації юзера в базі
export const users = pgTable("users", {
  id: serial().primaryKey(),
  name: varchar({ length: 250 }).notNull(),
  email: varchar({ length: 250 }).notNull().unique(),
  image: text(),
  role: varchar({ length: 100 }).default("customer"),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

//? прописуємо відношення
export const todos = pgTable("todos", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  title: varchar({ length: 250 }).notNull(),
  description: varchar({ length: 250 }).notNull(),
  status: boolean().default(false),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  userId: integer("user_id")
    .notNull()
    .references(() => users.id, { onDelete: "cascade" }),
});
