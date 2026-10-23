"use client";

import { SlidersHorizontal } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import type { ReactNode } from "react";

export default function SofaFiltersSheet({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <Sheet>
      <SheetTrigger
        render={
          <Button
            variant="outline"
            className="w-full justify-center gap-2 border-[#54341f] text-[#54341f] hover:bg-[#fcedda] lg:hidden"
          >
            <SlidersHorizontal className="size-4" />
            فیلتر مبلمان
          </Button>
        }
      ></SheetTrigger>

      <SheetContent
        side="right"
        dir="rtl"
        className="w-[85vw] overflow-y-auto border-[#54341f]/20 bg-white p-4 sm:max-w-sm"
      >
        <SheetHeader className="mb-4 text-right">
          <SheetTitle className="text-xl font-bold text-[#342114]">
            فیلتر مبلمان
          </SheetTitle>
        </SheetHeader>

        {children}
      </SheetContent>
    </Sheet>
  );
}
