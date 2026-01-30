"use server";

import { db } from "@/db";
import { todos } from "@/db/schema";
import { eq, sql } from "drizzle-orm";
import { revalidatePath } from "next/cache";

//* Прописуємо логіку добавлення галочки виконано чи не виконана тудушка
export default async function changeTodoStatus(id: number) {
  await db
    .update(todos)
    .set({ status: sql`NOT status` })
    .where(eq(todos.id, id));

  //* обновлятиме сторінку
  revalidatePath("/todos");
}
