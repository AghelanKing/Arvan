"use client";

import { ComponentProps } from "react";
import { Button } from "./button";
import { logout } from "@/app/login/action";

type signoutButton = {
  children: React.ReactNode;
  className?: string;
  variant?:
    | "default"
    | "outline"
    | "secondary"
    | "ghost"
    | "destructive"
    | "link";
  size?:
    | "default"
    | "xs"
    | "sm"
    | "lg"
    | "icon"
    | "icon-xs"
    | "icon-sm"
    | "icon-lg"
    | null
    | undefined;
} & ComponentProps<"button">;

function SignOutButton({
  children,
  className,
  variant = "destructive",
  size = "default",
  ...props
}: signoutButton) {
  return (
    <Button
      variant={variant}
      size={size}
      onClick={() => logout()}
      className={`cursor-pointer w-full justify-start px-px! bg-transparent! hover:bg-red-100! ${className}`}
      {...props}
    >
      {children}
    </Button>
  );
}

export default SignOutButton;
