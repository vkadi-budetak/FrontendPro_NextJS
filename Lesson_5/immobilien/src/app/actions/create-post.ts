"use server";

import { db } from "@/db";
import { postsTable } from "@/db/schema";
import { revalidatePath } from "next/cache";
import z from "zod";

//! стврорюємо схему для валідації поста
const PostInsertSchema = z.object({
  title: z
    .string()
    .trim()
    .min(3, "Min length is 3 chars")
    .max(120, "Max length of title is 120 symbols"),
  text: z
    .string()
    .trim()
    .min(3, "Min length is 3 chars")
    .max(120, "Max length of title is 120 symbols"),
});

export async function createPost(formData: FormData) {
  const title = formData.get("title") as string;
  const text = formData.get("text") as string;
  //   console.log(title, text); // подивитися у терміналі

  try {
    // Прописуємо валідацію
    const newPost = PostInsertSchema.parse({ title, text });
    await db.insert(postsTable).values(newPost); // записати у базу даних і зберегти
    revalidatePath("/news"); // вивести добавлений текст
    // return { succes: true };
  } catch (err) {
    if (err instanceof z.ZodError) {
      // return { success: false, fieldErrors: err.flatten().fieldErrors };
    }
  }
}
