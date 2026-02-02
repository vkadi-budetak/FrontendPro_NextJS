"use server";

import { db } from "@/db";
import { realEstates } from "@/db/schema";
import { authOptions } from "@/lib/auth/auth-options";
import { getServerSession } from "next-auth";
import { RealEstateInsertSchema } from "./real-estate-schema";

export type ActionState = {
  errors?: Record<string, string[]>;
  success?: boolean;
};

export async function createRealEstate(
  prevState: ActionState,
  formData: FormData,
): Promise<ActionState> {
  const session = await getServerSession(authOptions);
  if (!session) {
    throw new Error("Unauthorized");
  }

  const row = Object.fromEntries(formData);
  const parsed = RealEstateInsertSchema.safeParse(row);

  if (!parsed.success) {
    return {
      errors: parsed.error.flatten().fieldErrors,
    };
  }

  await db.insert(realEstates).values({
    title: parsed.data.title,
    address: parsed.data.address,
    price: parsed.data.price,
    userId: session.user.id!,
  });

  return { success: true };
}
