"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogContent,
} from "../ui/dialog";
import { Pencil } from "lucide-react";
import Label from "../ui/Label";
import Input from "../ui/Input";
import { useActionState, useEffect, useState } from "react";
import { MdErrorOutline } from "react-icons/md";
import { PassState, updatePassword } from "@/app/account/action";
import toast from "react-hot-toast";

export function UpdatePassword({ userId }: { userId?: string | null }) {
  const [open, setOpen] = useState<boolean>(false);

  const initialState: PassState = {
    errors: {},
    message: undefined,
    success: false,
  };
  const UpdatePasswordWithId = updatePassword.bind(null, userId);

  const [state, formAction, pending] = useActionState(
    UpdatePasswordWithId,
    initialState,
  );

  const handleSubmit = (formData: FormData) => {
    formAction(formData);
    setOpen(false);
  };

  useEffect(() => {
    if (!state.message) return;

    if (state.success) {
      toast.success(state.message);
    } else {
      toast.error(state.message);
    }
  }, [state]);
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger
        render={
          <Button
            size="lg"
            className="w-full cursor-pointer gap-2 bg-[#54341f] py-6 text-white hover:bg-[#704a30] sm:w-auto"
          />
        }
      >
        <Pencil className="size-4" />
        تغییر رمز عبور
      </DialogTrigger>

      <DialogContent dir="rtl">
        <DialogHeader className="">
          <DialogTitle className="text-right">ویرایش پروفایل</DialogTitle>

          <DialogDescription className="text-right">
            رمز عبور خود را ویرایش کنید.
          </DialogDescription>
        </DialogHeader>

        <form action={handleSubmit}>
          {state.message && (
            <div className="bg-red-100 text-red-700 flex gap-x-2 items-center p-2 mt-1 mb-3 rounded-xl">
              <MdErrorOutline />
              <p>{state.message}</p>
            </div>
          )}
          <div>
            <Label className="mr-1!" htmlFor="password">
              رمز عبور جدید:
            </Label>
            <Input
              name="password"
              id="password"
              className="mt-2"
              type="password"
            />
          </div>
          {state.errors?.password &&
            state.errors?.password.map((error) => (
              <p className=" text-red-700 mt-2" key={error}>
                {error}
              </p>
            ))}

          <div className="mt-3">
            <Label className="mr-1!" htmlFor="passwordRepeat">
              تکرار رمز عبور:
            </Label>
            <Input
              name="passwordRepeat"
              id="passwordRepeat"
              className="mt-2"
              type="password"
            />
          </div>
          {state.errors?.passwordRepeat &&
            state.errors?.passwordRepeat.map((error) => (
              <p className=" text-red-700 mt-2" key={error}>
                {error}
              </p>
            ))}

          <DialogFooter className="mt-5">
            <DialogClose render={<Button variant="outline" type="button" />}>
              انصراف
            </DialogClose>

            <Button
              type="submit"
              className="bg-[#54341f] text-white hover:bg-[#704a30]"
              disabled={pending}
            >
              {pending ? "در حال تغییر دادن..." : "ذخیره تغییرات"}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
