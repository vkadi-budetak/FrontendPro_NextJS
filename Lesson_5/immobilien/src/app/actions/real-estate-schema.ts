import z from "zod";

export const RealEstateInsertSchema = z.object({
  title: z
    .string()
    .trim()
    .min(3, "Min length must be at least 3 symbols")
    .max(120),

  address: z
    .string()
    .trim()
    .min(3, "Min length must be at least 3 symbols")
    .max(240),

  price: z.string().refine((v) => !isNaN(Number(v)) && Number(v) > 0, {
    message: "Price must be a positive number",
  }),
});
