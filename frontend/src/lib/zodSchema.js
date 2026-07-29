import { z } from "zod";

export const addTaskSchema = z.object({
  text: z.string().trim().min(1, {
    error: "Task is required",
  }),
});
