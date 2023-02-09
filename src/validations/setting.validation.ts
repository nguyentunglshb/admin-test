import { z } from "zod";

export const SettingFormSchema = z.object({
  title: z.string().trim().min(1, {
    message: "title is required",
  }),
  email: z.string().email(),
  color: z.string().trim().min(1, {
    message: "color is required",
  }),
  date: z.string().array().min(1, {
    message: "Date cannot be empty",
  }),
});
