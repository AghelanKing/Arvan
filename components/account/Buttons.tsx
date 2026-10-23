"use client";
import { useState } from "react";
import { Button } from "../ui/button";
import DeleteDialog from "../ui/DeleteDialog";
import { FiTrash2 } from "react-icons/fi";
import { logout } from "@/app/login/action";
import { deleteAccount } from "@/app/account/action";

function Buttons({ userId }: { userId?: string }) {
  const [isLoading, setIsLoading] = useState(false);
  const [isLoadingDelete, setIsLoadingDelete] = useState(false);

  const handleSignOut = async () => {
    setIsLoading(true);
    try {
      await logout();
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleDelete = async () => {
    setIsLoadingDelete(true);
    try {
      await deleteAccount(userId);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoadingDelete(false);
    }
  };

  return (
    <div className="flex flex-col sm:flex-row items-center gap-y-2 sm:gap-x-3">
      <DeleteDialog
        handleDelete={handleSignOut}
        title="خروج"
        description="مطمئن هستید می‌خواهید خارج شوید؟؟"
        isExit={true}
      >
        <Button
          variant="destructive"
          disabled={isLoading}
          className="cursor-pointer px-6! py-6! font-bold!"
        >
          <FiTrash2 />
          {isLoading ? "در حال خارج شدن..." : "خروج از اکانت"}
        </Button>
      </DeleteDialog>
      <DeleteDialog
        handleDelete={handleDelete}
        title="حذف"
        description="آیا میخواهید کامل اکانت را حذف کنید؟"
      >
        <Button
          variant="destructive"
          disabled={isLoadingDelete}
          className="cursor-pointer px-6! py-6! font-bold!"
        >
          <FiTrash2 />
          {isLoadingDelete ? "در حال حذف..." : "حذف اکانت"}
        </Button>
      </DeleteDialog>
    </div>
  );
}

export default Buttons;
