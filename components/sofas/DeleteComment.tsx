"use client";

import DeleteDialog from "../ui/DeleteDialog";
import { FiTrash2 } from "react-icons/fi";
import { useState } from "react";
import { Button } from "../ui/button";
import { deleteComment } from "./action";

function DeleteComment({
  productId,
  commentId,
}: {
  productId: string;
  commentId: string;
}) {
  const [isLoading, setIsLoading] = useState(false);
  const handleDelete = async () => {
    setIsLoading(true);
    try {
      await deleteComment(productId, commentId);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <DeleteDialog
      handleDelete={handleDelete}
      title="حذف"
      description="آیا میخواهید این نظر را حذف کنید؟"
    >
      <Button
        variant="destructive"
        disabled={isLoading}
        className="cursor-pointer bg-transparent!"
      >
        <FiTrash2 />
        {isLoading ? "در حال حذف..." : "حذف"}
      </Button>
    </DeleteDialog>
  );
}

export default DeleteComment;
