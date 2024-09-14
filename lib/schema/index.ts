
import { z } from "zod"

export const contactFormSchema =z.object({
    name: z.string().min(1, {
      message: "Oops it looks like you didn't type your Name.",
    }),
    email: z.string().min(2, {
        message: "Oops it looks like you didn't type your Email.",
      }),
      message: z.string().min(1, {
        message: "Oops it looks like you didn't type any character.",
      }),
  })
  
