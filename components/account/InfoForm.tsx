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
import { InfoState, UpdateProfile } from "@/app/account/action";
import toast from "react-hot-toast";

export function InfoForm({
  name,
  userId,
}: {
  name?: string | null;
  userId?: string | null;
}) {
  const [open, setOpen] = useState(false);

  const initialState: InfoState = {
    errors: {},
    message: undefined,
    success: false,
  };

  const UpdateProfileWithId = UpdateProfile.bind(null, userId);

  const [state, formAction, pending] = useActionState(
    UpdateProfileWithId,
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
        تغییر پروفایل
      </DialogTrigger>

      <DialogContent dir="rtl">
        <DialogHeader className="">
          <DialogTitle className="text-right">ویرایش پروفایل</DialogTitle>

          <DialogDescription className="text-right">
            اطلاعات حساب کاربری خود را ویرایش کنید.
          </DialogDescription>
        </DialogHeader>

        <form action={handleSubmit}>
          <div>
            <Label className="mr-1!" htmlFor="name">
              نام:
            </Label>
            <Input
              defaultValue={name as string}
              name="name"
              id="name"
              className="mt-2"
              type="text"
            />
          </div>
          {state.errors?.name &&
            state.errors?.name.map((error) => (
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
