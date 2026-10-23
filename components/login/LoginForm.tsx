"use client";

import Input from "../ui/Input";
import Label from "../ui/Label";
import { useActionState } from "react";
import { Button } from "../ui/button";
import Link from "next/link";
import { authenticate } from "@/app/login/action";
import { MdErrorOutline } from "react-icons/md";

function LoginForm() {
  const [errorMessage, formAction, pending] = useActionState(
    authenticate,
    undefined,
  );

  return (
    <form action={formAction} className="min-w-0">
      {errorMessage && (
        <div
          role="alert"
          className="mx-3 mt-4 flex min-w-0 items-start gap-2 rounded-xl bg-red-100 p-3 text-sm leading-6 text-red-700 sm:mx-4 sm:text-base"
        >
          <MdErrorOutline className="mt-1 size-5 shrink-0" />
          <p className="min-w-0 wrap-break-word">{errorMessage}</p>
        </div>
      )}

      <div className="space-y-4 p-4 sm:space-y-5 sm:p-5">
        <div className="min-w-0">
          <Label className="mr-1! text-sm sm:text-base" htmlFor="email">
            ایمیل:
          </Label>

          <Input
            name="email"
            id="email"
            className="mt-2 w-full min-w-0"
            type="email"
            dir="ltr"
            autoComplete="email"
            required
          />
        </div>

        <div className="min-w-0">
          <Label className="mr-1! text-sm sm:text-base" htmlFor="password">
            رمز عبور:
          </Label>

          <Input
            name="password"
            id="password"
            className="mt-2 w-full min-w-0"
            type="password"
            dir="ltr"
            autoComplete="current-password"
            required
          />
        </div>
      </div>

      <div className="mt-2 flex min-w-0 flex-col items-center border-t p-4 sm:p-5">
        <Button
          className="w-full cursor-pointer py-5"
          type="submit"
          disabled={pending}
        >
          {pending ? "در حال ورود..." : "ورود"}
        </Button>

        <p className="mt-4 text-center text-sm leading-7 text-[#8c6a43] sm:text-base">
          حساب کاربری ندارید؟{" "}
          <Link
            className="font-medium text-[#342114] underline-offset-4 hover:underline"
            href="/login/signup"
          >
            ثبت‌نام کنید
          </Link>
        </p>
      </div>
    </form>
  );
}

export default LoginForm;
