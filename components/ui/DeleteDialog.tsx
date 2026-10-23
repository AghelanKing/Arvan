"use client";

import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

import { ReactElement } from "react";

export default function DeleteDialog({
  title,
  description,
  handleDelete,
  isExit,
  children,
}: {
  title: string;
  description?: string;
  handleDelete: () => void;
  isExit?: boolean;
  children: ReactElement;
}) {
  return (
    <AlertDialog>
      <AlertDialogTrigger render={children} />

      <AlertDialogContent dir="rtl">
        <AlertDialogHeader>
          <AlertDialogTitle>{title}</AlertDialogTitle>

          {description && (
            <AlertDialogDescription className="text-right">
              {description}
            </AlertDialogDescription>
          )}
        </AlertDialogHeader>

        <AlertDialogFooter>
          <AlertDialogCancel>انصراف</AlertDialogCancel>

          <AlertDialogCancel
            onClick={handleDelete}
            className="cursor-pointer bg-red-100 text-red-700 hover:bg-red-300"
          >
            {isExit ? "خروج" : "حذف"}
          </AlertDialogCancel>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
