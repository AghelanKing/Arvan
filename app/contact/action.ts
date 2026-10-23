"use server";

import sql from "@/lib/db";
import z from "zod";

const messageSchema = z.object({
  subject: z.string().trim().min(1, {
    message: "این فیلد نباید خالی باشد",
  }),
  message: z.string().trim().min(1, {
    message: "این فیلد نباید خالی باشد",
  }),
});

type MessageState = {
  errors?: {
    subject?: string[];
    message?: string[];
  };
  success: boolean;
  message?: string;
};

export async function addMessage(
  userId: string | undefined,
  prevState: MessageState,
  formData: FormData,
): Promise<MessageState> {
  const validatedFields = messageSchema.safeParse({
    subject: formData.get("subject"),
    message: formData.get("message"),
  });

  if (!userId) {
    return {
      success: false,
      message: "برای ارسال پیام ابتدا وارد حساب کاربری خود شوید.",
    };
  }

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      success: false,
    };
  }

  try {
    const { subject, message } = validatedFields.data;

    await sql`
      INSERT INTO messages (user_id, subject, message)
      VALUES (${userId}, ${subject}, ${message})
    `;

    return {
      success: true,
    };
  } catch (error) {
    console.error("Error adding message:", error);

    return {
      success: false,
      message: "ارسال پیام با خطا مواجه شد. لطفاً دوباره تلاش کنید.",
    };
  }
}
