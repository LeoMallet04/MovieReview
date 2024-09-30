import { z } from "zod"

const mySchema = z.object({
    username: z.string()
      .nonempty("Username is required")
      .regex(/^[A-Za-z]+$/i, "Only letters are allowed"),
    password: z.string()
      .nonempty("Password is required"),
    confirm_password: z.string()
      .nonempty("Confirm password is required")
  })

mySchema.parse({ username: "Leonardo"})