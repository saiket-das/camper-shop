import { z } from "zod";

const createProductSchema = z.object({
  body: z.object({
    name: z.string({ required_error: "Name is required" }),
    price: z.number().positive({ message: "Price must be a positive number" }),
    stock: z
      .number()
      .int()
      .nonnegative({ message: "Stock must be a non-negative integer" }),
    description: z.string().optional(),
    category: z.string({ required_error: "Category is required" }),
    images: z.array(z.string().url()),
    ratings: z.number().min(0).max(5).optional(),
  }),
});

const updateProductSchema = z.object({
  body: z.object({
    name: z.string().optional(),
    price: z.number().positive().optional(),
    stock: z.number().int().nonnegative().optional(),
    description: z.string().optional().optional(),
    category: z.string().optional(),
    images: z.array(z.string().url()).optional(),
    ratings: z.number().min(0).max(5).optional(),
  }),
});

export const ProductValidations = {
  createProductSchema,
  updateProductSchema,
};
