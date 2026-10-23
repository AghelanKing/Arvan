"use client";
import { useActionState } from "react";
import { Button } from "../ui/button";
import Input from "../ui/Input";
import Label from "../ui/Label";
import { addMessage } from "@/app/contact/action";
import { MdErrorOutline } from "react-icons/md";
import Link from "next/link";

function ContactForm({ userId }: { userId?: string }) {
  const addMessageWithId = addMessage.bind(null, userId);
  const [state, formAction, isPending] = useActionState(addMessageWithId, {
    errors: {},
    success: false,
  });

  if (!userId) {
    return (
      <div
        dir="rtl"
        className="flex min-h-72 flex-col items-center justify-center rounded-2xl border border-[#342114]/10 bg-white p-7 text-center"
      >
        <div className="mb-4 flex size-16 items-center justify-center rounded-full bg-[#fcedda]">
          <MdErrorOutline className="size-8 text-[#895939]" />
        </div>

        <h2 className="text-xl font-bold text-[#342114]">
          برای ارسال پیام وارد حساب خود شوید
        </h2>

        <p className="mt-3 max-w-sm text-sm leading-7 text-[#765b46]">
          برای ارتباط با پشتیبانی آروان، ابتدا وارد حساب کاربری خود شوید.
        </p>

        <Link
          href="/login"
          className="mt-6 inline-flex h-11 items-center justify-center rounded-xl bg-[#342114] px-6 font-medium text-white transition hover:bg-[#4a2d1a]"
        >
          ورود به حساب کاربری
        </Link>
      </div>
    );
  }

  return (
    <div className="rounded-2xl border border-[#342114]/10 bg-white p-7">
      <p className="text-[#cca26e] font-semibold">پیام شما</p>

      <h2 className="text-3xl font-bold text-[#342114] mt-2">
        برای ما پیام بفرستید
      </h2>

      <form className="mt-8 space-y-5" action={formAction}>
        {state.message && (
          <div
            role="alert"
            className="mx-3 mt-4 flex min-w-0 items-start gap-2 rounded-xl bg-red-100 p-3 text-sm leading-6 text-red-700 sm:mx-4 sm:text-base"
          >
            <MdErrorOutline className="mt-1 size-5 shrink-0" />
            <p className="min-w-0 wrap-break-words">{state.message}</p>
          </div>
        )}
        <div>
          <Label
            htmlFor="subject"
            className="block text-sm font-medium text-[#342114] mb-2"
          >
            موضوع
          </Label>

          <Input
            id="subject"
            name="subject"
            type="text"
            placeholder="موضوع پیام"
            className="w-full h-12 rounded-xl border border-[#342114]/15 bg-[#fdfaf6] px-4 outline-none transition focus:border-[#cca26e]"
          />
          {state.errors?.subject?.map((error) => (
            <p
              className="mt-2 wrap-break-words text-sm leading-6 text-red-700"
              key={error}
            >
              {error}
            </p>
          ))}
        </div>

        <div>
          <Label
            htmlFor="message"
            className="block text-sm font-medium text-[#342114] mb-2"
          >
            پیام
          </Label>

          <textarea
            id="message"
            name="message"
            rows={5}
            placeholder="پیام خود را بنویسید..."
            className="w-full rounded-xl border border-[#342114]/15 bg-[#fdfaf6] p-4 resize-none outline-none transition focus:border-[#cca26e]"
          />
          {state.errors?.message?.map((error) => (
            <p
              className="mt-2 wrap-break-words text-sm leading-6 text-red-700"
              key={error}
            >
              {error}
            </p>
          ))}
        </div>

        <Button
          type="submit"
          disabled={isPending}
          className="w-full h-12 bg-[#342114] hover:bg-[#4a2d1a] cursor-pointer"
        >
          {isPending ? "در حال ارسال..." : "ارسال پیام"}
        </Button>
      </form>
    </div>
  );
}

export default ContactForm;
