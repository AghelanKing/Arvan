"use server";

import { signOut } from "@/auth";
import sql from "@/lib/db";
import bcrypt from "bcryptjs";
import { updateTag } from "next/cache";
import { z } from "zod";

const updateNameSchema = z.object({
  name: z.string().min(5, {
    message: "باید حداقل 5 کاراکتر داشته باشد",
  }),
});

const updatePassSchema = z.object({
  password: z.string().min(5, {
    message: "باید حداقل 5 کاراکتر داشته باشد",
  }),
  passwordRepeat: z.string().min(1, { message: "این فیلد نباید خالی باشه" }),
});

export type InfoState = {
  errors?: {
    name?: string[];
  };
  message?: string | null;
  success?: boolean | null;
};

export type PassState = {
  errors?: {
    password?: string[];
    passwordRepeat?: string[];
  };
  message?: string | null;
  success?: boolean | null;
};

export async function UpdateProfile(
  userId: string | null | undefined,
  prevState: InfoState,
  formData: FormData,
): Promise<InfoState> {
  if (!userId) {
    return { message: "برای ویرایش پروفایل باید وارد حساب شوید." };
  }

  const validateFields = updateNameSchema.safeParse({
    name: formData.get("name"),
  });

  if (!validateFields.success) {
    return {
      message: "لطفا مقادیر وارد شده را چک و دوباره وارد کنید",
      errors: validateFields.error.flatten().fieldErrors,
    };
  }

  const { name } = validateFields.data;

  try {
    await sql`
      UPDATE users
      SET name = ${name}
      WHERE id = ${userId}
    `;
    updateTag(`name:${userId}`);
  } catch (error) {
    console.error(error);

    return {
      success: false,
      message: "تغییر نام ناموفق بود.",
    };
  }
  return {
    success: true,
    message: "اطلاعات پروفایل با موفقیت به روز رسانی شد.",
  };
}

export async function updatePassword(
  userId: string | null | undefined,
  prevState: PassState,
  formData: FormData,
): Promise<PassState> {
  if (!userId) {
    return { message: "برای ویرایش پروفایل باید وارد حساب شوید." };
  }

  const validateFields = updatePassSchema.safeParse({
    password: formData.get("password"),
    passwordRepeat: formData.get("passwordRepeat"),
  });

  if (!validateFields.success) {
    return {
      errors: validateFields.error.flatten().fieldErrors,
    };
  }

  const { password, passwordRepeat } = validateFields.data;

  if (password !== passwordRepeat) {
    return {
      success: false,
      message: "رمز عبور و تکرار آن با یکدیگر مطابقت ندارند.",
    };
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  try {
    await sql`
      UPDATE users
      SET password = ${hashedPassword}
      WHERE id = ${userId}
    `;
    updateTag(`name:${userId}`);
    return {
      success: true,
      message: "رمز عبور شما با موفقیت به‌روز رسانی شد.",
    };
  } catch (error) {
    console.error(error);

    return {
      success: false,
      message: "تغییر رمز عبور ناموفق بود.",
    };
  }
}

export async function deleteAccount(userId?: string) {
  if (!userId) return;

  try {
    await sql`
      DELETE FROM users
      WHERE id = ${userId}
    `;
  } catch (error) {
    console.error("خطا در حذف حساب:", error);
    throw new Error("حذف حساب کاربری ناموفق بود.");
  }

  await signOut({
    redirectTo: "/",
  });
}
