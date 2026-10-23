"use server";

import { signIn } from "@/auth";
import sql from "@/lib/db";
import bcrypt from "bcryptjs";
import { AuthError } from "next-auth";
import { redirect } from "next/navigation";
import { z } from "zod";
import { signOut } from "@/auth";

const signupShema = z.object({
  name: z.string().min(5, { message: "باید حداقل 5 کاراکتر داشته باشد" }),
  email: z.string().email({ message: "ایمیل را به درستی وارد کنید" }),
  password: z.string().min(8, { message: "باید حداقل 8 کاراکتر داشته باشد" }),
});

export type State = {
  errors?: {
    name?: string[];
    email?: string[];
    password?: string[];
  };
  message?: string | null;
};

export async function createUser(prevState: State, formData: FormData) {
  const validateFeilds = signupShema.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
    password: formData.get("password"),
  });

  if (!validateFeilds.success) {
    return {
      errors: validateFeilds.error.flatten().fieldErrors,
      message: "خطایی رخ داد.",
    };
  }

  const { name, email, password } = validateFeilds.data;

  const existedUser = await sql`SELECT * FROM users WHERE email = ${email}`;
  if (existedUser.length > 0) {
    return { message: "این کاربر قبلا وجود داشته است" };
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  try {
    await sql`INSERT INTO users (name,email,password) VALUES (${name},${email},${hashedPassword})`;
  } catch (error) {
    console.log(error);
    return { message: "خطایی رخ داد." };
  }

  redirect("/login");
}

export async function authenticate(
  prevState: string | undefined,
  formData: FormData,
) {
  try {
    await signIn("credentials", formData);
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case "CredentialsSignin":
          return "ایمیل یا رمز عبور شما اشتباه است.";
        default:
          return "خطایی رخ داد.";
      }
    }
    throw error;
  }
}

export async function logout() {
  await signOut({
    redirectTo: "/",
  });
}
